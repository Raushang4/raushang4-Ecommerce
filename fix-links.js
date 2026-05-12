const fs = require('fs');

function replaceLinks(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Make sure 'Link' is imported
    if (!content.includes("import Link from 'next/link';")) {
        // Insert after 'next/image' or first import
        content = content.replace(/(import.*?;)/, "$1\nimport Link from 'next/link';");
    }

    // Replace <a href=... with <Link href=...
    content = content.replace(/<a\s+href=/g, '<Link href=');
    // Replace </a> with </Link>
    content = content.replace(/<\/a>/g, '</Link>');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
}

replaceLinks('src/app/about/page.js');
replaceLinks('src/app/case-study/page.js');
