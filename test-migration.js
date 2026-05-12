const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'src/app');
const contentDir = path.join(__dirname, 'src/content');

console.log('--- Starting Migration Integrity Test ---\n');

let totalTests = 0;
let passedTests = 0;

function test(name, fn) {
  totalTests++;
  try {
    fn();
    console.log(`[PASS] ${name}`);
    passedTests++;
  } catch (err) {
    console.error(`[FAIL] ${name}: ${err.message}`);
  }
}

// 1. Check Layout Centralization
test('Root layout contains GlobalNavigation and Footer', () => {
  const layoutContent = fs.readFileSync(path.join(appDir, 'layout.js'), 'utf8');
  if (!layoutContent.includes('<GlobalNavigation />')) throw new Error('Missing GlobalNavigation in layout.js');
  if (!layoutContent.includes('<Footer />')) throw new Error('Missing Footer in layout.js');
});

// 2. Check Homepage Cleanup
test('Homepage (page.js) does not have redundant layout components', () => {
  const homeContent = fs.readFileSync(path.join(appDir, 'page.js'), 'utf8');
  if (homeContent.includes('<GlobalNavigation')) throw new Error('Homepage still has redundant GlobalNavigation');
  if (homeContent.includes('<Footer')) throw new Error('Homepage still has redundant Footer');
});

// 3. Check Top-Level Pages
const topLevelPages = [
  'about', 'shopify-development', 'wordpress-care', 'contact'
];

topLevelPages.forEach(page => {
  test(`Top-level page exists: /${page}`, () => {
    const pagePath = path.join(appDir, page, 'page.js');
    if (!fs.existsSync(pagePath)) throw new Error(`File not found: ${pagePath}`);
    
    const content = fs.readFileSync(pagePath, 'utf8');
    if (content.includes('<main>')) throw new Error(`Redundant <main> tag found in /${page}`);
  });
});

// 4. Check Dynamic Routes Content
const dynamicCategories = ['blog', 'portfolio', 'case-study'];
dynamicCategories.forEach(cat => {
  test(`Content extraction for ${cat} directory`, () => {
    const catPath = path.join(contentDir, cat);
    if (!fs.existsSync(catPath)) throw new Error(`Content directory missing: ${catPath}`);
    
    const files = fs.readdirSync(catPath);
    if (files.length === 0) throw new Error(`No JSON files extracted for ${cat}`);
    
    const firstFile = files[0];
    const data = JSON.parse(fs.readFileSync(path.join(catPath, firstFile), 'utf8'));
    if (!data.slug || !data.content) throw new Error(`Invalid JSON structure in ${cat}/${firstFile}`);
  });
});

// 5. Check Link Fixing
test('Internal links are updated to Next.js routes', () => {
  // Check a sample file for the fix
  const aboutPath = path.join(appDir, 'about', 'page.js');
  if (fs.existsSync(aboutPath)) {
    const content = fs.readFileSync(aboutPath, 'utf8');
    if (content.includes('.html')) {
        // Some .html might be valid in text, but let's check for hrefs
        if (content.match(/href="[^"]+\.html"/)) throw new Error('Found unresolved .html link in about page');
    }
  }
});

console.log(`\n--- Test Results: ${passedTests}/${totalTests} Passed ---`);

if (passedTests < totalTests) {
  process.exit(1);
}
