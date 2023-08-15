import VueCountdown from '@chenfengyuan/vue-countdown';


export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide('VueCountdown', VueCountdown)
})