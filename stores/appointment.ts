import { defineStore } from 'pinia'
import ApiService from '../services/api.service';


export const AppointmentsStore = defineStore({
  id: 'appointments',
  state: () => ({
    appgroup: [],
    reserve: [],
    event:[],
    tooltipText: 'This is a tooltip',
    isShowApp: false,
    showTooltip:false,
    isShowNoApp: false,
    popupconfirm: false,
    popupcancelapp: false,
    apdel_id:null,
    ardel_id:null,
    ap_id:null,
    user_id:null,
    appointment: {
      dlt_des: null,
      ap_learn: null,
    },
    form: {
      date_event:null,
      ap_learn_type: 1,
      dlt_code: 'A1'
    },
    formdel: {
    user_id:null,
    ap_id:null
    },
    date: null,
    ap_learnlist: [
      {
        value: 1,
        ap_learn: "ทฤษฎี"
      },
      {
        value: 2,
        ap_learn: "ปฏิบัติ"
      }
    ],
    dlt: [
      {
        dlt_code: "A",
        dlt_description:
          "ใบอนุญาตขับรถประเภท A รถจักรยานยนต์สองล้อ เครื่องยนต์ไม่เกิน 125 cc.",
      },
      {
        dlt_code: "A1",
        dlt_description:
          "ใบอนุญาตขับรถประเภท A1 รถจักรยานยนต์สองล้อ เครื่องยนต์ 125 cc. ขึ้นไป",
      },
      {
        dlt_code: "A2",
        dlt_description:
          "ใบอนุญาตขับรถประเภท A2 รถสามล้อส่วนตัว, รถสองล้อ และรถสามล้อโดยสาร",
      },
      {
        dlt_code: "A3",
        dlt_description:
          "ใบอนุญาตขับรถประเภท A3 รถแทรกเตอร์แบบมีล้อ และรถปราบดิน",
      },
      {
        dlt_code: "B",
        dlt_description:
          "ใบอนุญาตขับรถประเภท B รถยนต์ที่น้าหนักรวมน้อยกว่า 3,500 กิโลกรัม ไม่เกิน 9 ที่นั่ง รวมผู้ขับรถ",
      },
      {
        dlt_code: "C",
        dlt_description:
          "ใบอนุญาตขับรถประเภท C รถขนส่งสินค้าน้าหนักรวมตั้งแต่ 3,500 ถึง 7,500 กิโลกรัม",
      },
      {
        dlt_code: "C1",
        dlt_description:
          "ใบอนุญาตขับรถประเภท C1 รถขนส่งสินค้าน้าหนักรวมตั้งแต่ 7,500 ถึง 15,000 กิโลกรัม",
      },
      {
        dlt_code: "C2",
        dlt_description:
          "ใบอนุญาตขับรถประเภท C2 รถขนส่งสินค้า น้าหนักรวม 15,000 กิโลกรัม ขึ้นไป",
      },
      {
        dlt_code: "D",
        dlt_description:
          "ใบอนุญาตขับรถประเภท D รถขนส่งผู้โดยสาร ประเภท 4 ล้อขึ้นไป ไม่เกิน 15 ที่นั่ง",
      },
    ],

  }),
  getters: {
    FormSearch: (state) => {
      return state.form;
    },
    IsPopup: (state) => {
      return state.popupconfirm;
    },
    

  },
  actions: {

    async saverevs() {
      const savereve = {user_id:this.user_id,ap_id:this.ap_id}
      try {
        const data = await ApiService.post('/appointment/reserve/create', savereve).then(response => {
     
        });
        return true
      } catch (error) {
        console.log('error');
        return false;
      }

    },

    async fetchApppointRes() {

      try {
        const data = await ApiService.get('/appointment/reserve/get/'+this.user_id).then(response => {
        if(response.data){
          this.reserve = response.data

          return true;
          
        }else {
          return true;
        }
        });
        return data
      } catch (error) {
       
        return false;
      }

    },

    async fetchApppoint() {
      const appdata = {
        date_event: this.form.date_event,
        ap_learn_type: this.form.ap_learn_type,
        dlt_code: this.form.dlt_code
      }
         try {
        const data = await ApiService.get('/appointment/event/?ap_learn_type='+ this.form.ap_learn_type+'&dlt_code='+this.form.dlt_code+'').then(response => {
          this.event = response.data
          if(response.data.length == 0){
            this.appgroup = []
          }
        
        });
        return data

      } catch (error) {
        return false;
      }
      
      // try {
      //   const data = await ApiService.post('/appointment/list', appdata).then(response => {
      //     if (response.data.length > 0) {
      //       this.appgroup = response.data;
      //       let dltlist = this.dlt.find(x => x.dlt_code === this.form.dlt_code)
      //       let learn = this.ap_learnlist.find(x => x.value === parseInt(this.form.ap_learn_type))
      //       this.appointment.dlt_des = dltlist?.dlt_description;
      //       this.appointment.ap_learn = learn.ap_learn;

      //       return true
      //     } else {
      //       this.appgroup = [];
      //       return false
      //     }
      //   });
      //   return data

      // } catch (error) {
      //   return false;
      // }
    },
    async fetchApppointEvent() {

      const appdata = {
        date_event: this.form.date_event,
        ap_learn_type: this.form.ap_learn_type,
        dlt_code: this.form.dlt_code
      }

            try {
        const data = await ApiService.post('/appointment/list', appdata).then(response => {
        
          if (response.data.length > 0) {
            this.appgroup = response.data;
            let dltlist = this.dlt.find(x => x.dlt_code === this.form.dlt_code)
            let learn = this.ap_learnlist.find(x => x.value === parseInt(this.form.ap_learn_type))
            this.appointment.dlt_des = dltlist?.dlt_description;
            this.appointment.ap_learn = learn.ap_learn;

            return true
          } else {
            this.appgroup = [];
            return false
          }
        });
        return data

      } catch (error) {
        return false;
      }

    },
    async deleteAppointUser() {
     this.formdel.user_id = this.user_id;
     try {
      const data = await ApiService.delete('/appointment/reserve/delete/'+this.ardel_id,this.formdel).then(response => {
    return true;
      });
      return data
    } catch (error) {
      console.log('error');
      return false;
    }

  //  let deldata = ApiService.delete('/appointment/reserve/delete/'+this.ardel_id,this.formdel)

    },
    async checkpopupdel(ap,ar) {
      this.ardel_id = ar
      this.formdel.ap_id = ap
      this.popupcancelapp = true;
    },


  }
})


