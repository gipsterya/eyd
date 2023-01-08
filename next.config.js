const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  publicExcludes: ['!icons/*', '!logo.png', '!social-card.png'],
})

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  reactStrictMode: true,
})
