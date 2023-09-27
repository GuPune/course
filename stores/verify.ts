import { defineStore } from 'pinia'
import ApiService from '../services/api.service';


export const VerifyStore = defineStore({
  id: 'verify',
  state: () => ({
    timerEnabled: true,
    imageReq: false,
    otpisactive: true,
    token: '',
    otp: ['', '', '', '', '', ''],
    user_id: null,
    imagelist:null,
    formdetail: {
      verify_account: 'n',
      identification_number: null,
      user_img: null,
      user_birthday: null,
      user_address: null,
      location_id: 1,
      country_id: 1,
      user_id: null,
    },
    formszipcode: {
      page: 1,
      per_page: 200,
      search: '',
    },
    zipcode: null,
    country: null,
  }),
  getters: {
    getForm(state) {
      return state.formdetail;
    },
    getUser_id(state) {
      const User = useAuthStore();
      console.log('User.user_id', User.user_id);
      this.formdetail.user_id = User.user_id
      return state.formdetail;
    },

  },


  actions: {
    async toggleActiveClass() {

    },

    async Zipcode() {
      const zipcode = await ApiService.post('/master_data/zipcode', this.formszipcode)
      if (zipcode.data.data) {
        this.zipcode = zipcode.data.data
      } else {
        this.zipcode = []
      }

    },
    async Country() {
      const country = await ApiService.post('/master_data/contry', this.formszipcode)
      if (country.data.data) {
        this.country = country.data.data
      } else {
        this.country = []
      }
    },

    async SendOtp() {
      let upload = await this.UploadfileProfile()
      const data = await ApiService.get('/user/otp/' + this.formdetail.user_id).then(response => {
        
      });

      return true;
    },
    async verifyOTP() {
      const otpconfirm = this.otp.join('');
      this.formotp = { otp_code: otpconfirm, user_id: this.formdetail.user_id };
      const send = await ApiService.put('/user/verify_otp', this.formotp).then(response => {
        if (response.data == '') {
          return false;
        } else {
          this.formdetail.verify_account = 'y';
          let saveuser =  this.SaveUserVerify()
      //    this.delay(500);
        //  console.log(saveuser);
          return saveuser;
        }
      });
   
  
     return send;
    },
    delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    setOTP(otp) {
      this.otp = otp;
      console.log('setOTP', this.otp);
    },

    async SaveUserVerify() {

       let upload = await this.UploadfileProfile()
       try {
        const updateuser = await ApiService.post('/user/detail/create', this.formdetail).then(response => {

       
        
        return true;
        })
        return updateuser
      } catch (error) {
      
       return false;
      }

   //  return updateuser;
    },


    async UploadfileProfile() {
      let formData = new FormData();
      formData.append('files', this.imagelist);
      if (this.imagelist) {

        try {
          const data = await ApiService.upload('/media_file/upload/file', formData);
          this.formdetail.user_img = data.data[0].path
          console.log();
          return true;
        } catch (error) {
          return false;
        }
      }
    },


  },


})


