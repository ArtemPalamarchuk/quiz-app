import path from 'path'

const resolvePath = (p: any) => path.resolve(__dirname, p)

module.exports = {
  // ...
  webpack: {
    alias: {
      '@components': resolvePath('./src/components'),
      '@assets': resolvePath('./src/assets'),
      '@store': resolvePath('./src/store'),
    }
  },
  // ...
}