const isProd = process.env.VERCEL_ENV === 'production';

const expectedVariables = [
  // QC
  'PRICES_ENDPONT',
  'ENROLLMENT_ENDPOINT',
  // Google
  'GOOGLE_ANALYTICS_ID',
  'GOOGLE_ADS_ID',
  // Meta
  'NEXT_PUBLIC_FACEBOOK_ID',
  'FACEBOOK_ACCESS_TOKEN',
  // Tiktok
  // 'TIKTOK_ID',
  // Microsoft Ads
  'BING_ID',
  // Brevo
  'BREVO_CLIENT_KEY',
  'BREVO_CONVERSATIONS_ID',
  'BREVO_GROUP_ID',
  // cookies
  'JWT_SECRET_BASE64',
  // network
  'FIREWALL_BYPASS_SECRET',
  'PROXY_SECRET',

  // client variables needed for pages router
  'NEXT_PUBLIC_PRICES_ENDPONT',
  'NEXT_PUBLIC_ENROLLMENT_ENDPOINT',
  'NEXT_PUBLIC_GOOGLE_ANALYTICS_ID',
  'NEXT_PUBLIC_GOOGLE_ADS_ID',
  // 'NEXT_PUBLIC_TIKTOK_ID',
  'NEXT_PUBLIC_BING_ID',
  'NEXT_PUBLIC_BREVO_CLIENT_KEY',
  'NEXT_PUBLIC_BREVO_CONVERSATIONS_ID',
  'NEXT_PUBLIC_BREVO_GROUP_ID',
] as const;

// eslint-disable-next-line @typescript-eslint/require-await
export const register = async () => {
  for (const variable of expectedVariables) {
    const message = `Environment variable ${variable} not found`;
    if (!process.env[variable]) {
      if (isProd) {
        throw Error(message);
      } else {
        console.warn(message);
      }
    }
  }
};
