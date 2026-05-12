const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, 'src/content');

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(file));
    } else if (file.endsWith('.json')) {
      results.push(file);
    }
  });
  return results;
}

const files = getFiles(contentDir);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Fix internal links in JSON content
  // Example: ../../webimpetus.com/case-study.html -> /case-study
  // Example: ../webimpetus.com/index.html -> /
  
  // Replace long paths with relative root paths
  content = content.replace(/\.\.\/\.\.\/webimpetus\.com\//g, '/');
  content = content.replace(/\.\.\/webimpetus\.com\//g, '/');
  content = content.replace(/webimpetus\.com\//g, '/');
  
  // Replace .html extensions
  content = content.replace(/\.html/g, '');
  
  // Fix "index" links
  content = content.replace(/"\/index"/g, '"/"');
  content = content.replace(/'\/index'/g, "'/'");

  // Fix the "raushang4.com" variants too
  content = content.replace(/\.\.\/\.\.\/raushang4\.com\//g, '/');
  content = content.replace(/\.\.\/raushang4\.com\//g, '/');
  content = content.replace(/raushang4\.com\//g, '/');

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log(`[SUCCESS] Fixed links in ${path.relative(contentDir, file)}`);
  }
});
