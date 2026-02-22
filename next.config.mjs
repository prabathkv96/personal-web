/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // GitHub Pages serves project sites at username.github.io/repo-name/
  basePath: process.env.GITHUB_ACTIONS === 'true' ? '/personal-web' : '',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
