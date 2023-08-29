import { defineStore } from 'pinia'
import ApiService from '../services/api.service';


export const VerifyStore = defineStore({
  id: 'verify',
  state: () => ({
    timerEnabled: true,
    formdetail:{
        verify_account:null,
        identification_number:null,
        user_img:null,
        user_birthday:null,
        user_address:null,
        location_id:null,
        country_id:null,
        user_id:null,
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

  },
    
  
})


