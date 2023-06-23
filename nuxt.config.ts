// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  
  css: ["~/assets/scss/style.scss",'~/assets/css/main.css','~/assets/css/responsive.css','~/assets/css/bootstrap.min.css','~/assets/css/animate.min.css'
    ,'~/assets/css/icofont.min.css'
  ,'~/assets/css/magnific-popup.css'
  ,'~/assets/css/meanmenu.css'
  ,'~/assets/css/owl.carousel.min.css'
  ,'~/assets/css/slick.css'
 ],
  plugins: [
    // { src: '~/plugins/main.js' ,mode: 'client'},
    // { src: '~/plugins/plugins.js',mode: 'client' },
    // { src: '~/plugins/wow.min.js',mode: 'client' },
    // { src: '~/plugins/popper.min.js',mode: 'client' },
    // { src: '~/plugins/waypoints.min.js' ,mode: 'client'},
    // { src: '~/plugins/slick.min.js' ,mode: 'client'},
    // { src: '~/plugins/bootstrap.min.js' ,mode: 'client'},
    // { src: '~/plugins/jquery.magnific-popup.min.js' ,mode: 'client'},
    // { src: '~/plugins/jquery.scrollUp.min.js',mode: 'client' },
    // { src: '~/plugins/jquery.counterup.min.js' ,mode: 'client'},
    // { src: '~/plugins/ajax-form.js',mode: 'client' },
    // { src: '~/plugins/jquery.meanmenu.min.js' ,mode: 'client'},
    // { src: '~/plugins/slick.min.js' ,mode: 'client'},
    // { src: '~/plugins/isotope.pkgd.min.js' ,mode: 'client'},
    // { src: '~/plugins/vendor/jquery-3.6.0.min.js' ,mode: 'client'},
    // { src: '~/plugins/vendor/modernizr-3.5.0.min.js' ,mode: 'client'},
    // { src: '~/plugins/imagesloaded.pkgd.min.js' ,mode: 'client'},
    // { src: "~/plugins/jquery", mode: "client" },

    // { src: '~/plugins/client-only.js', mode: 'client' }, // only on client side
    // { src: '~/plugins/server-only.js', mode: 'server' } // only on server side
  ],












//   css: ["~/assets/scss/style.scss",'~/assets/css/main.css','~/assets/css/responsive.css','~/assets/css/bootstrap.min.css','~/assets/css/animate.min.css'
//   ,'~/assets/css/aos.min.css'
//   ,'~/assets/css/icofont.min.css'
//   ,'~/assets/css/magnific-popup.css'
//   ,'~/assets/css/meanmenu.css'
//   ,'~/assets/css/owl.carousel.min.css'
//   ,'~/assets/css/slick.css'
// ],



// app: {
//   head: {
//     link: [
//       { rel: 'stylesheet', href: 'bootstrap/dist/css/bootstrap.min.css' },
//     ],
//   //   script: [{ src: '~/assets/js/main.js',body: true  },
//   //   { src: '~/assets/js/vendor/modernizr-3.5.0.min.js' ,body: true },
//   //   { src: '~/assets/js/vendor/jquery-3.6.0.min.js',body: true  },
//   //   { src: '~/assets/js/popper.min.js' ,body: true },
//   //   { src: '~/assets/js/bootstrap.min.js',body: true  },
//   //   { src: '~/assets/js/isotope.pkgd.min.js' ,body: true },
//   //   { src: '~/assets/js/slick.min.js' },
//   //   { src: '~/assets/js/jquery.meanmenu.min.js',body: true  },
//   //   { src: '~/assets/js/ajax-form.js',body: true  },
//   //   { src: '~/assets/js/wow.min.js' ,body: true },
//   //   { src: '~/assets/js/jquery.scrollUp.min.js',body: true  },
//   //   { src: '~/assets/js/imagesloaded.pkgd.min.js',body: true  },
//   //   { src: '~/assets/js/jquery.magnific-popup.min.js',body: true  },
//   //   { src: '~/assets/js/waypoints.min.js' ,body: true },
//   //   { src: '~/assets/js/jquery.counterup.min.js',body: true  },
//   //   { src: '~/assets/js/plugins.js',body: true  }
//   // ],
//   }
// },


vite: {
  define: { 'process.env.DEBUG': false },
},

})
