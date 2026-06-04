# Google Analytics 4 (GA4) API Setup Guide

Follow these steps to enable the AI to read your website metrics automatically.

## 1. Create a Google Cloud Project & Service Account
1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project (or select an existing one).
3. Search for **"Google Analytics Data API"** and click **Enable**.
4. Go to **APIs & Services > Credentials**.
5. Click **Create Credentials > Service Account**.
6. Give it a name (e.g., `ga4-reporting`) and click **Create and Continue**.
7. Skip the optional roles and click **Done**.

## 2. Generate the JSON Key
1. In the Service Accounts list, click on the email of the account you just created.
2. Go to the **Keys** tab.
3. Click **Add Key > Create new key**.
4. Select **JSON** and click **Create**. This will download a file to your computer.

## 3. Link Service Account to Google Analytics
1. Open your [Google Analytics](https://analytics.google.com/) account.
2. Go to **Admin > Property Settings > Property Account Management**.
3. Click the **+** (plus) icon and select **Add users**.
4. Paste the **email address** of the Service Account you created in Step 1.
5. Set the role to **Viewer** and click **Add**.

## 4. Get your Property ID
1. In Google Analytics Admin, go to **Property Settings > Property details**.
2. Look for the **Property ID** (a number like `123456789`) in the top right corner.

## 5. Configure `.env.local`
Open your project's `.env.local` file and add the following lines, filling them in using the JSON key file you downloaded:

```env
# The Property ID from GA4 Admin
GA4_PROPERTY_ID=your_property_id_here

# The "client_email" from your downloaded JSON key
GA_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com

# The "private_key" from your downloaded JSON key
# Note: Keep the quotes and include the entire key (including \n marks)
GA_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC..."
```

## 6. Finish Setup
Once the `.env.local` is saved, run:
```bash
npm install
```

To test if it works, you can run:
```bash
npm run metrics
```

If you see JSON data with your traffic numbers, the setup is successful!
