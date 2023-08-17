import { defineStore } from 'pinia'
import ApiService from '../services/api.service';
export const ExamTestPostStore = defineStore({
  id: 'examtest',
  state: () => ({
    timerEnabled: true,
    timerCount: 20,
    isActiveCourse:true,  
    isActive:false, 
    listexam:[],
    listexamqu:[],
    examquest:[],
    listttt:[],
    counting:false,
    em_id:null,////param
    ind:0,
    seconds:"",
    hours:"",
    minutes:"",
    formsearchtest: {
      page: 1,
      per_page: 50,
      clear_cach: 0,
      em_id: null,
      user_id: useCookie('user_id').value,
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
    setECid(id) {
      this.formsearchtest.em_id = parseInt(id);
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

    async fetchExamTest() {
      this.listexamqu = [];
      this.ind = 0;
console.log(this.formsearchtest);
      try {
      const data = await ApiService.post('/exam/start/render', this.formsearchtest).then(response => {
  //      this.listexamqu = response.data.data;
  console.log(response.data);
      //  this.fetchExamquest()
     
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
      this.ind++
      this.listttt = [];
      this.listttt.push(this.listexamqu[this.ind])
      let obj = this.listexamqu.find(item => item.eq_id === index);
    },
    async Previod(index) {

this.ind--;

this.listttt = [];
this.listttt.push(this.listexamqu[this.ind])
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


