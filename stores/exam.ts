import { defineStore } from 'pinia'
import ApiService from '../services/api.service';


export const ExamPostStore = defineStore({
  id: 'examlist',
  state: () => ({
    timerEnabled: true,
    timerCount: 140,
    isActiveCourse:true,  
    isActive:false, 
    listexam:[],
    listexamqu:[],
    examquest:[],
    listttt:[],
    counting:false,
    aaaa:0,
    seconds:"",
    hours:"",
    minutes:"",
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

    async fetchExamq() {
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
  
  this.listttt = [];
  this.listttt.push(this.listexamqu[0])
    },
    async Updatechoice(choices,eq_id) {
let obj = this.listexamqu.find(item => item.eq_id === eq_id).answer;
this.listttt[0].answer = choices
    },

    async Next(index) {
      this.aaaa++
      this.listttt = [];
      this.listttt.push(this.listexamqu[this.aaaa])
      let obj = this.listexamqu.find(item => item.eq_id === index);
    },
    async Previod(index) {

this.aaaa--;

this.listttt = [];
this.listttt.push(this.listexamqu[this.aaaa])
let obj = this.listexamqu.find(item => item.eq_id === index);



    },
    async fetchCourseall() {

    },

    async countDownTimer () {
      if (this.timerCount > 0) {
        await setTimeout(() => {
              this.timerCount -= 1
              console.log(this.timerCount);
        this.countDownTimer()
        this.toHoursAndMinutes()
          }, 1000)
      }
      if (this.timerCount == 0) {
        return 1;
      }
 
  },
  async Start(){
    this.timerCount = 140;
  },

  async toHoursAndMinutes() {
    const totalMinutes = Math.floor(this.timerCount / 60);
    this.seconds = this.timerCount % 60;
    this.hours = Math.floor(totalMinutes / 60);
    this.minutes = totalMinutes % 60;
   
  
    
  }

  },
    
  
})


