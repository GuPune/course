// import Select2 from 'nuxt3-select2';

// export default defineNuxtPlugin((nuxtApp) => {
//   nuxtApp.vueApp.component("Select2", Select2, {});
// });


import Vue from 'vue';
import vSelect from 'vue-select';



export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("v-select", vSelect);
});