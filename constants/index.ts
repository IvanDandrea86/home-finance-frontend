export const isServer = typeof window === "undefined";
export const PUBLIC_URL = process.env.NEXT_PUBLIC_URL
  ? process.env.NEXT_PUBLIC_URL
  : "http://locahost:3000";
