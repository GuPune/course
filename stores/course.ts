import { defineStore } from 'pinia'
import ApiService from '../services/api.service';


export const CoursePostStore = defineStore({
  id: 'courseall',
  state: () => ({
    isActiveCourse:false,
    coursecategories:[],
    listcourse:[],
    lessonlist:[],
    total:null,
    formsearchcourse: {
      page: 1,
      per_page: 3,
      search: '',
    },
    total_filter:0,
    course_lesson:null,
    course:{
      course_id:null,
      course_cover: null,
    },
    formsearchlesson: {
      page: 1,
      per_page: 1,
      search: '',
    },
    total_lesson:null,
    total_filter_lesson:null,
    total_page_lesson:null,
    cs_id:null
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
      this.total = response.data.total
      this.total_page = response.data.total_page
      
      this.coursecategories = response.data.data 
      this.listcourse = response.data.data
      this.total_filter = response.data.total_filter
      this.limit_page = response.data.limit_page
 
     this.fetchlesson();
  
     });
     return true;
    } catch (error) {
    console.log('error');

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
    
      try {
        const data = await ApiService.get('/course/get/' + id).then(response => {
       this.course_lesson = response.data
        });
        return true
      } catch (error) {

      }
    
    },
    
    async fetchCourseLessId(id){
   
      try {
        const data = await ApiService.post('/course/lesson/list/' + id,this.formsearchlesson).then(response => {
         
          this.lesson = response.data.data
          this.total_lesson = response.data.total
          this.total_filter_lesson = response.data.total_filter
          this.total_page_lesson = response.data.total_page
          this.lesson_current_page = response.data.current_page



        });
        return data;
      } catch (error) {

      }
     
      return true
    },

    async updateLogCourse() {
      console.log('updateLogCourse',this.cs_id);

    },

    async setCurrentPage(page) {
      this.formsearchcourse.page = page
    },

    async setCurrentPageLesson(page) {
      this.formsearchlesson.page = page
     
    },


  }
})


