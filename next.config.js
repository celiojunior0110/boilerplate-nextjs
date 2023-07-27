const isProd = process.env.NODE_ENV === 'production'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isProd
})

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true
    }
  }
})

module.exports = nextConfig
