module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Movies',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel:'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800' }
    ]
  },
  modules: [
    '@nuxtjs/axios',
    ['bootstrap-vue/nuxt', { css: false }],
  ],

  axios: {
    // proxyHeaders: false
  },
 
  /*
  ** Customize the progress bar color
  */
 css: [
  '~/styles/main.scss'
],
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
 plugins:[
  '~/plugins/chart.js',
  {src: '~/plugins/resize.js', ssr: false},
],
  build: {
    /*
    ** Run ESLint on save
    */
   
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

