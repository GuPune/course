import { defineStore } from 'pinia'
import ApiService from '../services/api.service';


export const CoursePostStore = defineStore({
  id: 'courseall',
  state: () => ({
    isActiveCourse:false,
    coursecategories:[],
    listcourse:[],
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
    getCoursecategories: (state) => {
      return state.coursecategories;
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

    async fetchCourse() {
      this.coursecategories = []
   // this.posts = await myService.fetchData();
    try {
    const data = await ApiService.post('/course/list', this.formsearchcourse).then(response => {
      this.coursecategories = response.data.data 
      console.log(response.data.data);
     });
    } catch (error) {
    
    } finally {
     
    }
    },
    async fetchCourseall() {

    },
    
  }
})


