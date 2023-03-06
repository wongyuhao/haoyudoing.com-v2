/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['media.graphassets.com', 'haoyudoing-cv.s3.amazonaws.com']
  },
  async redirects() {
    return [
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/haoyudoing/',
        permanent: true,
      },
      {
        source: '/haocao',
        destination: 'https://open.spotify.com/playlist/4dpEKRN6zyyJxi925mWoRB?si=9054fa58272841d6',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
