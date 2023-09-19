import { defineStore } from 'pinia'
import ApiService from '../services/api.service';


export const ResultStore = defineStore({
  id: 'result',
  state: () => ({
    user_id: null,
    formresult:{
      mr_id:null,
      mr_score:null,
      mr_learn_type:null,
      mr_status:null,
      dlt_code:null,
      crt_date:null
    },
    result:[
      {
          "mr_id": 2,
          "mr_score": 49,
          "mr_learn_type": 2,
          "mr_status": "pass",
          "dlt_code": "A2",
          "crt_date": "2023-09-13T06:40:11.000Z",
          "udp_date": "2023-09-13T06:40:11.000Z",
          "user_id": 104
      },
      {
          "mr_id": 1,
          "mr_score": 70,
          "mr_learn_type": 2,
          "mr_status": "fail",
          "dlt_code": "A1",
          "crt_date": "2023-09-13T06:40:11.000Z",
          "udp_date": "2023-09-13T06:40:11.000Z",
          "user_id": 104
      }
  ]
  }),
  getters: {


  },

  actions: {
    async fetchDlt() {
      try {
        const data = await ApiService.get('/master_data/drivinglicense_type').then(response => {
          this.dlt = response.data
        });
        return data
      } catch (error) {
        return false;
      }
    },
    async fetchResult() {

    //  let a = this.dlt.find(item => item.dlt_code === 'A1')
   //   console.log('a',a);

   const aa = [];
    for (var x = 0; x < this.result.length; x++) {
      let dl = this.dlt.find(item => item.dlt_code === this.result[x].dlt_code)
      const a = { mr_id: this.result[x].mr_id,mr_score: this.result[x].mr_score,mr_learn_type: this.result[x].mr_learn_type,mr_status: this.result[x].mr_status,crt_date:this.result[x].crt_date,dlt_description:dl.dlt_description}
      aa.push(a)
    }

      this.resultall = aa;
 
    }
  },



})


