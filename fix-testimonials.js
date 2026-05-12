const fs = require('fs');
const path = require('path');

const filesToFix = [
  'src/app/about/page.js',
  'src/app/d2c-ecommerce/page.js',
  'src/app/service-businesses/page.js',
  'src/app/manufacturers/page.js'
];

filesToFix.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add import if not exists
    if (!content.includes('import Testimonials from')) {
      content = content.replace("import Link from 'next/link';", "import Link from 'next/link';\nimport Testimonials from '../../components/Testimonials';");
    }

    // Replace the raw <section className="tsc-section">...</section> with <Testimonials />
    const regex = /<section className="tsc-section"[\s\S]*?<\/section>/g;
    content = content.replace(regex, '<Testimonials />');

    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${file}`);
  }
});
