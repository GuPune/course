<template>
    <div>
      <NuxtLayout/>


    </div>
  </template>

  
  <script lang="ts" setup>

import { useRoute } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { useAuthStore } from "@/stores/auth"; // import the auth store we just created
  import { usePostStore } from '@/stores/post'


  const { posts, loading, error } = storeToRefs(usePostStore())
  const { fetchPosts } = usePostStore()

 // fetchPosts();

 const auth = useAuthStore();
const useError = useAuthStore();

if(useError.authenticated){
  const profile = await useError.getProfile();
}


 useHead({
  title: 'PWT Driving school',
  meta: [
    { name: 'description', content: 'Appointment Tutor Course Online' }
  ],
})


</script>
  