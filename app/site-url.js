const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kudupray.vercel.app";

export const siteUrl = configuredSiteUrl.replace(/\/$/, "");
