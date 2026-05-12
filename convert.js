const fs = require('fs');
const path = require('path');

const originalDir = path.join(__dirname, '../');
const appDir = path.join(__dirname, 'src/app');

const pagesToMigrate = [
  'about.html',
  'our-work.html',
  'contact.html',
  'ecommerce-design-build.html',
  'web-design.html',
  'performance-marketing.html',
  'cro-optimisation.html',
  'analytics-attribution.html',
  'seo-organic.html',
  'd2c-ecommerce.html',
  'manufacturers.html',
  'service-businesses.html',
  'blog.html',
  'careers.html',
  'case-study.html',
  'shopify-development.html',
  'web-design-company-delhi-ncr.html',
  'woocommerce-development.html',
  'wordpress-care.html',
  'wordpress-development-company-noida.html',
  'wordpress-development.html'
];

function convertToJSX(html) {
  let jsx = html;
  
  // Replace class= with className=
  jsx = jsx.replace(/class=/g, 'className=');
  
  // Replace for= with htmlFor=
  jsx = jsx.replace(/for=/g, 'htmlFor=');

  // Fix common React DOM properties
  jsx = jsx.replace(/tabindex=/g, 'tabIndex=');
  jsx = jsx.replace(/autocomplete=/g, 'autoComplete=');
  jsx = jsx.replace(/inputmode=/g, 'inputMode=');
  
  // Strip HTML comments which break JSX
  jsx = jsx.replace(/<!--[\s\S]*?-->/g, '');
  
  // Transform <img> to <Image />
  jsx = jsx.replace(/<img\b([^>]*?)src="([^"]+)"([^>]*?)>/gi, (match, before, src, after) => {
    let attrs = (before + ' ' + after).trim();
    
    let finalSrc = src;
    // Ensure leading slash for local paths
    if (src.startsWith('_astro/') || src.startsWith('fonts/')) {
      finalSrc = '/' + src;
    }
    
    // Convert width="100" to width={100}
    attrs = attrs.replace(/width="(\d+)"/gi, 'width={$1}');
    // Convert height="100" to height={100}
    attrs = attrs.replace(/height="(\d+)"/gi, 'height={$1}');
    
    // Remove redundant attributes that Next.js handles automatically
    attrs = attrs.replace(/loading="[^"]*"/gi, '');
    attrs = attrs.replace(/decoding="[^"]*"/gi, '');
    attrs = attrs.replace(/alt=""/gi, 'alt="image"'); // ensure alt exists
    
    // Convert fetchpriority to fetchPriority
    attrs = attrs.replace(/fetchpriority=/gi, 'fetchPriority=');
    // Convert srcset to srcSet
    attrs = attrs.replace(/srcset=/gi, 'srcSet=');
    // Remove inferSize
    attrs = attrs.replace(/infersize(?:="[^"]*")?/gi, '');

    // If width/height are still missing, provide a safe fallback or use fill
    if (!attrs.includes('width={') && !attrs.includes('fill')) {
      attrs += ' width={1200} height={800} style={{ objectFit: "cover" }}';
    }

    // Clean up multiple spaces
    attrs = attrs.replace(/\s+/g, ' ').trim();

    return `<Image src="${finalSrc}" ${attrs} />`;
  });

  // Self close remaining tags using regex
  // <input> tags
  jsx = jsx.replace(/<input([^>]*?)(?<!\/)>/gi, '<input$1 />');
  // <br> tags
  jsx = jsx.replace(/<br\s*>/gi, '<br />');
  // <hr> tags
  jsx = jsx.replace(/<hr\s*>/gi, '<hr />');

  // SVG attributes
  jsx = jsx.replace(/stroke-width=/g, 'strokeWidth=');
  jsx = jsx.replace(/stroke-linecap=/g, 'strokeLinecap=');
  jsx = jsx.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
  jsx = jsx.replace(/fill-rule=/g, 'fillRule=');
  jsx = jsx.replace(/clip-rule=/g, 'clipRule=');
  jsx = jsx.replace(/viewbox=/gi, 'viewBox=');

  // Handle styles
  jsx = jsx.replace(/style="([^"]*)"/g, (match, styleString) => {
    if (!styleString.trim()) return `style={{}}`;
    
    const styleObj = {};
    styleString.split(';').forEach(rule => {
      if (!rule.trim()) return;
      const [key, value] = rule.split(':').map(s => s.trim());
      if (!key || !value) return;
      
      let finalKey = key;
      if (!key.startsWith('--')) {
        finalKey = key.replace(/-([a-z])/g, (m, letter) => letter.toUpperCase());
      }
      styleObj[finalKey] = value;
    });
    
    return `style={${JSON.stringify(styleObj)}}`;
  });

  // Remove <script> tags
  jsx = jsx.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

  return jsx;
}

function extractContent(html) {
  let startIndex = html.indexOf('<div className="hero-wrap">');
  if (startIndex === -1) startIndex = html.indexOf('<section');
  if (startIndex === -1) startIndex = html.indexOf('<div className="page-wrap">'); // fallback
  
  let endIndex = html.indexOf('<footer');
  if (endIndex === -1) endIndex = html.length;

  if (startIndex !== -1 && endIndex !== -1) {
    return html.substring(startIndex, endIndex);
  }
  
  return html;
}

function extractMetadata(html) {
  const metadata = {};
  
  const titleMatch = html.match(/<title>(.*?)<\/title>/i);
  if (titleMatch) metadata.title = titleMatch[1];
  
  const descMatch = html.match(/<meta name="description" content="(.*?)"/i);
  if (descMatch) metadata.description = descMatch[1];
  
  return metadata;
}

pagesToMigrate.forEach(page => {
  const pageName = page.replace('.html', '');
  const filePath = path.join(originalDir, page);
  
  if (!fs.existsSync(filePath)) {
    console.log(`[SKIP] ${page} not found`);
    return;
  }
  
  let html = fs.readFileSync(filePath, 'utf8');
  
  const metadata = extractMetadata(html);
  
  // Clean astro stuff before jsx conversion to avoid stray attributes
  html = html.replace(/data-astro-cid-[a-z0-9]+(?:="[^"]*")?/g, '');
  html = html.replace(/<!---->/g, '');
  
  // Convert HTML to JSX
  let jsx = convertToJSX(html);
  
  // Extract main content
  let mainContent = extractContent(jsx);
  
  // Prepare Next.js page structure
  const capitalizedName = pageName.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
  
  const pageContent = `import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: ${JSON.stringify(metadata.title || capitalizedName)},
  description: ${JSON.stringify(metadata.description || '')},
};

export default function ${capitalizedName}Page() {
  return (
    <>
      ${mainContent}
    </>
  );
}
`;

  const routeDir = path.join(appDir, pageName);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(routeDir, 'page.js'), pageContent);
  console.log(`[SUCCESS] Generated ${pageName}/page.js`);
});
