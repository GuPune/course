import { defineStore } from 'pinia'
import ApiService from '../services/api.service';




export const CoursePostStore = defineStore({
  id: 'courseall',
  state: () => ({
    isActiveCourse:false,
    learning_status:false,
    learned:0,
    total_lesson_progress:0,
    progress:0,
    coursecategories:[],
    listcourse:[],
    lessonlist:[],
    total_page:0,
    limit_page:0,
    pdf:[],
    lesson:[],
    total:null,
    formsearchcourse: {
      page: 1,
      per_page: 5,
      search: '',
      active_include: [1],
    },
    formsearchcoursestory: {
      page: 1,
      per_page: 4,
      search: '',
      active_include: [1],
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
    exam:[],
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
    total_page_history:null,
    total_filter_history:null,
    cs_id:null,
    group:[],
    history:[],
    formsearchlessongroup:{
      page: 1,
      per_page: 50,
      search: '',
    },
    formsearchexam:{
      page: 1,
      per_page: 150,
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
      console.log(this.formsearchcourse);
    try {
    const data = await ApiService.post('/course/list', this.formsearchcourse).then(response => {
      this.total = response.data.total
      this.total_page = response.data.total_page
      this.coursecategories = response.data.data 
      this.listcourse = response.data.data
      this.total_filter = response.data.total_filter
      this.limit_page = response.data.limit_page
  
   //  this.fetchlesson();
     });
     return true;
    } catch (error) {
   

    }
    },
    async fetchCourseExam() {

      try {
        const data = await ApiService.post('/exam/main/list', this.formsearchexam).then(response => {
    this.exam = response.data.data
       //  this.fetchlesson();
         });
         return true;
        } catch (error) {
       
    
        }
    },

    
    async fetchCourseHistory() {
    try {
    const data = await ApiService.post('/course/learn/history/'+this.user_id, this.formsearchcoursestory).then(response => {
    
  this.history = response.data.data
  this.total_page_history = response.data.total_page
  this.total_filter_history = response.data.total_filter
     });
     return true;
    } catch (error) {
   return false;
    }
    },
    async fetchCourseall() {

    },
//     async fetchlesson() {
//       const arr = [];
//       const page = [];
//       for (var i = 0; i < this.listcourse.length; i++) {
//          this.listcourse[i].lesson = [];
//        const x = await ApiService.post('/course/lesson/list/'+ this.listcourse[i].course_id, this.formsearchcourse);
//    this.listcourse[i].lesson = x.data.data
   
//    this.listcourse[i].total_les = x.data.total
//    arr.push(this.listcourse[i]);
  
//       }
// this.listcourse = arr;

//     },


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

    async fetchCourseIdExam(id){
      this.course_id = id;
        try {
          const data = await ApiService.get('/exam/main/get/' + id).then(response => {
         this.exam = response.data
  
          });
          return true
        } catch (error) {
  
        }
      
      },

    
    
    async fetchCourseLessId(id){
      this.lesson = [];
      try {
        const data = await ApiService.get('/course/get/option/'+id+'?user_id='+this.user_id).then(response => {
     this.lesson = response.data;
        });  
      } catch (error) {
   
      }
    },
    async progersslesson(id){

      try {
        const data = await ApiService.get('/course/learn/status?user_id='+this.user_id+'&course_id='+id+'').then(response => {
        
     if(response.status == 200){
   this.learning_status = response.data.learning_status;
this.learned = response.data.learned;
this.total_lesson_progress = response.data.total_lesson;
this.progress = response.data.progress;
this.last_date = response.data.last_date;
this.last_course = response.data.last_course
this.last_course_group = response.data.last_course_group
this.last_lesson = response.data.last_lesson

     }else {
this.learning_status = false;
this.learned = 0;
this.total_lesson_progress = 0;
this.progress = '0';
this.last_course = null
     }
        });
      
      } catch (error) {

      }
    },

    async getpdflesson(id){
      try {
        const data = await ApiService.get('/course/document/get/'+id).then(response => {
 this.pdf = response.data
        });
      
      } catch (error) {

      }
    },

    
    async downloadpdf(e){
      try {
        const data = await ApiService.get('media_file/file/?f=static/upload/2024/3/files-5Vva3AkwiG.pdf').then(response => {

        });
      
      } catch (error) {

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
    async getcondition(id) {

      const data = await ApiService.get('/course/cluster/get/' + id).then(response => {
    
        this.condition = response.data;
        this.lesson_total_all = response.data.sum_val_a;
        this.lesson_total_in_course = response.data.sum_val_b;
      
        

      });

    },




  }
})


