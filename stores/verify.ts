import { defineStore } from 'pinia'
import ApiService from '../services/api.service';


export const VerifyStore = defineStore({
  id: 'verify',
  state: () => ({
    timerEnabled: true,
    imageReq:false,
    otpisactive:true,
    token:'',
    otp: ['', '', '', '', '', ''],
    user_id:useCookie('user_id').value,
    formdetail:{
        verify_account:'n',
        identification_number:null,
        user_img:null,
        user_birthday:null,
        user_address:null,
        location_id:1,
        country_id:1,
        user_id:useCookie('user_id').value,
    },
    formszipcode: {
        page: 1,
        per_page: 200,
        search: '',
    },
    zipcode:null,
    country:null,
  }),
  getters: {
    getForm(state) {
        return state.formdetail;
      },

  }, 


  actions: {
    async toggleActiveClass() {

    },

    async Zipcode() {
        const zipcode = await ApiService.post('/master_data/zipcode', this.formszipcode)
        if(zipcode.data.data){
  this.zipcode = zipcode.data.data
        }else {
          this.zipcode = []
        }
        
      },
      async Country() {
        const country = await ApiService.post('/master_data/contry', this.formszipcode)
        if(country.data.data){
  this.country = country.data.data
        }else {
          this.country = []
        }
      },

      async SendOtp() {
        const data = await ApiService.get('/user/otp/'+ this.user_id).then(response => {
            console.log('response',response);
        });
  
        return true;
      },
      async verifyOTP() {
        const otpconfirm = this.otp.join('');
        this.formotp = {otp_code:otpconfirm,user_id:this.user_id};
  


          try {
            const send = ApiService.put('/user/verify_otp', this.formotp).then(response => {
                if(response.data == ''){
                    console.log('240');
                    return false;
                }else{
                    console.log('200');
                    return true;
                }
              });
            
           
            //    return response.data
          } catch (error) {
            return false;
          }
      },
      setOTP(otp) {
        this.otp = otp;
        console.log('setOTP',this.otp);
      },

  },
    
  
})


