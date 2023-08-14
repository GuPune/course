import { defineStore } from 'pinia'
import ApiService from '../services/api.service';


export const ExamPostStore = defineStore({
  id: 'examlist',
  state: () => ({
    isActiveCourse:true,
  
    listexam:[],
    listexamqu:[],
    examquest:[],
    listttt:[],
    aaaa:1,
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
    

  
 // this.listttt.push(this.examquest[0])

  this.listttt = [];
  this.listttt.push(this.listexamqu[0])
  console.log('xxxxxxxxxxxxxx',this.listttt);
  
 // this.listttt.push(this.examquest[0]

    },
    async Updatechoice(choices,eq_id) {
      // console.log(choices)
      // console.log(eq_id)
 
//this.examquest[eq_id].answer = choices;
//this.examquest[eq_id].answer = choices;

let obj = this.listexamqu.find(item => item.eq_id === eq_id).answer;
this.listttt[0].answer = choices
console.log(this.listttt);

// {{ store.listttt }}

// {{ store.listexamqu[0] }}

    },

    async Next(index) {
      
 
      this.listttt = [];
      this.listttt.push(this.listexamqu[this.aaaa])
      let obj = this.listexamqu.find(item => item.eq_id === index);
      console.log(obj);
      this.aaaa++
    },
    async Previod(index) {
const a = index + 1;
this.aaaa = 1;


    },
    async fetchCourseall() {

    },
    
  }
})


