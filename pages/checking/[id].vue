
<script lang="ts" setup>

definePageMeta({
  layout: "blank"
});
import { storeToRefs } from "pinia";
import { ref, computed, watch, onMounted } from 'vue'
import { defineComponent } from "vue";

import { useAuthStore } from '@/stores/auth'; // import the auth store we just created
import { useRoute } from 'vue-router'


const store = useAuthStore()
const route = useRoute();
const router = useRouter();


onMounted( async () => {
  await checkroute()
});

async function checkroute() {

//   3. generate string + 8lwero + em_id + 8lwero + present datetime  + 8lwero + user_id + 8lwero + generate string
// example

const text = route.params.id;
const myArray = text.split("8lwero");
const genr_first = myArray[0];
const em_id = myArray[1];
const datetime = myArray[2];
const user_id = myArray[3];
const genr_last = myArray[4];
const menu_type = myArray[5];


if(!genr_first){
  router.push("/sessiontimeout");
}
if(!em_id){
  router.push("/sessiontimeout");
}
if(!datetime){
  router.push("/sessiontimeout");
}
if(!user_id){
  router.push("/sessiontimeout");
}
if(!genr_last){
  router.push("/sessiontimeout");
}
if(!menu_type){
  router.push("/sessiontimeout");
}
 
if(datetime){
  var decodedString = atob(datetime); // Decoded string  
}


var date = new Date(decodedString);
let FirstDate = new Date(new Date(decodedString).setHours(new Date().getHours() + 2));
 var first = Math.floor(FirstDate.getTime() / 1000); //1440516958

var date = new Date();
var expiryDate = Math.floor(date.getTime() / 1000); //1440516958


if(first > expiryDate){
  store.user_id = user_id
  let user = await store.authenticateUserMoiblex()
  if(user == true){
    if(menu_type == 1){
router.push("/examquestions/"+em_id);
 }
 if(menu_type == 2){
router.push("/course-detail/lesson/"+em_id);
 }
  }
 
}else {
router.push("/sessiontimeout");
}
}


</script>

<template>
  <div>
  
  </div>
</template>
<style scoped></style>