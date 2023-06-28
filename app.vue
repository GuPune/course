<template>
    <div>
      <NuxtLayout/>
      <p v-if="loading">Loading posts...</p>
    <p v-if="error">{{ error.message }}</p>
      <p v-if="posts" v-for="post in posts" :key="post.id">
    {{ post.title }}
      <p>{{ post.body }}</p>
    </p>

    </div>
  </template>
  <style lang="scss">
  // @import '@/assets/scss/style.scss';
  
  /* Your component-specific styles */
  </style>
  

  
  <script lang="ts" setup>


import { useRoute } from 'vue-router'
  import { storeToRefs } from 'pinia'

  import { usePostStore } from '@/stores/post'


  const { posts, loading, error } = storeToRefs(usePostStore())
  const { fetchPosts } = usePostStore()

  fetchPosts();




</script>
  