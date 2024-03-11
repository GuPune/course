import { defineStore } from 'pinia'
import ApiService from '../services/api.service';


export const CoursePostStore = defineStore({
  id: 'courseall',
  state: () => ({
    isActiveCourse:false,
    coursecategories:[],
    listcourse:[],
    lessonlist:[],
    lesson:[],
    total:null,
    formsearchcourse: {
      page: 1,
      per_page: 3,
      search: '',
    },
    user_id:null,
    total_filter:0,
    course_lesson:null,
    course:{
      course_id:null,
      course_cover: null,
    },
    formsearchlesson: {
      page: 1,
      per_page: 5,
      search: '',
    },

    selectlesson_form_menu_less: {
      per_page: 5,
      total_page: 0,
      page: 1,
      search: '',
      cg_id: 0,
    },
    total_lesson:null,
    total_filter_lesson:null,
    total_page_lesson:null,
    cs_id:null,
    group:[],
    formsearchlessongroup:{
      page: 1,
      per_page: 50,
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
   console.log(this.formsearchcourse);
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
      const page = [];
      for (var i = 0; i < this.listcourse.length; i++) {
         this.listcourse[i].lesson = [];
       const x = await ApiService.post('/course/lesson/list/'+ this.listcourse[i].course_id, this.formsearchcourse);
   this.listcourse[i].lesson = x.data.data
   
   this.listcourse[i].total_les = x.data.total
   arr.push(this.listcourse[i]);
  
      }
this.listcourse = arr;

    },


    async fetchCourseId(id){
    this.course_id = id;
      try {
        const data = await ApiService.get('/course/get/' + id).then(response => {
       this.course_lesson = response.data
        });
        return true
      } catch (error) {

      }
    
    },
    
    async fetchCourseLessId(id){

      this.lesson = [];
      const checkpag =  await ApiService.post('/course/lesson/list/'+ id,this.formsearchlesson)


    if(checkpag){
      if(checkpag.data.total_page > 1){
        for(let i = 0; i < checkpag.data.total_page; i++){
          this.formsearchlesson.page = i + 1;
          const data =  await ApiService.post('/course/lesson/list/'+ id,this.formsearchlesson)
          // const Storage = LessonStore();
          for(let i = 0; i < data.data.data.length; i++){
            this.lesson.push(data.data.data[i]);
          }
      }
  
      }else {
        const data =  await ApiService.post('/course/lesson/list/'+ id,this.formsearchlesson)
        this.lesson = data.data.data
      }

   console.log(this.lesson);
      // try {
      //   const data = await ApiService.post('/course/lesson/list/' + id,this.formsearchlesson).then(response => {
      //     this.lesson = response.data.data
      //     this.total_lesson = response.data.total
      //     this.total_filter_lesson = response.data.total_filter
      //     this.total_page_lesson = response.data.total_page
      //     this.lesson_current_page = response.data.current_page
      
      //     return true;
      //   });
      //   return data;
      // } catch (error) {
      // this.lesson = [];
      // this.total_page_lesson = 0
      //   return false;
      // }
    }

    },

    async addlessread(){
      if(this.lesson.length > 0){
        for (var i = 0; i < this.lesson.length; i++) {
      
          const data = await ApiService.get('/course/learn/status?cs_id='+this.lesson[i].cs_id+'&user_id='+this.user_id+'&course_id='+this.course_id);
          this.lesson[i].studied = data.data.studied
    
      }


      }
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
    async setCurrentPageLessonNew(page) {
      this.selectlesson_form_menu_less.page = page
    },

    async SelectLesson(id,index,x) {
      this.course_select_id = id;
      this.course_index = index;
      this.course_select_page = this.formsearchlesson.page;
     const cour = localStorage.setItem('course_select_id', this.course_select_id)
      const selelesson = localStorage.setItem('selelesson',x)
    },

    async fetchGrouplist() {
      this.group = [];
      const checkpag =  await ApiService.post('/course/group/all',this.formsearchlessongroup)


    if(checkpag){
      if(checkpag.data.total_page > 1){
        for(let i = 0; i < checkpag.data.total_page; i++){
          this.formsearchlessongroup.page = i + 1;
          const data =  await ApiService.post('/course/group/all',this.formsearchlessongroup)
          // const Storage = LessonStore();
          for(let i = 0; i < data.data.data.length; i++){
            this.group.push(data.data.data[i]);
          }
      }
  
      }else {
        const data =  await ApiService.post('/course/group/all',this.formsearchlessongroup)
        this.group = data.data.data
      }

    }

    },

    async paginatedItems() {


   

      const startIndex = (this.selectlesson_form_menu_less.page - 1) * this.selectlesson_form_menu_less.per_page;
      const endIndex = startIndex + this.selectlesson_form_menu_less.per_page;
      this.selectlesson_form_menu_less.total_page = Math.ceil(this.lesson.length / this.selectlesson_form_menu_less.per_page);
      this.lesson_item = this.lesson.slice(startIndex, endIndex);
     // this.max = endIndex;
    },


  }
})


