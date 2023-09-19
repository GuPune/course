
<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";

import { useAuthStore } from '@/stores/auth'; // import the auth store we just created
import { useRoute } from 'vue-router'
const router = useRouter();



const store = useAuthStore()
let user = await store.authenticateUserMoible()

// if(user === true){
//   router.push("/");
// }

</script>

<template>
  <div>
    <h1>User-Agent Checker</h1>
    <p>User-Agent: {{ navigator }}</p>
   
  </div>
</template>
<style scoped></style>