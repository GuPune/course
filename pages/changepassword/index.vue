
  

<template>
    <div>

 
      <div class="loginarea">
              <div class="container">
                  <div class="row">
                          
          
           <Changepassword></Changepassword>
  



  
                  </div>
                  <br>
  
    
              </div>
          </div>
    </div>
  </template>






<script setup>


import Changepassword from '@/components/profile/Changepassword.vue';
import Loading from '@/components/button/loading.vue';
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';
import { useAuthStore } from '@/stores/auth'; // import the auth store we just created
import { useRoute } from 'vue-router'




const router = useRouter();






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
  border: 4px solid rgba(9, 133, 81, 0.705);
  border-radius: 50%;
  border-top-color: #158876;
  animation: spin 1s ease-in-out infinite;
}
@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>
