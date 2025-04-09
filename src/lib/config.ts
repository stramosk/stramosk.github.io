export const config = {
  github: {
    apiKey: process.env.NEXT_PUBLIC_GITHUB_API_KEY,
  },
  analytics: {
    id: process.env.NEXT_PUBLIC_ANALYTICS_ID,
    enabled: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
  },
  features: {
    experimental: process.env.NEXT_PUBLIC_ENABLE_EXPERIMENTAL === 'true',
  },
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  },
} as const;

// Type-safe environment variable validation
export function validateConfig() {
  const requiredVars = [
    'NEXT_PUBLIC_API_BASE_URL',
    // Add other required variables here
  ];

  for (const variable of requiredVars) {
    if (!process.env[variable]) {
      throw new Error(`Missing required environment variable: ${variable}`);
    }
  }
} 