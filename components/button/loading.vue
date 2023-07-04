
  

<template>
 <div class="loading-page">
    <div class="loading"></div>
  </div>
  
</template>






<script setup>

</script>

<style scoped>
.loading-page {
  position: fixed;
  right: 0;
  z-index: 1000;
  padding: 1rem;
  text-align: center;
  font-size: 3rem;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.loading {
  display: inline-block;
  width: 3.5rem;
  height: 3.5rem;
  border: 4px solid rgba(2, 5, 4, 0.705);
  border-radius: 50%;
  border-top-color: #050f0d;
  animation: spin 1s ease-in-out infinite;
}
@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>