import { defineStore } from 'pinia'
import ApiService from '../services/api.service';


export const CoursePostStore = defineStore({
  id: 'courseall',
  state: () => ({
    isActiveCourse:false,
    coursecategories:[],
    listcourse:[],
    lessonlist:[],
    formsearchcourse: {
      page: 1,
      per_page: 10,
      search: '',
    },
    course_lesson:null,
    course:{
      course_id:null,
      course_cover: null,
    },
    // course: {
    //   course_id: null,
    //   course_cover: null,
    //   course_code: null,
    //   course_name: null,
    //   course_description: null,
    //   user_create: null,
    //   lessonlist:[]
    // },
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
      this.listcourse = response.data.data

     this.fetchlesson();
  
     });
     return true;
    } catch (error) {
    
    } finally {
     
    }
    },
    async fetchCourseall() {

    },
    async fetchlesson() {
      const arr = [];
      for (var i = 0; i < this.listcourse.length; i++) {
         this.listcourse[i].lesson = [];
       const x = await ApiService.post('/course/lesson/list/'+ this.listcourse[i].course_id, this.formsearchcourse);
   this.listcourse[i].lesson = x.data.data

   arr.push(this.listcourse[i]);
      }
this.listcourse = arr;
    },
    
    async fetchCourseId(id){
      this.course_lesson = this.listcourse.filter(item => item.course_id == id);
      console.log(this.course_lesson);
      return true
    }
  }
})


