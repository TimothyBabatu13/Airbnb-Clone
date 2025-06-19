import { headers } from "next/headers";

export const relativePath = async () => {
  const host = (await headers()).get('host') || 'localhost:3000';
  const isLocal = host.includes('localhost') || host.startsWith('127.');
  const protocol = isLocal ? 'http' : 'https';
  return process.env.NODE_ENV === 'development' ? 'https://airbnb-clone-bcjzqyql0-timothybabatu13s-projects.vercel.app/': `${protocol}://${host}`;
};
