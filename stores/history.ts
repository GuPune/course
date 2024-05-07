import { defineStore } from 'pinia'
import ApiService from '../services/api.service';


export const HistoryStore = defineStore({
  id: 'history',
  state: () => ({
    listexam: [],
    formsearchcourse: {
      page: 1,
      per_page: 100,
      search: '',
    },
    history: [],
    report: [],
    data_em_name:null,
    total:null,
    user_id: null,
    dlt: [
      {
        dlt_code: "A",
        dlt_description_loas:
          "ລົດຈັກສອງລໍ້ ຄວາມແຮງບໍ່ເກີນ 125 cc",
        dlt_description_english:
          "Two-wheels motocycle engine not exceed 125cc", 
      },
      {
        dlt_code: "A1",
        dlt_description_loas:
          "ລົດຈັກສອງລໍ້ ຄວາມແຮງ ແຕ່ 125 cc ຂື້ນໄປ",
        dlt_description_english:
          "Two-wheels motorcycle engine 125 cc and above",    
      },
      {
        dlt_code: "A2",
          dlt_description_loas:
          "ລົດຈັກສາມລໍ້ສ່ວນຕົວ, ລົດສອງລໍ້ ແລະ ສາມລໍ້ໂດຍສານ",
        dlt_description_english:
          "Private three-wheels vehicle Passenger vehicle with two-wheels and three-wheels",   
      },
      {
        dlt_code: "A3",
          dlt_description_loas:
          "ລົດໄຖນາທີ່ແກ່ລໍ້ ແລະ ລົດຕ໋ອກໆ",
        dlt_description_english:
          "Two-wheels tractor with trailer and Walk-behide Tractor",   
      },
      {
        dlt_code: "B",
          dlt_description_loas:
          "ລົດເບົາ ສີ່ລໍ້ ທີ່ມີນ້ຳໜັກລວມບໍ່ເກີນ 3.500 ກິໂລກຣາມ ແລະ ບໍ່ເກີນ 9 ບ່ອນນັ່ງ ລວມທັງຜູ້ຂັບຂີ່",
        dlt_description_english:
          "Car with four-wheels total weight not exceed 3500 kilograms and not more than 9 seats including driver",   
      },
      {
        dlt_code: "C",
          dlt_description_loas:
          "ລົດຂົນສົ່ງສິນຄ້ານ້ຳໜັກລວມ ແຕ່ 3.500 ກິໂລກຣາມ ຫາ 7.500 ກິໂລກຣາມ",
        dlt_description_english:
          "Cargo truck total weight from 3500 to 7500 kilograms",
      },
      {
        dlt_code: "C1",
          dlt_description_loas:
          "ລົດຂົນສົ່ງສິນຄ້ານ້ຳໜັກລວມ ເກີນກວ່າ 7.500ກິໂລກຣາມ ຫາ 15.000 ກິໂລກຣາມ",
        dlt_description_english:
          "Cargo truck total weight exceed 7500 kilogram up to 15000 kilograms",   
      },
      {
        dlt_code: "C2",
          dlt_description_loas:
          "ລົດຂົນສົ່ງສິນຄ້ານ້ຳໜັກລວມ ເກີນກວ່າ 15.000 ກິໂລກຣາມ.",
        dlt_description_english:
          "Cargo truck total weight exceed 15000 kilograms",   
      },
      {
        dlt_code: "D",
          dlt_description_loas:
          "ລົດຂົນສົ່ງຜູ້ໂດຍສານປະເພດ 4 ລໍ້ ຂຶ້ນໄປ, ບໍ່ເກີນ ສິບຫ້າ ບ່ອນນັ່ງ",
        dlt_description_english:
          "Passenger vehicle with 4 wheels or more not more than 15 seats",   
      },
      {
        dlt_code: "D1",
          dlt_description_loas:
          "ລົດຂົນສົ່ງຜູ້ໂດຍສານ ແຕ່ ສິບຫົກ ຫາ ສາມສິບຫ້າ ບ່ອນນັ່ງ",
        dlt_description_english:
          "Passenger vehicle from 16 seats to 35 seats",   
      },
      {
        dlt_code: "D2",
          dlt_description_loas:
          "ລົດຂົນສົ່ງຜູ້ໂດຍສານ ແຕ່ ສາມສິບຫົກ ບ່ອນນັ່ງ ຂຶ້ນໄປ",
        dlt_description_english:
          "Passenger vehicle from 36 seats or more",   
      },
      {
        dlt_code: "E",
          dlt_description_loas:
          "ລົດເບົາ (B), ລົດຂົນສົ່ງສິນຄ້າ (C) ແລະ ລົດຂົນສົ່ງຜູ້ໂດຍສານ (D) ທີ່ແກ່ຫາງລາກນ້ຳໜັກລວມບໍ່ເກີນ 750 ກິໂລກຣາມ",
        dlt_description_english:
          "Car B Cargo truck C and Passenger vehicle D having trailer total weight not exceed 750 kilograms",   
      },
      {
        dlt_code: "E1",
          dlt_description_loas:
          "ລົດຂົນສົ່ງສິນຄ້າ (C2) ແກ່ຫາງລາກນ້ຳໜັກລວມເກີນກວ່າ 750 ກິໂລກຣາມ",
        dlt_description_english:
          "Cargo truck C2 having trailer total weight exceed 750 kilograms",   
      },
    ]
  }),
  
  getters: {


  },

  actions: {
    async fetchExam() {
      try {
        const data = await ApiService.post('/exam/main/list', this.formsearchcourse).then(response => {
          this.listexam = response.data.data;
        });
        return true
      } catch (error) {
        return false;
      } finally {

      }
    },
    async CheckHistory() {
      const data_em_id = []
      const data_em_name = []
      const total = []
      for (var x = 0; x < this.listexam.length; x++) {
        const em_id = this.listexam[x].em_id;
        var examtest = await ApiService.get('/exam/history/?em_id=' + em_id + '&user_id=' + this.user_id + '').then(response => {

          if (response.data.length > 0) {
            const a = { em_id: this.listexam[x].em_id, em_name: this.listexam[x].em_name, total_test: response.data.length }
            data_em_id.push(a)
            data_em_name.push(this.listexam[x].em_name)
            total.push(response.data.length)
          }
        });
      }
      this.report = data_em_id;
      this.data_em_name = data_em_name
      this.total = total
    
    },

    async HistoryByExam(em_id) {
      const history = [];
      const history_byid = await ApiService.get('/exam/history/?em_id=' + em_id + '&user_id=' + this.user_id + '').then(response => {
       
        for (var i = 0; i < response.data.length; i++) {
          if (response.data.length > 0) {
            let score = this.percentage(response.data[i].er_score_total, response.data[i].er_question_total);
       
            const a = { status:response.data[i].status,er_id: response.data[i].er_id, crt_date: response.data[i].crt_date, er_score_total: response.data[i].er_score_total, er_question_total: response.data[i].er_question_total, er_score: score }
            history.push(a)
          }
        }
        this.history = history
      });
    },

    percentage(er_score_total, er_question_total) {
      return (er_score_total / er_question_total) * 100;
    }
  },



})


