const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'src/app');

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(file));
    } else if (file.endsWith('page.js')) {
      results.push(file);
    }
  });
  return results;
}

const files = getFiles(appDir);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // 1. Replace <a> with <Link>
  // Skip external links (http, mailto, tel)
  content = content.replace(/<a\s+([^>]*?)href="(\/[^"]*?)"([^>]*?)>/g, (match, before, href, after) => {
    return `<Link ${before}href="${href}"${after}>`;
  });
  content = content.replace(/<\/a>/g, '</Link>');

  // 2. Replace TickerSection
  const tickerRegex = /<div className="ticker-wrap"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g;
  // Let's try a simpler one first
  const tickerRegexSimple = /<div className="ticker-wrap"[\s\S]*?Brands we have worked with[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g;
  content = content.replace(tickerRegexSimple, '<TickerSection />');

  // 3. Replace Testimonials
  const testimonialsRegex = /<section className="tsc-section"[\s\S]*?<\/section>/g;
  content = content.replace(testimonialsRegex, '<Testimonials />');

  // 4. Add Imports
  const importsToAdd = [];
  if (content.includes('<Link') && !content.includes("import Link from 'next/link'")) {
    importsToAdd.push("import Link from 'next/link';");
  }
  if (content.includes('<TickerSection') && !content.includes("import TickerSection from")) {
    const relPath = path.relative(path.dirname(file), path.join(__dirname, 'src/components/TickerSection')).replace(/\\/g, '/');
    const importPath = relPath.startsWith('.') ? relPath : './' + relPath;
    importsToAdd.push(`import TickerSection from '${importPath}';`);
  }
  if (content.includes('<Testimonials') && !content.includes("import Testimonials from")) {
    const relPath = path.relative(path.dirname(file), path.join(__dirname, 'src/components/Testimonials')).replace(/\\/g, '/');
    const importPath = relPath.startsWith('.') ? relPath : './' + relPath;
    importsToAdd.push(`import Testimonials from '${importPath}';`);
  }

  if (importsToAdd.length > 0) {
    // Insert after the last import
    const lines = content.split('\n');
    let lastImportIndex = -1;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith('import ')) {
        lastImportIndex = i;
      }
    }
    if (lastImportIndex !== -1) {
      lines.splice(lastImportIndex + 1, 0, ...importsToAdd);
      content = lines.join('\n');
    } else {
      content = importsToAdd.join('\n') + '\n' + content;
    }
  }

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log(`[SUCCESS] Refactored ${path.relative(appDir, file)}`);
  }
});
