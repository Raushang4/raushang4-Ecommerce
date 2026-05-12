const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      let newContent = content
        .replace(/Web Impetus/g, 'raushang4')
        .replace(/WebImpetus/g, 'raushang4')
        .replace(/webimpetus\.com/g, 'raushang4.com')
        .replace(/webimpetus/g, 'raushang4');
      
      if (newContent !== content) {
        fs.writeFileSync(fullPath, newContent);
      }
    }
  }
}

processDir(path.join(__dirname, 'src'));
console.log('Renaming complete!');
