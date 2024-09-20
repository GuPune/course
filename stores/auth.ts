import { defineStore } from 'pinia';
import axios from 'axios';
import { useEnvStore } from '@/stores/env'
import ApiService from '../services/api.service';
import Cookies from 'js-cookie';
import { useRouter } from 'vue-router';
import moment from "moment";

interface UserPayloadInterface {
  username: string;
  password: string;
}

export const useAuthStore = defineStore('auth', {
 
  state: () => ({
    authenticated: false,
    selectProfile:'profile',
    verify: false,
    loading: false,
    otp_confirm:false,
    Isotpconfirm:false,
    alert :false,
    user_id :null,
    isDisabled:false,
    imagelist:null,
    imagelist_font:null,
    imagelist_back:null,
    otpisactivechange: true,
    changeformemail: false,
    chaeckemailtaken: false,
    changeemailvalid: false,
    mydltcardExp:[],
    comment:[],
    mod_otp_change:false,
    mod_otp_change_email:false,
    mod_change_tel:false,
    mod_change_email:false,
    formuser:{
      user_email:null,
      user_firstname:null,
      user_id:null,
      user_lastname:null,
      user_name:null,
      user_phone:null,
      user_type:null,
      user_type_name:null,
      user_password:null,
      user_prefrix:null,
      user_full_name:null
    },
    formlog:{
      user_id:null
    },
    profile_by_one:[],
    mydtla: [],
    dltcard:[],
    mydltcard:[],
    formdetail:{
      verify_account:null,
      identification_number:null,
      user_img:null,
      user_birthday:null,
      user_address:null,
      location:null,
      country:null,
      user_village:"",
      passpost_image:"",
      real_image:"",
      status:"",
    },
    login_last:[],
    update_last:[],
    otp: ["", "", "", "", "", ""], // Array to store OTP digits
    user_image:"",
    formdtl: {
      front_img: "",
      back_img: "",
      dlt_code: '',
      issue_date: '',
      expiry_date: '',
    },
    formcard:{
      idcard_back:'',
      idcard_front:'',
      user_id:null,
    },
    formszipcode: {
      page: 1,
      per_page: 200,
      search: '',
    },
    formscout: {
      page: 1,
      per_page: 200,
      search: '',
    },
    formsearchUser:{
      user_id:null,
      user_search_id:null
    },
    formProfileImage:{
      user_id:null,
      user_image:null
    },
    type:[
      {
        user_type: 1,
        user_type_name:"ຜູ້​ບໍ​ລິ​ຫານ",
      },
      {
        user_type: 2,
        user_type_name:"ເຈົ້າໜ້າທີ່",
      },
      {
        user_type: 3,
        user_type_name:"ປະຊາກອນ",
      },
 
    ],
    zipcode: null,
    country: null,
    error:{
      status:false,
      message:"ເຂົ້າສູ່ລະບົບບໍ່ສຳເລັດ",
      message_en:"Login unsuccessful"
    },
    changepassword:{
      curent_password:null,
      new_password:null,
      confirm_new_password:null,
    },
    formachangtel: {
      changeiden:'',
      otp_code:'',
    },
    email:'',
    formaddprove: {
      full_name: '',
      first_name: '',
      last_name: '',
      user_prefrix: '',
      identification_number: '',
      user_birthday: '',
      expire: '',
      user_village: '',
      user_address: '',
      location_id: null,
      country_id: 33,
    },
    passpost_image:'',
    image_pas:'',
    real_image:'',
    image_real:''
  }),
  getters: {
    load(state) {
      return state.loading;
    },
    alertlogin: (state) => {
      return state.error;
    },
    getForm(state) {
      return state.formuser;
    },
    getFormDetails(state) {
      return state.formdetail;
    },
    getFormProve(state) {
      return state.formaddprove;
    },
    
    getFormChangepassword(state) {
      return state.changepassword;
    },
    getFormChangeTel(state) {
      return state.formachangtel;
    },


    
  },
  
  actions: {
    
    async authenticateUser({ username, password }: UserPayloadInterface) {
      

      try {
        const { data } = await useFetch('/user/login', {
          method: 'post',
          baseURL:useEnvStore().apidev,
          headers: new Headers({
            'Authorization': 'ZeBuphebrltl3uthIFraspubroST80Atr9tHuw5bODowi26p', 
            'Content-Type': 'application/json'
        }), 
          body: {
            "user_name": username,
            "user_password": password
        },
        });

        if (data.value) {

          const expirationHours = 2;
        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + expirationHours * 60 * 60 * 1000);
        Cookies.set('loggedIn', 'true', { expires: expirationDate });
         
          const token = useCookie('token'); // useCookie new hook in nuxt 3
          const user_id = useCookie('user_id'); // useCookie new hook in nuxt 3
          token.value = "ZeBuphebrltl3uthIFraspubroST80Atr9tHuw5bODowi26p"; // set token to cookie
          user_id.value = data.value.user_id; // set token to cookie
          this.authenticated = true; // set authenticated  state value to true
          this.status_login = true;
          this.user_id = data.value.user_id;


     await this.getProfile() ;
          await this.displaycard();
          await this.getDltAlert();
         return true;
        }else{
          this.status_login = false;
          this.alert = true; 
          return false;
        }

      } catch (error) {
       this.status_login = false;
       return false;
      } finally {
     
      }
    },
    async authenticateUserMoiblex() {
 const token = useCookie('token'); // useCookie new hook in nuxt 3
 const user_id = useCookie('user_id'); // useCookie new hook in nuxt 3
 token.value = "ZeBuphebrltl3uthIFraspubroST80Atr9tHuw5bODowi26p"; // set token to cookie
 user_id.value = this.user_id; // set token to cookie
 let user =  await this.getProfile()
   if(user == true){
    this.authenticated = true; // set authenticated  state value to true
    this.status_login = true;

    const expirationHours = 2;
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + expirationHours * 60 * 60 * 1000);
    Cookies.set('loggedIn', 'true', { expires: expirationDate });

          await this.getProfile() ;
          await this.displaycard();
          await this.getDltAlert();
    return true;
   }else {
    return false;
   }
    },

    async authenticateUserMoible() {
      // useFetch from nuxt 3
  const login = {user_name: "rkknoob1",user_password: "123456"}
      try {
        const data = await ApiService.post('/user/login', login).then(response => {
     if (response.data) {
      const token = useCookie('token'); // useCookie new hook in nuxt 3
      const user_id = useCookie('user_id'); // useCookie new hook in nuxt 3
      token.value = "ZeBuphebrltl3uthIFraspubroST80Atr9tHuw5bODowi26p"; // set token to cookie
      user_id.value = response.data.user_id; // set token to cookie
      this.authenticated = true; // set authenticated  state value to true
      this.status_login = true;
      this.user_id = response.data.user_id;
     }
  
          return true;
        });
        await this.getProfile();
        await this.displaycard();
        return data
      } catch (error) {
    
       return false;
      } finally {
     
      }
    },

    logUserOut() {
      const token = useCookie('token'); 
      const user_id = useCookie('user_id'); 
      const loggedIn = useCookie('loggedIn'); // get token from cookies
      this.authenticated = false; 
      this.verify = false; 
      token.value = null; // clear the token cookie
      user_id.value = null;
      loggedIn.value = null;
      this.loading = false;

      this.formuser.user_email = null
      this.formuser.user_firstname = null
      this.formuser.user_id = null
      this.formuser.user_lastname = null
      this.formuser.user_name = null
      this.formuser.user_phone = null
      this.formuser.user_type = null
      this.formuser.user_type_name = null
      this.formdetail.verify_account = null
    },

    async getProfile() {
  
      this.formcard.idcard_back = ''
      this.formcard.idcard_front = ''


   
try {
  const profile = await ApiService.get('/user/get/'+this.user_id).then(response => {
    if(response.data == ''){
      return false;
    }else {
  
      const type = this.type.find(el => el.user_type === response.data.user_type);
      this.formuser.user_email = response.data.user_email
      this.formuser.user_firstname = response.data.user_firstname
      this.formuser.user_lastname = response.data.user_lastname
      this.formuser.user_name = response.data.user_name
      this.formuser.user_phone = response.data.user_phone
      this.formuser.user_type = response.data.user_type
      this.formuser.user_id = response.data.user_id
      this.formuser.user_type_name = type?.user_type_name
      this.formuser.user_prefrix = response.data.user_prefrix
      this.formuser.user_full_name = response.data.user_full_name

      const isEmptyObj = !Object.keys(response.data.detail).length;
if(isEmptyObj == false){
  this.formdetail.verify_account = response.data.detail.verify_account
  this.formdetail.identification_number = response.data.detail.identification_number
  this.formdetail.user_img = response.data.detail.user_img
  this.formdetail.user_birthday = response.data.detail.user_birthday
  this.formdetail.user_address = response.data.detail.user_address
  this.formdetail.location = response.data.detail.location
  this.formdetail.country = response.data.detail.country
  this.formdetail.location_id = response.data.detail.location_id
  this.formdetail.country_id = response.data.detail.country_id
  this.formdetail.user_village = response.data.detail.user_village
this.formdetail.country.country_id = response.data.detail?.country_id
this.formdetail.location.id = response.data.detail?.location_id
this.formdetail.exp_date = response.data.detail?.exp_date
this.formdetail.status = response.data.detail?.status


this.formdetail.passpost_image = response.data.detail?.passpost_image
this.formdetail.real_image = response.data.detail?.real_image

}

// if(response.data.card != null){
// this.formcard.idcard_back = response.data.card.idcard_back
// this.formcard.idcard_front = response.data.card.idcard_front
// this.formcard.user_id = response.data.user_id
// }

   // this.displaycard();

    
      return true;
    }
  });


  return profile
} catch (error) {


//  router.push('/maintenance');
 return false;
 
}
    },

    async fetchUsersByOne() {
   
      this.profile_by_one = [];
      this.formsearchUser.user_id = this.user_id;
      const data = await ApiService.post('/user/list/get/profile', this.formsearchUser).then(response => {
   this.profile_by_one = response.data;
   this.user_image = response.data[0].user_img;
 

    });
  },  

  async fetchUsersByOneComment() {
    this.formsearchUser.user_search_id = this.user_id;
    const data = await ApiService.post('/user/list/get/comment', this.formsearchUser).then(response => {
 this.comment = response.data.data;
  });
}, 


    async SelectProfile(item) {
      this.selectProfile = item
    } ,  
    async displaycard() {
      const mydlt = [];
      try {
        const data = await ApiService.get('/dlt_card/list/?user_id=' + this.user_id).then(response => {
          this.dltcard = response.data;
          if (response.data.length > 0) {
            let a = this.dltcard[0];
            this.formdtl.front_img = a.front_img
            this.formdtl.back_img = a.back_img
            this.formdtl.dlt_code = a.dlt_code
            this.formdtl.issue_date = a.issue_date
            this.formdtl.expiry_date = a.expiry_date
            const sto = AppointmentsStore();
            for (let i = 0; i < response.data.length; i++) {
              let a = sto.dlt.find(x => x.dlt_code === response.data[i].dlt_code)
              mydlt.push(a);
            }
            this.mydtla = mydlt;
          }
        });

        this.getDltAlert()
        return data
      } catch (error) {
        return false;
      }
    },
    async getDltAlert() {
      const alert = [];
if(this.dltcard){
  for (let x = 0; x < this.dltcard.length; x++) {
 const seconds = new Date().getTime() / 1000;
 const differ = (new Date(this.dltcard[x].expiry_date).getTime() / 1000) -  Math.floor(seconds) ;
 if(differ > 2592000){
 }else {
  alert.push(this.dltcard[x]);
 }
  }
  this.mydltcardExp = alert;

}
    
     
     
    },

    async SelectgetDLT(item) {
      let a = this.dltcard[item];
      this.formdtl.front_img = a.front_img
      this.formdtl.back_img = a.back_img
      this.formdtl.dlt_code = a.dlt_code
    },

    async UpdateProfile() {
    const update = {user_prefrix:this.formuser.user_prefrix,user_name:this.formuser.user_name,user_password:"",user_firstname:this.formuser.user_firstname,
      user_lastname:this.formuser.user_lastname,user_email:this.formuser.user_email,user_phone:this.formuser.user_phone,user_type:3,active:1}

      try {
        const data = await ApiService.put('/user/update/' + this.formuser.user_id, update).then(response => {
          if(response.status === 200){
            return true;
          }else{
            return false;
          }
        });
        return data
      } catch (error) {
        return false;
      }
    },

    async UpdateDetails() {
      let upload = await this.UploadfileDetails()
      const update = {verify_account:this.formdetail.verify_account,identification_number:this.formdetail.identification_number,
        user_img:this.formdetail.user_img,
        user_birthday:this.formdetail.user_birthday,user_address:this.formdetail.user_address,
        location_id:this.formdetail.location.id,country_id:this.formdetail.country.country_id,user_id:this.formuser.user_id,user_village:this.formdetail.user_village};
 
        try {
          const data = await ApiService.post('/user/detail/create', update).then(response => {
            if(response.status === 200){
              return true;
            }else{
              return false;
            }
          });
          return data
        } catch (error) {
          return false;
        }
      },

      async UploadfileDetails() {
        let formData = new FormData();
        formData.append('files', this.imagelist);
        if (this.imagelist) {
          try {
            const data = await ApiService.upload('/media_file/upload/file', formData);
            this.formdetail.user_img = data.data[0].path
            return true;
          } catch (error) {
            return false;
          }
        }
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
        const country = await ApiService.post('/master_data/contry', this.formscout)
        if (country.data.data) {
          this.country = country.data.data
        } else {
          this.country = []
        }
      },

      async savecard() {

        await this.UploadfileCardBack();
        await this.UploadfileCardFront();
        const card = {user_id:this.user_id,idcard_front:this.formcard.idcard_front,idcard_back:this.formcard.idcard_back}
        this.formcard.user_id = this.user_id;
    
        try {
          const data = await ApiService.post('/user/idcard/create', this.formcard).then(response => {
          
         
          });
          return data
        } catch (error) {
          return false;
        }
      },

  
      async UploadfileCardFront() {
        let formData = new FormData();
        if (this.imagelist_font) {
          formData.append('files', this.imagelist_font);
          try {
           const data = await ApiService.upload('/media_file/upload/file', formData);
           this.formcard.idcard_front = data.data[0].path
            return true;
          } catch (error) {
            return false;
          }
        }
       
      },
      async UploadfileCardBack() {
        let formData = new FormData();
        if (this.imagelist_back) {
          formData.append('files', this.imagelist_back);
          try {
           const data = await ApiService.upload('/media_file/upload/file', formData);
           this.formcard.idcard_back = data.data[0].path
            return true;
          } catch (error) {
            return false;
          }
        }
       
      },
      async ResetFormPassword() {
        this.changepassword.curent_password = null;
        this.changepassword.new_password = null;
        this.changepassword.confirm_new_password = null;

      },

      async Changepassword() {
        const id = localStorage.getItem('user_reset')
       try {
        const data = await ApiService.put('/user/change_password/' + id,this.changepassword).then(response => {
       return true
        });

      
        return data
      } catch (error) {
        return false;
      }
       
      },


      async ChangepasswordNew() {
      
       try {
        const data = await ApiService.put('/user/change_password/' + this.user_id,this.changepassword).then(response => {
       return true
        });

        return data
      } catch (error) {
        return false;
      }
       
      },

      async getOtp() {
        const data = await ApiService.get('/user/otp/' + this.user_id).then(response => {
  
        });
        return true;
      },

      async testapi() {

        for (let i = 0; i < 1000; i++) {
          const data = await ApiService.get('/user/get/202').then(response => {
           
                });
            
      
        }
     
      },

      async UpdateProfileafterOtp() {

const update = {verify_account:"phone_active",identification_number:this.formdetail.identification_number,
  user_img:this.formdetail.user_img,
  user_birthday:this.formdetail.user_birthday,user_address:this.formdetail.user_address,
  location_id:this.formdetail.location.id,country_id:this.formdetail.country.country_id,user_id:this.formuser.user_id,user_village:this.formdetail.user_village};
  

  try {
    const data = await ApiService.post('/user/detail/create', update).then(response => {
      if(response.status === 200){
        return true;
      }else{
        return false;
      }
    });
    return data
  } catch (error) {
    return false;
  }
      },
      async ManageProfile() {
       this.formaddprove.first_name = this.formuser.user_firstname
       this.formaddprove.last_name = this.formuser.user_lastname
       this.formaddprove.user_prefrix = this.formuser.user_prefrix
       this.formaddprove.user_birthday = this.formdetail.user_birthday
       this.formaddprove.identification_number = this.formdetail.identification_number
       this.formaddprove.user_address = this.formdetail.user_address
       this.formaddprove.user_village = this.formdetail.user_village
       this.formaddprove.location_id = this.formdetail.location_id
       this.formaddprove.full_name = this.formuser.user_full_name
       this.formaddprove.expire = this.formdetail.exp_date
       this.formaddprove.status = this.formdetail.status

       this.image_pas = this.formdetail.passpost_image
       this.image_real = this.formdetail.real_image

    
      
       this.formdetail.passpost_image = this.formdetail.passpost_image
this.formdetail.real_image = this.formdetail.real_image



       
      //  this.formdetail.user_birthday = response.data.detail.user_birthday
      //  this.formdetail.user_address = response.data.detail.user_address
      //  this.formdetail.location = response.data.detail.location
      //  this.formdetail.country = response.data.detail.country
      //  this.formdetail.location_id = response.data.detail.location_id
      //  this.formdetail.country_id = response.data.detail.country_id
      //  this.formdetail.user_village = response.data.detail.user_village
       
      },

      async UpdateAddVeriry() {
        this.formaddprove.user_id = this.user_id
        this.formaddprove.passpost_image = this.image_pas
        this.formaddprove.real_image = this.image_real



      try {
        const data = await ApiService.post('/user/update/before', this.formaddprove).then(response => {
       
       if(response.status == 200){
        return true;
       }
       if(response.status == 204){
        return false;
       }

     
        });
      return data;
      } catch (error) {
        return false;
      }
       
      },
      async UpdateCheckAddVeriry() {


        const currentDate = new Date(this.formaddprove.expire);
      
        const date_start = await this.changeFormate(currentDate)

        this.formaddprove.expire = date_start
        
        try {
          const data = await ApiService.post('/user/detail/verify', this.formaddprove).then(response => {
         
         if(response.status == 200){
          return true;
         }
         if(response.status == 204){
          return false;
         }
  
       
          });
        return data;
        } catch (error) {
          return false;
        }
      },
      async changeFormate(a) {

        if (a) {
        
          return moment(a).format("YYYY-MM-DD");
         }
      },

      

      async UploadImage() {

     if (this.passpost_image) {
      let formData = new FormData();
      formData.append('files', this.passpost_image);
      try {
        const data = await ApiService.upload('/media_file/upload/file', formData);
        this.image_pas = data.data[0].path
   
        return true;
      } catch (error) {
        return false;
      }
    }

   
      },


      
      async UploadImage2() {

   
       if (this.real_image) {
      
         let formDatas = new FormData();
         formDatas.append('files', this.real_image);
         try {
           const data = await ApiService.upload('/media_file/upload/file', formDatas);
           this.image_real = data.data[0].path
         
           return true;
         } catch (error) {
           return false;
         }
       }
      
         },


         async UploadProfile() {
          if (this.user_image) {
            let formDatas = new FormData();
            formDatas.append('files', this.user_image);
            try {
              const data = await ApiService.upload('/media_file/upload/file', formDatas);
              this.formProfileImage.user_image = data.data[0].path
              this.profile_by_one[0].user_img = data.data[0].path
          
              return true;
            } catch (error) {
              return false;
            }
          }
         
            },

            async UpdateProfileImage() {
      
              this.formProfileImage.user_id = this.user_id;
              try {
                const data = await ApiService.post('/user/update/profile/image', this.formProfileImage).then(response => {
                });
              return data;
              } catch (error) {
                return false;
              }
     
            },


            async CheckTel() {
              if(this.formachangtel.changeiden == this.profile_by_one[0].user_phone){
                return false;
              }
              return true;
            },
            async CheckTelData() {
this.formachangtel.user_id = this.user_id;
              try {
                const data = await ApiService.post('/user/changetel', this.formachangtel).then(response => {
return response.data.status
                });
              return data;
              } catch (error) {
                return false;
              }
            },

            async GetOtpTel() {

              try {
                const data = await ApiService.post('/user/change/otp/'+this.formachangtel.changeiden, this.formachangtel).then(response => {
this.formachangtel.otp_code = response.data.otp_code
return true;
                });
              return data;
              } catch (error) {
                return false;
              }

            },

            async SwitchModal() {
this.mod_change_tel = false;
this.mod_otp_change = true;
            },

            async VerityOtpTel() {
              this.formachangtel.otp_code = this.otp.join('');
              try {
                const data = await ApiService.put('/user/verify_otp',this.formachangtel).then(response => {
                  if(response.status === 204){
                    //  let saveuser =  this.SaveUserVerify()
                      return false;
                    }else {
                      return true;
                    }
                });
              return data;
              } catch (error) {
                return false;
              }
            },

            async UpdateTel() {
              try {
                const data = await ApiService.post('/user/update/changetel',this.formachangtel).then(response => {
                  
        
                });
              return data;
              } catch (error) {
                return false;
              }

            },


            async UpdateLogDataInsert() {
              this.formlog.user_id = this.user_id;
              this.formlog.user_admin = this.user_id;
              this.formlog.type = 2;
              
              try {
                const data = await ApiService.post('/user/updatedata/log',this.formlog).then(response => {
                });
              return data;
              } catch (error) {
                return false;
              }

            },


            async UpdateLogData() {
              this.formlog.user_id = this.user_id;
              try {
                const data = await ApiService.post('/user/log/updatedata',this.formlog).then(response => {
                this.update_last = response.data
            
                console.log(response);
                });
              return data;
              } catch (error) {
                return false;
              }

            },
            async UpdateLogLogin() {
              this.formlog.user_id = this.user_id;
              try {
                const data = await ApiService.post('/user/log/login',this.formlog).then(response => {
                  this.login_last = response.data
        
                });
              return data;
              } catch (error) {
                return false;
              }

            },

            async CheckEmail() {
              this.formachangtel.user_id = this.user_id;
              this.formachangtel.email = this.email;
                            try {
                              const data = await ApiService.post('/user/checkemail', this.formachangtel).then(response => {
                                console.log(this.formachangtel);
              return response.data.status
                              });
                            return data;
                            } catch (error) {
                              return false;
                            }
                          },

  },
});

// {"__v_isShallow":false,"__v_isRef":true,"_rawValue":null,"_value":null}