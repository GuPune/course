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
const router = useRouter();

if(useError.authenticated){
  const profile = await useError.getProfile();
  if((useError.formdetail.verify_account == null) || (useError.formdetail.verify_account == 'unactive') || (useError.formdetail.verify_account == 'phone_unactive')) {
  router.push("/verifyconfirm");
}else {
  router.push("/");
}
if(profile === false){
  await useError.logUserOut()
}
}


useHead({
  title: 'DoT Smart App',
  meta: [
    { name: 'description', content: 'Appointment Tutor Course Online' }
  ],
  link: [
      { rel: 'icon', type: 'image/png', href: '/LogoPWT.png' },
      {
        rel: 'stylesheet',
        href: 'https://db.onlinewebfonts.com/c/938a9833b7244d806eca3349487c68ba?family=Phetsarath+OT',
      },
      // You can add other link tags here
    ]
})





</script>
  