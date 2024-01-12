
<script lang="ts" setup>
import Banner from '@/components/layout/Banner.vue';


definePageMeta({
    middleware: ['guest','cookie'] // this should match the name of the file inside the middleware directory 
})
const auth = useAuthStore();


const router = useRouter();

if(auth.authenticated){
  const profile = await auth.getProfile();
  if((auth.formdetail.verify_account == null) || (auth.formdetail.verify_account == 'unactive') || (auth.formdetail.verify_account == 'phone_unactive')) {
  router.push("/verifyconfirm");
}else {
 // router.push("/");
}
if(profile === false){
  await auth.logUserOut()
}
}


</script>
<template>
  <div>
    <Banner></Banner>
          <!-- <Populer></Populer>
  <Course></Course>
  <Contact></Contact>
  <Teacher></Teacher>
      <Testimonial></Testimonial>
         <Blog></Blog>
         <News></News> -->
  </div>
</template>
<style scoped></style>