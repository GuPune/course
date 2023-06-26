<template>
    <div>
      <NuxtLayout/>
  
    </div>
  </template>
  <style lang="scss">
  // @import '@/assets/scss/style.scss';
  
  /* Your component-specific styles */
  </style>
  
  <script>
  export default {
    mounted() {
      console.log(this.$store.state.count);
    },
  };
</script>
  