const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const REPORT_PATH = path.join(__dirname, '../test-results/report.json');

console.log('🚀 Starting Playwright tests across Desktop and Mobile...');

const pwArgs = ['playwright', 'test', '--reporter=json,html', ...process.argv.slice(2)];
const pw = spawn('npx', pwArgs, {
  stdio: 'inherit'
});

pw.on('close', (code) => {
  console.log('\n------------------------------------------------');
  console.log('📊 Automated Test Summary');
  console.log('------------------------------------------------');

  const resultsDir = path.dirname(REPORT_PATH);
  if (!fs.existsSync(resultsDir)) {
    fs.mkdirSync(resultsDir, { recursive: true });
  }

  if (!fs.existsSync(REPORT_PATH)) {
    console.error('❌ Error: JSON report not found at ' + REPORT_PATH);
    process.exit(1);
  }

  try {
    const report = JSON.parse(fs.readFileSync(REPORT_PATH, 'utf8'));
    const suites = report.suites || [];
    
    let totalTests = 0;
    let passed = 0;
    let failed = 0;
    let skipped = 0;
    const failures = [];

    const processSuite = (suite) => {
      if (suite.specs) {
        suite.specs.forEach(spec => {
          spec.tests.forEach(test => {
            totalTests++;
            const status = test.results[0]?.status;
            if (status === 'passed') passed++;
            else if (status === 'failed' || status === 'timedOut') {
              failed++;
              failures.push({
                title: `${suite.title} > ${spec.title}`,
                error: test.results[0]?.error?.message || 'Unknown error',
                location: `${spec.file}:${spec.line}`
              });
            } else if (status === 'skipped') skipped++;
          });
        });
      }
      if (suite.suites) suite.suites.forEach(processSuite);
    };

    suites.forEach(processSuite);

    console.log(`✅ Passed:  ${passed}`);
    console.log(`❌ Failed:  ${failed}`);
    console.log(`⏭️ Skipped: ${skipped}`);
    console.log(`📝 Total:   ${totalTests}`);

    if (failures.length > 0) {
      console.log('\n🔍 Detailed Failures:');
      failures.forEach((f, i) => {
        console.log(`\n${i + 1}. ${f.title}`);
        console.log(`   Location: ${f.location}`);
        console.log(`   Error: ${f.error.split('\n')[0]}`); // Only first line of error
      });
      process.exit(1);
    } else {
      console.log('\n✨ All tests passed successfully!');
    }
  } catch (err) {
    console.error('❌ Error parsing test report:', err.message);
    process.exit(1);
  }
});
