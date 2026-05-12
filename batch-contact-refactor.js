const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'src/app');

const pageConfigs = {
  'woocommerce-development/page.js': {
    formName: 'WooCommerce Audit Request',
    buttonText: 'Get a WooCommerce Audit',
    fields: [
      { name: 'first_name', label: 'First name', type: 'text', placeholder: 'Rahul', required: true },
      { name: 'last_name', label: 'Last name', type: 'text', placeholder: 'Sharma', required: true },
      { name: 'email', label: 'Business email', type: 'email', placeholder: 'rahul@yourbrand.com', required: true, autoComplete: 'email' },
      { name: 'phone', label: 'Phone number', type: 'tel', placeholder: '+91 98765 43210', required: true, autoComplete: 'tel', inputMode: 'tel' },
      { name: 'store_url', label: 'WooCommerce store URL', type: 'url', placeholder: 'https://yourstore.com', required: false },
      { 
        name: 'woo_stage', 
        label: 'Where are you on WooCommerce?', 
        type: 'select', 
        placeholder: 'Select', 
        required: true,
        options: [
          'Not on WooCommerce yet — need a new store',
          'On WooCommerce — need a rebuild',
          'On WooCommerce — need optimisation & fixes',
          'Migrating to WooCommerce from another platform',
          'Need B2B / subscription / complex catalogue features'
        ]
      },
      { name: 'message', label: "What's the biggest thing broken? (optional)", type: 'textarea', placeholder: 'e.g. slow product pages, plugin bloat, broken Razorpay, bad migration, no B2B support…', required: false }
    ]
  },
  'shopify-development/page.js': {
    formName: 'Shopify Audit Request',
    buttonText: 'Get a Shopify Audit',
    fields: [
      { name: 'first_name', label: 'First name', type: 'text', placeholder: 'Rahul', required: true },
      { name: 'last_name', label: 'Last name', type: 'text', placeholder: 'Sharma', required: true },
      { name: 'email', label: 'Business email', type: 'email', placeholder: 'rahul@yourbrand.com', required: true, autoComplete: 'email' },
      { name: 'phone', label: 'Phone number', type: 'tel', placeholder: '+91 98765 43210', required: true, autoComplete: 'tel', inputMode: 'tel' },
      { name: 'store_url', label: 'Shopify store URL', type: 'url', placeholder: 'https://yourbrand.myshopify.com', required: false },
      { 
        name: 'shopify_stage', 
        label: 'Where are you on Shopify?', 
        type: 'select', 
        placeholder: 'Select', 
        required: true,
        options: [
          'Not on Shopify yet — need a new store',
          'On Shopify — need a rebuild',
          'On Shopify — need optimisation & fixes',
          'Migrating to Shopify from another platform',
          'Moving to Shopify Plus'
        ]
      },
      { name: 'message', label: "What's the biggest thing broken? (optional)", type: 'textarea', placeholder: 'e.g. slow PDPs, high cart abandonment, poor mobile CVR, bad migration…', required: false }
    ]
  },
  'web-design-company-delhi-ncr/page.js': {
    formName: 'NCR Website Review Request',
    buttonText: 'Book a Free Website Review',
    fields: [
      { name: 'first_name', label: 'First name', type: 'text', placeholder: 'Rahul', required: true },
      { name: 'last_name', label: 'Last name', type: 'text', placeholder: 'Sharma', required: true },
      { name: 'email', label: 'Business email', type: 'email', placeholder: 'rahul@yourbrand.com', required: true, autoComplete: 'email' },
      { name: 'phone', label: 'Phone number', type: 'tel', placeholder: '+91 98765 43210', required: true, autoComplete: 'tel', inputMode: 'tel' },
      { name: 'website_url', label: 'Website URL', type: 'url', placeholder: 'https://yourbrand.com', required: false },
      { 
        name: 'site_type', 
        label: 'Type of project', 
        type: 'select', 
        placeholder: 'Select type', 
        required: true,
        options: [
          'New business website',
          'Website redesign or rebuild',
          'Platform migration (Wix, Squarespace, legacy WP)',
          'Ecommerce build (separate service)',
          'Not sure yet — need a recommendation'
        ]
      },
      { 
        name: 'location', 
        label: 'Your location in NCR', 
        type: 'select', 
        placeholder: 'Select location', 
        required: true,
        options: ['Delhi', 'Noida / Greater Noida', 'Gurgaon', 'Ghaziabad', 'Faridabad', 'Outside NCR']
      },
      { name: 'message', label: "Biggest challenge (optional)", type: 'textarea', placeholder: "e.g. website doesn't generate enquiries, outdated design, slow on mobile, can't update content ourselves...", required: false }
    ]
  },
  'wordpress-development/page.js': {
    formName: 'WordPress Review Request',
    buttonText: 'Get a WordPress Review',
    fields: [
      { name: 'first_name', label: 'First name', type: 'text', placeholder: 'Rahul', required: true },
      { name: 'last_name', label: 'Last name', type: 'text', placeholder: 'Sharma', required: true },
      { name: 'email', label: 'Business email', type: 'email', placeholder: 'rahul@yourbrand.com', required: true, autoComplete: 'email' },
      { name: 'phone', label: 'Phone number', type: 'tel', placeholder: '+91 98765 43210', required: true, autoComplete: 'tel', inputMode: 'tel' },
      { name: 'website_url', label: 'Current WordPress site (if any)', type: 'url', placeholder: 'https://yourbrand.com', required: false },
      { 
        name: 'site_type', 
        label: 'What do you need?', 
        type: 'select', 
        placeholder: 'Select one', 
        required: true,
        options: [
          'New WordPress business website',
          'WooCommerce store',
          'Migration from page builder / legacy WP',
          'Rebuild of existing WordPress site',
          'Ongoing maintenance & support'
        ]
      },
      { name: 'message', label: "Biggest challenge (optional)", type: 'textarea', placeholder: 'e.g. slow site, too many plugins, stuck on Elementor, outdated theme, weak SEO, struggling to edit content...', required: false }
    ]
  },
  'wordpress-development-company-noida/page.js': {
    formName: 'Noida WordPress Review Request',
    buttonText: 'Book a Free Review',
    fields: [
      { name: 'first_name', label: 'First name', type: 'text', placeholder: 'Rahul', required: true },
      { name: 'last_name', label: 'Last name', type: 'text', placeholder: 'Sharma', required: true },
      { name: 'email', label: 'Business email', type: 'email', placeholder: 'rahul@yourbrand.com', required: true, autoComplete: 'email' },
      { name: 'phone', label: 'Phone number', type: 'tel', placeholder: '+91 98765 43210', required: true, autoComplete: 'tel', inputMode: 'tel' },
      { name: 'website_url', label: 'Website URL', type: 'url', placeholder: 'https://yourbrand.com', required: false },
      { 
        name: 'site_type', 
        label: 'Type of WordPress build needed', 
        type: 'select', 
        placeholder: 'Select type', 
        required: true,
        options: ['Business website', 'WooCommerce store', 'Migration / redesign']
      },
      { name: 'message', label: "Biggest challenge (optional)", type: 'textarea', placeholder: 'e.g. outdated WordPress setup, migration risk, slow pages, plugin bloat, weak SEO...', required: false }
    ]
  },
  'ecommerce-design-build/page.js': {
    formName: 'Store Audit Request',
    buttonText: 'Get a Store Audit',
    fields: [
      { name: 'first_name', label: 'First name', type: 'text', placeholder: 'Rahul', required: true },
      { name: 'last_name', label: 'Last name', type: 'text', placeholder: 'Sharma', required: true },
      { name: 'email', label: 'Business email', type: 'email', placeholder: 'rahul@yourbrand.com', required: true, autoComplete: 'email' },
      { name: 'phone', label: 'Phone number', type: 'tel', placeholder: '+91 98765 43210', required: true, autoComplete: 'tel', inputMode: 'tel' },
      { name: 'store_url', label: 'Store URL', type: 'url', placeholder: 'https://yourbrand.com', required: false },
      { 
        name: 'monthly_sessions', 
        label: 'Monthly sessions (approx)', 
        type: 'select', 
        placeholder: 'Select range', 
        required: true,
        options: ['Under 1,000', '1,000 – 5,000', '5,000 – 20,000', '20,000+']
      },
      { name: 'message', label: "Biggest challenge (optional)", type: 'textarea', placeholder: 'e.g. high cart abandonment, poor mobile CVR, low conversion on product pages...', required: false }
    ]
  },
  'analytics-attribution/page.js': {
    formName: 'Tracking Audit Request',
    buttonText: 'Get a Tracking Audit',
    fields: [
      { name: 'first_name', label: 'First name', type: 'text', placeholder: 'Rahul', required: true },
      { name: 'last_name', label: 'Last name', type: 'text', placeholder: 'Sharma', required: true },
      { name: 'email', label: 'Business email', type: 'email', placeholder: 'rahul@yourbrand.com', required: true, autoComplete: 'email' },
      { name: 'phone', label: 'Phone number', type: 'tel', placeholder: '+91 98765 43210', required: true, autoComplete: 'tel', inputMode: 'tel' },
      { name: 'store_url', label: 'Store URL', type: 'url', placeholder: 'https://yourbrand.com', required: false },
      { 
        name: 'monthly_ad_spend', 
        label: 'Monthly ad spend (approx)', 
        type: 'select', 
        placeholder: 'Select range', 
        required: true,
        options: ['Under ₹50,000', '₹50,000 – ₹2,00,000', '₹2,00,000 – ₹10,00,000', '₹10,00,000+']
      },
      { name: 'message', label: "What's your tracking situation?", type: 'textarea', placeholder: 'e.g. our GA4 shows 120 conversions/month but Meta claims 280, we have no idea which is right...', required: false }
    ]
  },
  'wordpress-care/page.js': {
    formName: 'WordPress Care Request',
    buttonText: 'Get a Site Audit',
    fields: [
      { name: 'first_name', label: 'First name', type: 'text', placeholder: 'Rahul', required: true },
      { name: 'last_name', label: 'Last name', type: 'text', placeholder: 'Sharma', required: true },
      { name: 'email', label: 'Business email', type: 'email', placeholder: 'rahul@yoursite.com', required: true, autoComplete: 'email' },
      { name: 'phone', label: 'Phone number', type: 'tel', placeholder: '+91 98765 43210', required: true, autoComplete: 'tel', inputMode: 'tel' },
      { name: 'site_url', label: 'WordPress site URL', type: 'url', placeholder: 'https://yoursite.com', required: false },
      { 
        name: 'site_type', 
        label: 'What are you running?', 
        type: 'select', 
        placeholder: 'Select', 
        required: true,
        options: ['WordPress content or business site', 'WooCommerce store', 'WordPress + WooCommerce (content + shop)', 'WordPress membership or subscription site']
      },
      { 
        name: 'main_concern', 
        label: "What's the main concern?", 
        type: 'select', 
        placeholder: 'Select', 
        required: true,
        options: [
            'Updates break things — I need a safe process',
            'Security — site was hacked or I\'m worried it will be',
            'Slow performance and bad Core Web Vitals',
            'WooCommerce payment or order issues',
            'Backups and disaster recovery',
            'Server / hosting upgrade needed',
            'All of the above'
        ]
      },
      { name: 'message', label: "Anything else? (optional)", type: 'textarea', placeholder: 'e.g. site was hacked last year, currently on shared hosting, updates have broken WooCommerce twice…', required: false }
    ]
  },
  'performance-marketing/page.js': {
    formName: 'Marketing Audit Request',
    buttonText: 'Get a Marketing Audit',
    fields: [
      { name: 'first_name', label: 'First name', type: 'text', placeholder: 'Rahul', required: true },
      { name: 'last_name', label: 'Last name', type: 'text', placeholder: 'Sharma', required: true },
      { name: 'email', label: 'Business email', type: 'email', placeholder: 'rahul@yourbrand.com', required: true, autoComplete: 'email' },
      { name: 'phone', label: 'Phone number', type: 'tel', placeholder: '+91 98765 43210', required: true, autoComplete: 'tel', inputMode: 'tel' },
      { name: 'store_url', label: 'Store URL', type: 'url', placeholder: 'https://yourbrand.com', required: false },
      { 
        name: 'monthly_ad_spend', 
        label: 'Monthly ad spend (approx)', 
        type: 'select', 
        placeholder: 'Select range', 
        required: true,
        options: ['Under ₹50,000', '₹50,000 – ₹2,00,000', '₹2,00,000 – ₹10,00,000', '₹10,00,000+']
      },
      { name: 'message', label: "Biggest challenge (optional)", type: 'textarea', placeholder: 'e.g. high CPA, ads not scaling, tracking is broken, want to move away from an agency...', required: false }
    ]
  },
  'service-businesses/page.js': {
    formName: 'Service Business Pipeline Audit',
    buttonText: 'Get a Pipeline Audit',
    fields: [
        { name: 'name', label: 'Name', type: 'text', placeholder: 'Your name', required: true },
        { name: 'email', label: 'Email', type: 'email', placeholder: 'you@company.com', required: true, autoComplete: 'email' },
        { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 98765 43210', required: true, autoComplete: 'tel', inputMode: 'tel' },
        { name: 'service_type', label: 'What type of service business are you?', type: 'text', placeholder: 'e.g. Interior design, CCTV installation, coaching centre, clinic...', required: false },
        { 
            name: 'client_source', 
            label: 'Where do most of your clients come from right now?', 
            type: 'select', 
            placeholder: 'Select your primary client source', 
            required: true,
            options: ['Referrals / Word of mouth', 'Google search (organic)', 'Google Ads', 'Social media', 'Mix of the above']
        },
        { name: 'message', label: "What's the main thing you want to fix?", type: 'textarea', placeholder: 'Unpredictable pipeline, no digital enquiries, losing to less capable competitors, slow lead follow-up...', required: false }
    ]
  },
  'manufacturers/page.js': {
    formName: 'Manufacturer Pipeline Audit',
    buttonText: 'Get a Pipeline Audit',
    fields: [
        { name: 'name', label: 'Name', type: 'text', placeholder: 'Your name', required: true },
        { name: 'email', label: 'Email', type: 'email', placeholder: 'you@company.com', required: true, autoComplete: 'email' },
        { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 98765 43210', required: true, autoComplete: 'tel', inputMode: 'tel' },
        { name: 'product_category', label: 'What do you manufacture or supply?', type: 'text', placeholder: 'e.g. Industrial pumps, steel fabrication, packaging materials...', required: false },
        { 
            name: 'lead_source', 
            label: 'Where are most of your leads coming from right now?', 
            type: 'select', 
            placeholder: 'Select your primary lead source', 
            required: true,
            options: ['IndiaMart / TradeIndia', 'Referrals / Word of mouth', 'Our own website', 'Direct sales / cold outreach', 'Mix of the above']
        },
        { name: 'message', label: "What's the main thing you want to fix?", type: 'textarea', placeholder: 'Platform dependency, no website enquiries, bad lead quality, no follow-up system...', required: false }
    ]
  },
  'd2c-ecommerce/page.js': {
    formName: 'D2C Store Audit Request',
    buttonText: 'Get a Store Audit',
    fields: [
      { name: 'first_name', label: 'First name', type: 'text', placeholder: 'Rahul', required: true },
      { name: 'last_name', label: 'Last name', type: 'text', placeholder: 'Sharma', required: true },
      { name: 'email', label: 'Business email', type: 'email', placeholder: 'rahul@yourbrand.com', required: true, autoComplete: 'email' },
      { name: 'phone', label: 'Phone number', type: 'tel', placeholder: '+91 98765 43210', required: true, autoComplete: 'tel', inputMode: 'tel' },
      { name: 'store_url', label: 'Store URL', type: 'url', placeholder: 'https://yourbrand.com', required: false },
      { 
        name: 'monthly_sessions', 
        label: 'Monthly sessions (approx)', 
        type: 'select', 
        placeholder: 'Select range', 
        required: true,
        options: ['Under 1,000', '1,000 – 5,000', '5,000 – 20,000', '20,000+']
      },
      { name: 'message', label: "Biggest challenge (optional)", type: 'textarea', placeholder: 'e.g. high cart abandonment, poor mobile CVR, ads not converting on landing pages...', required: false }
    ]
  }
};

Object.entries(pageConfigs).forEach(([pagePath, config]) => {
  const fullPath = path.join(appDir, pagePath);
  if (!fs.existsSync(fullPath)) {
    console.log(`[SKIP] ${pagePath} not found`);
    return;
  }

  let content = fs.readFileSync(fullPath, 'utf8');
  let originalContent = content;

  // 1. Add import
  if (!content.includes("import UnifiedContactForm")) {
    const relPath = path.relative(path.dirname(fullPath), path.join(__dirname, 'src/components/UnifiedContactForm')).replace(/\\/g, '/');
    const importPath = relPath.startsWith('.') ? relPath : './' + relPath;
    
    const lines = content.split('\n');
    let lastImportIndex = -1;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith('import ')) {
        lastImportIndex = i;
      }
    }
    if (lastImportIndex !== -1) {
      lines.splice(lastImportIndex + 1, 0, `import UnifiedContactForm from '${importPath}';`);
      content = lines.join('\n');
    } else {
      content = `import UnifiedContactForm from '${importPath}';\n` + content;
    }
  }

  // 2. Define fields array inside the component
  const componentMatch = content.match(/export default function \w+\(\) {/);
  if (componentMatch && !content.includes(`const formFields = [`)) {
    const insertIndex = componentMatch.index + componentMatch[0].length;
    const fieldsStr = `\n  const formFields = ${JSON.stringify(config.fields, null, 2)};\n`;
    content = content.slice(0, insertIndex) + fieldsStr + content.slice(insertIndex);
  }

  // 3. Replace form block
  // We'll target the <form> tags and replace them with the component
  // Use a regex that captures everything inside the form
  const formRegex = /<form[\s\S]*?<\/form>/g;
  const replacement = `
<UnifiedContactForm 
  formName="${config.formName}"
  pageSource="${pagePath.split('/')[0]}"
  buttonText="${config.buttonText}"
  fields={formFields}
/>`.trim();

  content = content.replace(formRegex, replacement);

  if (content !== originalContent) {
    fs.writeFileSync(fullPath, content);
    console.log(`[SUCCESS] Refactored ${pagePath}`);
  }
});
