import { defineStore } from 'pinia'
import ApiService from '../services/api.service';


export const ExamPostStore = defineStore({
  id: 'examlist',
  state: () => ({
    timerEnabled: true,
    timerCount: 20,
    isActiveCourse:true,  
    isActive:false, 
    listexam:[],
    user_id:[],
    listexamqu:[],
    examquest:[],
    listmain:[],
    counting:false,
    ind:0,
    seconds:"",
    hours:"",
    minutes:"",
    formsearchcourse: {
      page: 1,
      per_page: 50,
      search: '',
      active_include: [1]
    },
    exammain:[],
    formsearchexam: {
      page: 1,
      per_page: 50,
      search: ''
    },
    history:[],



  }),
  getters: {
    getisActiveCourse: (state) => {
      return state.isActiveCourse;
    },


    GetopenModal: (state) => {
      return state.isActive;
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

    async Resetfetch(){
this.formsearchcourse.page = 1
this.formsearchcourse.per_page = 6;
this.formsearchcourse.search = '';
    },

    async HistoryByUserExam() {

      try {
        const data = await ApiService.get('/exam/history/?course_id=0&user_id='+this.user_id).then(response => {
  this.history = response.data

         });
     
        return true
        } catch (error) {
        return false;
        } 

    },

    async fetchExam() {
    try {
    const data = await ApiService.post('/exam/main/list', this.formsearchexam).then(response => {
      this.listexam = response.data.data;
      this.total = response.data.total;
      this.total_page = response.data.total_page;
      this.total_filter = response.data.total_filter;
     });
 
    return true
    } catch (error) {
    return false;
    } 
    },

    async fetchExamList() {

      for (var i = 0, len = this.listexam.length; i < len; i++) {
        // console.log(this.listexam);
      //   const data = await ApiService.post('/exam/main/list/'+this.listexam[i].course_id, this.formsearchexam).then(response => {
         
      //     this.listexam[i].em_measure = [];
      //     this.listexam[i].em_time = [];
  
      
      //     if(response.data.data){
      //       this.listexam[i].em_measure = response.data.data[0].em_measure;
      //       this.listexam[i].em_time = response.data.data[0].em_time;
      //       this.listexam[i].em_cover = response.data.data[0].em_cover;
      //       this.listexam[i].em_name = response.data.data[0].em_name;
      //       this.listexam[i].em_id = response.data.data[0].em_id;
      //     }
        
      //  });
    } 

    return true;
 

      },


      


    async setCurrentPage(page) {
      this.formsearchcourse.page = page
    },

    async fetchExamq() {
      this.listexamqu = [];
      this.ind = 0;
      try {
      const data = await ApiService.post('/exam/question/5/list', this.formsearchcourse).then(response => {
        this.listexamqu = response.data.data;
        this.fetchExamquest()
     
       });
      return true
      } catch (error) {
      return false;
      } finally {
       
      }
      },

    async fetchExamquest() {

      const arr = [];
      for (var i = 0; i < this.listexamqu.length; i++) {
         this.listexamqu[i].answer = null;
   arr.push(this.listexamqu[i]);
      }
     
  
  this.listmain = [];
  this.listmain.push(this.listexamqu[0])
    },
    async Updatechoice(choices,eq_id) {
let obj = this.listexamqu.find(item => item.eq_id === eq_id).answer;
this.listmain[0].answer = choices
    },

    async Next(index) {
      this.ind++
      this.listmain = [];
      this.listmain.push(this.listexamqu[this.ind])
      let obj = this.listexamqu.find(item => item.eq_id === index);
    },
    async Previod(index) {

this.ind--;

this.listmain = [];
this.listmain.push(this.listexamqu[this.ind])
let obj = this.listexamqu.find(item => item.eq_id === index);



    },
    async fetchCourseall() {

    },

    async countDownTimer () {

  
  

      if (this.timerCount > 0) {
        await setTimeout(() => {
              this.timerCount -= 1
            
        this.countDownTimer()
        this.toHoursAndMinutes()
          }, 1000)
      }
      if (this.timerCount == 0) {
        return 1;
      }
 
  },
  async Start(){
    this.timerCount = 20;
  },

  async toHoursAndMinutes() {
    const totalMinutes = Math.floor(this.timerCount / 60);
    this.seconds = this.timerCount % 60;
    this.hours = Math.floor(totalMinutes / 60);
    this.minutes = totalMinutes % 60;
   
  
    
  }

  },
    
  
})


