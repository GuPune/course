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




</script>
  