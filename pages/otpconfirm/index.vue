


<template>
    <div id="app">
        <div class="container height-100 d-flex justify-content-center align-items-center">
            <div class="position-relative">
                <div class="card p-2 text-center">
                    {{ $t("page_verify_step2") }}
                    <h6>{{ $t("page_verify_one_time") }} <br> </h6>
                    <div> <span> sent to</span> <small>+1******4343</small> </div>
                    <span class="text-xs text-red-500" style="color:red"
        v-if="store.otpisactive == false">{{ $t("page_verify_step3") }}</span>
                    <div id="otp" class="inputs d-flex flex-row justify-content-center mt-2">

           
                         <input
                            class="m-2 text-center form-control rounded" type="text" v-model="store.otp[0]" @input="moveFocus(1)" ref="input1"
                            maxlength="1"  />
                             <input class="m-2 text-center form-control rounded" v-model="store.otp[1]" @input="moveFocus(2)" ref="input2"
                            type="text" id="input2" maxlength="1"  /> 
                            <input class="m-2 text-center form-control rounded"
                           type="text" id="input3" maxlength="1"    v-model="store.otp[2]" @input="moveFocus(3)" ref="input3"/>
                             <input class="m-2 text-center form-control rounded"  type="text" id="input4"  v-model="store.otp[3]" @input="moveFocus(4)" ref="input4" 
                        maxlength="1"  /> 
                        <input class="m-2 text-center form-control rounded"  type="text" id="input5"  v-model="store.otp[4]" @input="moveFocus(5)" ref="input5" 
                        maxlength="1"  /> 
                        <input class="m-2 text-center form-control rounded"  type="text" id="input6"  v-model="store.otp[5]"  ref="input6" 
                        maxlength="1"  /> 
                    </div>
                <div class="mt-4"> 
                    <button class="btn btn-secondary w-100" @click="confirm()">{{ $t("page_verify_save") }}</button>
                 </div>
             
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';
import { VerifyStore } from '@/stores/verify'
import { useRoute } from 'vue-router'
definePageMeta({
    layout: "blank"
});

const router = useRouter();

const input1 = ref(null);
    const input2 = ref(null);
    const input3 = ref(null);
    const input4 = ref(null);
    const input5 = ref(null);
    const input6 = ref(null);

const store = VerifyStore()
const { setOTP } = VerifyStore();
const { verifyOTP } = VerifyStore();

const confirm = async () => {
    for (let i = 0; i < store.otp.length; i++) {
        if(store.otp[i] == ''){
            store.otpisactive = false;
            break;
        }
       store.otpisactive = true;
    }
    if(store.otpisactive == true){
     let send = await verifyOTP();
     if(send == true){
        router.push('/');
     }else {
        store.otpisactive = false;
     }
    }
 

}


const moveFocus = (next) => {
      if (next === 1) {
        input2.value.focus();
      } else if (next === 2) {
        input3.value.focus();
      } else if (next === 3) {
        input4.value.focus();
      } else if (next === 4) {
        input5.value.focus();
      } else if (next === 5) {
        input6.value.focus();
      }
};


 
</script>

<style scoped>

body {
    background-color: #6F1667
}

.height-100 {
    height: 100vh
}

.card {
    width: 400px;
    border: none;
    height: 300px;
    box-shadow: 0px 5px 20px 0px #bd9aba;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center
}

.card h6 {
    color: #b009a2;
    font-size: 20px
}

.inputs input {
    width: 40px;
    height: 40px
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0
}

.form-control:focus {
    box-shadow: none;
    border: 2px solid #6F1667
}

.validate {
    border-radius: 20px;
    height: 40px;
    background-color: #6F1667;
    border: 1px solid #6F1667;
    width: 100%
}

.content a {
    color: #D64F4F;
    transition: all 0.5s
}

.content a:hover {
    color: #6F1667
}


</style>