
<script lang="ts" setup>
import Banner from '@/components/layout/Banner.vue';


definePageMeta({
    middleware: ['guest','cookie'] // this should match the name of the file inside the middleware directory 
})
const auth = useAuthStore();



</script>
<template>
  <div>
    <Banner></Banner>
          <!-- <Populer></Populer>
  <Course></Course>
  <Contact></Contact>
  <Teacher></Teacher>
      <Testimonial></Testimonial>
         <Blog></Blog>
         <News></News> -->
  </div>
</template>
<style scoped></style>