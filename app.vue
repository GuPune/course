<template>
    <div>
      <NuxtLayout/>


    </div>
  </template>

  
  <script lang="ts" setup>

import { useRoute } from 'vue-router'
  import { storeToRefs } from 'pinia'

  import { usePostStore } from '@/stores/post'


  const { posts, loading, error } = storeToRefs(usePostStore())
  const { fetchPosts } = usePostStore()

 // fetchPosts();

 useHead({
  title: 'My App',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
})


</script>
  