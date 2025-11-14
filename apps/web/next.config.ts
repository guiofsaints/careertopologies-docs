import type { NextConfig } from 'next';
import { withContentlayer } from 'next-contentlayer';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Contentlayer integration
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Turbopack configuration to silence warning
  turbopack: {},
};

export default withContentlayer(nextConfig);
