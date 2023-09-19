import vue3videoPlay from "vue3-video-play"; // 引入组件
import "vue3-video-play/dist/style.css"; // 引入css



export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(vue3videoPlay)
  })