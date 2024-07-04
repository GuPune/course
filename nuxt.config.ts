// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  
  devtools: { enabled: false },
  
  
  css: ['~/assets/css/main.css','~/assets/css/responsive.css','~/assets/css/bootstrap.min.css','~/assets/css/animate.min.css'
    ,'~/assets/css/icofont.min.css'
  ,'~/assets/css/magnific-popup.css'
  ,'~/assets/css/meanmenu.css'
  ,'~/assets/css/owl.carousel.min.css'
  ,'~/assets/css/slick.css',
  '@/assets/scss/style.scss',
  '~/assets/css/global.css',
 ],
 modules: [
  '@pinia/nuxt','nuxt-icon',
],



runtimeConfig: {
  // Config within public will be also exposed to the client
  public: {
    BASE_API_URL: "https://dummyjson.com",

  }
},
imports: {
  dirs: ['./stores'],
},

  plugins: [
    { src: '~/plugins/sweetalert', mode: 'client' }
  ],


vite: {
  define: { 'process.env.DEBUG': false },
  build: {
    sourcemap: true,
  },
},

})
