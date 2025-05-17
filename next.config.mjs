/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/wassup/:match*",
        destination: "https://portfolio.rohitm.dev/_vercel/insights/:match*",
      },
    ];
  },
  experimental: {
    reactCompiler: true,
  },
};

export default nextConfig;
