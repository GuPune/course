
<script lang="ts" setup>
import Banner from '@/components/layout/Banner.vue';
import Populer from '@/components/layout/Populer.vue';
import Course from '@/components/layout/Course.vue';
import Contact from '@/components/layout/Contact.vue';
import Teacher from '@/components/layout/Teacher.vue';
import Testimonial from '@/components/layout/Testimonial.vue';
import Blog from '@/components/layout/Blog.vue';
import News from '@/components/layout/News.vue';

definePageMeta({
    middleware: ['guest'] // this should match the name of the file inside the middleware directory 
})


</script>
<template>
  <div>
    <Banner></Banner>
          <Populer></Populer>
  <Course></Course>
  <Contact></Contact>
  <Teacher></Teacher>
      <Testimonial></Testimonial>
         <Blog></Blog>
         <News></News>

         

  </div>
</template>
<style scoped></style>