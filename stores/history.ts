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
    report: [],
    user_id: useCookie('user_id').value,
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
      for (var x = 0; x < this.listexam.length; x++) {
        const em_id = this.listexam[x].em_id;
        var examtest = await ApiService.get('/exam/history/?em_id=' + em_id + '&user_id=' + this.user_id + '').then(response => {
          if (response.data.length > 0) {
            const a = { em_id: this.listexam[x].em_id, em_name: this.listexam[x].em_name, total_test: response.data.length }
            data_em_id.push(a)
          }
        });
      }
      this.report = data_em_id;
    }
  },


})


