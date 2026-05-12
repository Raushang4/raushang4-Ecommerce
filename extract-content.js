const fs = require('fs');
const path = require('path');

const originalDir = path.join(__dirname, '../');
const contentDir = path.join(__dirname, 'src/content');

const directoriesToProcess = [
  'blog',
  'careers',
  'case-study',
  'legal',
  'portfolio'
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
  
  // Self close tags using regex
  jsx = jsx.replace(/<img([^>]*?)src="([^"]+)"([^>]*?)>/gi, (match, before, src, after) => {
    let finalSrc = src;
    if (src.startsWith('_astro/') || src.startsWith('fonts/')) {
        finalSrc = '/' + src;
    }
    return `<img${before}src="${finalSrc}"${after} />`;
  });
  jsx = jsx.replace(/<input([^>]*?)(?<!\/)>/gi, '<input$1 />');
  jsx = jsx.replace(/<br\s*>/gi, '<br />');
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

function extractMainContent(html) {
  let startIndex = html.indexOf('<div className="hero-wrap">');
  if (startIndex === -1) startIndex = html.indexOf('<section');
  if (startIndex === -1) startIndex = html.indexOf('<div className="page-wrap">');
  
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

directoriesToProcess.forEach(dir => {
  const sourceDir = path.join(originalDir, dir);
  const targetDir = path.join(contentDir, dir);
  
  if (!fs.existsSync(sourceDir)) {
    console.log(`[SKIP] Directory ${dir} not found`);
    return;
  }
  
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  
  const files = fs.readdirSync(sourceDir).filter(f => f.endsWith('.html'));
  
  files.forEach(file => {
    const slug = file.replace('.html', '');
    const filePath = path.join(sourceDir, file);
    
    let html = fs.readFileSync(filePath, 'utf8');
    
    // Clean astro stuff
    html = html.replace(/data-astro-cid-[a-z0-9]+(?:="[^"]*")?/g, '');
    html = html.replace(/<!---->/g, '');
    
    const metadata = extractMetadata(html);
    const jsx = convertToJSX(html);
    const content = extractMainContent(jsx);
    
    const output = {
      slug,
      ...metadata,
      content
    };
    
    fs.writeFileSync(path.join(targetDir, `${slug}.json`), JSON.stringify(output, null, 2));
    console.log(`[SUCCESS] Extracted ${dir}/${slug}.json`);
  });
});
