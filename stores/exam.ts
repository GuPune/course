import { defineStore } from 'pinia'
import ApiService from '../services/api.service';


export const ExamPostStore = defineStore({
  id: 'examlist',
  state: () => ({
    isActiveCourse:true,
  
    listexam:[],
    formsearchcourse: {
      page: 1,
      per_page: 10,
      search: '',
    },
  }),
  getters: {
    getisActiveCourse: (state) => {
      return state.isActiveCourse;
    },
  
   
  }, 
  actions: {
    async toggleActiveClass() {
      if (!this.isActiveCourse) {
        this.isActiveCourse = true;
      } else {
        this.isActiveCourse = false;
      }
    },

    async fetchExam() {
    try {
    const data = await ApiService.post('/exam/main/list', this.formsearchcourse).then(response => {
      console.log(response.data.data);
      this.listexam = response.data.data;
     });
    return true
    } catch (error) {
    return false;
    } finally {
     
    }
    },
    async fetchCourseall() {

    },
    
  }
})


