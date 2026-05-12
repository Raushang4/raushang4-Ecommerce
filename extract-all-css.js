const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    // Skip some directories
    if (file === 'raushang4-Ecommerce' || file === 'react-app' || file === 'node_modules' || file === '.git' || file === '.next') return;
    
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(file));
    } else if (file.endsWith('.html')) {
      results.push(file);
    }
  });
  return results;
}

const htmlFiles = getHtmlFiles(rootDir);
console.log(`Found ${htmlFiles.length} HTML files to extract CSS from.`);

let allStyles = new Set();

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const regex = /<style[^>]*>([\s\S]*?)<\/style>/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const css = match[1].trim();
    if (css) {
      allStyles.add(css);
    }
  }
});

// Remove Astro scoped CIDs
let combinedCss = Array.from(allStyles).join('\n');
combinedCss = combinedCss.replace(/\[data-astro-cid-[a-z0-9]+\]/g, '');

fs.writeFileSync(path.join(__dirname, 'src/app/globals-extracted.css'), combinedCss);
console.log('Extracted CSS length:', combinedCss.length);
