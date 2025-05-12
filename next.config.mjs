/** @type {import('next').NextConfig} */
//const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },

  // for deploying on github pages
  // assetPrefix: isProd ? '/my-website/' : '',
  // basePath: isProd ? '/my-website' : '',
  // and change url to "https://hana-dowe.github.io/my-website" in package.json

  // for deploying on own domain
  assetPrefix: '',
  basePath: '',

  output: 'export',
  async headers() {
    return [
      {
        source: '/:all*(gif|svg|jpg|jpeg|png|webp)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000',
          },
        ],
      },
      {
        source: '/:all*(woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000',
          },
        ],
      },
    ]
  },
}

export default nextConfig
