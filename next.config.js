// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
// console.log(process.env.SEC)

var baseURLMode

if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview') {
  baseURLMode = process.env.NEXT_PUBLIC_VERCEL_URL
}
else if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production') {
  baseURLMode = 'recipe-gacha-two.vercel.app'
}

// if (process.env.NODE_ENV === 'development') {
//   const baseUrlMode = 'http://localhost:3000/api'
// }
// else if {
//   const baseUrlMode = `https://${req?.query?.hostname}`
// }

module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    secret: process.env.SEC
  },
  publicRuntimeConfig: {
    
      apiUrl: process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000/api' // development api
          : ('https://' + baseURLMode + '/api') // production api
  }
}