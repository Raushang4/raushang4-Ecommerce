const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'src/app');
const routes = [];

function getRoutes(dir, base = '') {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file.startsWith('[') && file.endsWith(']')) {
        // Skip dynamic routes for now or handle them
        continue;
      }
      routes.push(base + '/' + file);
      getRoutes(fullPath, base + '/' + file);
    }
  }
}

routes.push('/');
getRoutes(appDir);

console.log('Available Routes:', routes);

const filesToCheck = [];
function getFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getFiles(fullPath);
    } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
      filesToCheck.push(fullPath);
    }
  }
}
getFiles(appDir);

const brokenLinks = [];
const nonNextLinks = [];

for (const file of filesToCheck) {
  const content = fs.readFileSync(file, 'utf8');
  const linkRegex = /href="(\/[^"]*)"/g;
  let match;
  while ((match = linkRegex.exec(content)) !== null) {
    let href = match[1].split('#')[0]; // Remove anchor
    if (href === '') href = '/';
    
    // Check if route exists
    const exists = routes.includes(href) || 
                   routes.includes(href.replace(/\/$/, '')) ||
                   href.startsWith('/blog/') || 
                   href.startsWith('/case-study/') || 
                   href.startsWith('/portfolio/') ||
                   href.startsWith('/careers/') ||
                   href.startsWith('/legal/') ||
                   href.startsWith('/resources/');

    if (!exists && href !== '/') {
      brokenLinks.push({ file, href });
    }
    
    // Check if it's an <a> tag
    const index = match.index;
    const startOfTag = content.lastIndexOf('<', index);
    const tagContent = content.substring(startOfTag, index);
    if (tagContent.includes('<a')) {
      nonNextLinks.push({ file, href });
    }
  }
}

console.log('\n--- Broken Links ---');
brokenLinks.forEach(l => console.log(`${l.file}: ${l.href}`));

console.log('\n--- <a> tags instead of <Link> ---');
const uniqueFiles = [...new Set(nonNextLinks.map(l => l.file))];
uniqueFiles.forEach(f => console.log(f));
