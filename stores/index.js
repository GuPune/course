// import { createStore } from "vuex";
// import user from './modules/user'

// // const store = createStore({
// //   state() {
// //     return {
// //       count: 0,
// //     };
// //   },
// //   mutations: {
// //     increment(state) {
// //       state.count++;
// //     },
// //   },
// // });

// // const createStore = () => {
// //     return new Vuex.Store({
// //       modules: {
// //         user
// //       }
// //     })
// //   }


// const store = createStore({
//     modules: {
//       a: user,
//       b: moduleB
//     }
//   })

// export default defineNuxtPlugin((nuxtApp) => {
//   nuxtApp.vueApp.use(store);
//   // Install the store instance as a plugin
// });


import { defineStore } from '@nuxtjs/composition-api'
import user from './modules/user'


export const store = defineStore({
  modules: {
    user
  }
})