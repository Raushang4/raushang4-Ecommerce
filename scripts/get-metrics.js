/**
 * GA4 Metrics Fetcher
 * This script pulls data from the Google Analytics 4 Data API.
 * Requires GA4_PROPERTY_ID, GA_CLIENT_EMAIL, and GA_PRIVATE_KEY in .env.local.
 */

const path = require('path');
// Load .env.local from the project root
require('dotenv').config({ path: path.resolve(process.cwd(), '.env.local') });

const { BetaAnalyticsDataClient } = require('@google-analytics/data');

const propertyId = process.env.GA4_PROPERTY_ID;

// Construct credentials from environment variables
const clientOptions = {};
if (process.env.GA_CLIENT_EMAIL && process.env.GA_PRIVATE_KEY) {
  clientOptions.credentials = {
    client_email: process.env.GA_CLIENT_EMAIL,
    private_key: process.env.GA_PRIVATE_KEY.replace(/\\n/g, '\n'),
  };
} else {
  console.error("Error: GA_CLIENT_EMAIL or GA_PRIVATE_KEY is missing in .env.local");
  process.exit(1);
}

const analyticsDataClient = new BetaAnalyticsDataClient(clientOptions);

async function runReport() {
  if (!propertyId) {
    console.error("Error: GA4_PROPERTY_ID is missing in .env.local");
    process.exit(1);
  }

  try {
    // 1. Fetch Traffic Sources (Channel Groups)
    const [trafficResponse] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
      dimensions: [{ name: 'sessionDefaultChannelGroup' }],
      metrics: [
        { name: 'activeUsers' },
        { name: 'sessions' },
        { name: 'screenPageViews' }
      ],
    });

    // 2. Fetch Top 10 Pages
    const [pageResponse] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
      dimensions: [{ name: 'pagePath' }],
      metrics: [{ name: 'screenPageViews' }],
      limit: 10,
    });

    const reportData = {
      period: 'Last 30 Days',
      generatedAt: new Date().toISOString(),
      trafficSources: trafficResponse.rows.map(row => ({
        source: row.dimensionValues[0].value,
        activeUsers: parseInt(row.metricValues[0].value),
        sessions: parseInt(row.metricValues[1].value),
        pageViews: parseInt(row.metricValues[2].value)
      })),
      topPages: pageResponse.rows.map(row => ({
        path: row.dimensionValues[0].value,
        views: parseInt(row.metricValues[0].value)
      }))
    };

    // Output as JSON for the AI to parse
    console.log(JSON.stringify(reportData, null, 2));

  } catch (err) {
    console.error("Failed to execute GA4 report:");
    console.error(err.message);
    process.exit(1);
  }
}

runReport();
