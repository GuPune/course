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
      console.log('this.listexam', this.listexam);
      console.log('this.user_id', this.user_id);
      for (var x = 0; x < this.listexam.length; x++) {
        const em_id = this.listexam[x].em_id;
        var examtest = await ApiService.get('/exam/history/?em_id=' + em_id + '&user_id=' + this.user_id + '').then(response => {
          console.log(this.listexam[x]);
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
      console.log(total);
      
    },

    async HistoryByExam(em_id) {
      const history = [];
      const history_byid = await ApiService.get('/exam/history/?em_id=' + em_id + '&user_id=' + this.user_id + '').then(response => {
        for (var i = 0; i < response.data.length; i++) {
          if (response.data.length > 0) {
            let score = this.percentage(response.data[i].er_score_total, response.data[i].er_question_total);
            console.log(score);
            const a = { er_id: response.data[i].er_id, crt_date: response.data[i].crt_date, er_score_total: response.data[i].er_score_total, er_question_total: response.data[i].er_question_total, er_score: score }
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


