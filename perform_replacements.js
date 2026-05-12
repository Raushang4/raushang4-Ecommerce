const fs = require('fs');
const path = require('path');

const rootDir = path.join(process.cwd(), 'raushang4-Ecommerce', 'src');

// Order matters: more specific first
const replacements = [
  { search: /webimpetus\.com/gi, replace: 'raushang4.com' },
  { search: /Web\s+Impetus/gi, replace: 'raushang4 E-Commerce' },
  { search: /WebImpetus/gi, replace: 'raushang4' }
];

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

const modifiedFiles = [];

walk(rootDir, (filePath) => {
  const ext = path.extname(filePath);
  if (!['.js', '.jsx', '.json', '.ts', '.tsx'].includes(ext)) return;

  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Apply general replacements
  replacements.forEach(({ search, replace }) => {
    content = content.replace(search, replace);
  });

  // Handle &amp; -> & in metadata titles
  if (ext === '.json') {
    try {
      let json = JSON.parse(content);
      if (json.title && typeof json.title === 'string') {
        json.title = json.title.replace(/&amp;/g, '&');
      }
      content = JSON.stringify(json, null, 2);
    } catch (e) {
      content = content.replace(/"title":\s*"(.*?)&amp;(.*?)"/g, '"title": "$1&$2"');
    }
  } else if (['.js', '.jsx', '.ts', '.tsx'].includes(ext)) {
    content = content.replace(/(title[:=]\s*["'])(.*?)(&amp;)(.*?)(["'])/g, (match, p1, p2, p3, p4, p5) => {
        return p1 + p2 + '&' + p4 + p5;
    });
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    modifiedFiles.push(path.relative(process.cwd(), filePath));
  }
});

console.log('Modified files:');
modifiedFiles.forEach(f => console.log(f));
