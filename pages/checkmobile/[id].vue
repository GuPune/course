
<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";

import { useAuthStore } from '@/stores/auth'; // import the auth store we just created
import { useRoute } from 'vue-router'




const store = useAuthStore()
const route = useRoute();
const router = useRouter();

store.user_id = route.params.id
let user = await store.authenticateUserMoiblex()

console.log(user);

if(user === true){
}else {

 await store.logUserOut();
  router.push("/unauthorized");
}

</script>

<template>
  <div>
    <h1>User-Agent Checker</h1>
    <p>User-Agent: {{ navigator }}</p>
   
  </div>
</template>
<style scoped></style>