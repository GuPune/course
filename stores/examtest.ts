import { defineStore } from 'pinia'
import ApiService from '../services/api.service';
export const ExamTestPostStore = defineStore({
  id: 'examtest',
  state: () => ({
    timerEnabled: true,
    timerCount: 0,
    exam_complete:null,
    t: 1,
    timeoutId: null,
    isActiveCourse: true,
    isActive: false,
    examination: [],
    listttt: [],
    exam: null,
    counting: false,
    em_id: null,////param
    ind: 0,
    ec_score:0,
    seconds: "",
    hours: "",
    minutes: "",
    total: null,
    maxNext:null,
    cleartime: [],
    ex_count: [],
    formsearchtest: {
      page: 1,
      per_page: 50,
      clear_cach: 0,
      em_id: null,
      user_id: useCookie('user_id').value,
    },
    updatetest: {
      ec_id: null,
      user_id: useCookie('user_id').value,
    },

    updatetime: {
      et_time: null,
      em_id: null,
      user_id: useCookie('user_id').value,
      timerCount: null,
      isComplate: false,
    }
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
    setECid(id) {   //// set data
      this.exam = null;
      this.updatetime.em_id = id;
      this.formsearchtest.em_id = parseInt(id);
      const Exam = ExamPostStore();
      const Ex = Exam.listexam.filter(item => item.em_id == id);
      if (Ex.length != 0) {
        this.exam = Ex[0];
        return true
      } else {
        return false;
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

    async ResetExam() {
      this.formsearchtest.clear_cach = 1;
      try {
        const data = await ApiService.post('/exam/start/render', this.formsearchtest).then(response => {
        this.updatetime.et_time = this.exam.em_time
        const updatetime =  ApiService.post('/exam/time/render',this.updatetime).then(rep => {
          this.GetTime();
          this.ind = 0;
        });
        });
        return true
      } catch (error) {
        return false;
      } 
    },


    async sendexam() {
  
      try {
        const data = await ApiService.post('/exam/result/render', this.updatetime).then(response => {
          console.log(response);
        });
        return true
      } catch (error) {
        return false;
      } finally {

      }
   

    },

    async fetchExamTest() {
      this.formsearchtest.clear_cach = 0;
      try {
        const data = await ApiService.post('/exam/start/render', this.formsearchtest).then(response => {
          this.exam_complete = response.data.exam_complete
          this.examination = response.data.data;
          this.total = response.data.data.length
          this.maxNext = response.data.data.length - 1
          var score = 0;
         for (var i = 0; i < this.examination.length; i++) {
          if(this.examination[i].ec_score == 1){
          score++
          }
          
          this.ec_score = score;

          }
         this.fetchExamquest()
        // this.GetTime()
        });
        return true
      } catch (error) {
        return false;
      } finally {

      }
    },

    async fetchExamquest() {
      this.listttt = [];
      this.listttt.push(this.examination[this.ind])
    },

    async GetTime() {
      try {
        const data = await ApiService.get('/exam/time/?em_id='+ this.updatetime.em_id +'&user_id='+this.updatetest.user_id+'').then(rep => {
              const timeParts = rep.data.et_time.split(':');
              const hours = parseInt(timeParts[0], 10);
              const minutes = parseInt(timeParts[1], 10);
              const seconds = parseInt(timeParts[2], 10);
              this.timerCount = hours * 3600 + minutes * 60 + seconds;
              this.toHoursAndMinutes(this.timerCount) ///แปลงเวลา
        });
        return true
      } catch (error) {
        return false;
      } finally {

      }
 
    },
    async UpdateTime() {
      const result = new Date(this.timerCount * 1000)
      .toISOString()
      .slice(11, 19);
      this.updatetime.et_time = result;
      try {
        const data = await ApiService.post('/exam/time/render',this.updatetime).then(rep => {

        });
        return true
      } catch (error) {
        return false;
      } finally {

      }
 
    },

    async Updatechoice(choices) {
      this.updatetest.ec_id = choices
      try {
        const data = await ApiService.post('/exam/send/render', this.updatetest).then(response => {
        });
        return true
      } catch (error) {
        return false;
      } finally {

      }
    },

    async Next(index) {
      this.ind++
      this.listttt = [];
      this.listttt.push(this.examination[this.ind])
      let obj = this.examination.find(item => item.eq_id === index);
    },
    async Previod(index) {
      this.ind--;
      this.listttt = [];
      this.listttt.push(this.examination[this.ind])
      let obj = this.examination.find(item => item.eq_id === index);

    },
    async fetchCourseall() {

    },

    async countDownTimer() {
      if (this.timerCount > 0) {
        this.timeoutId = setTimeout(() => {
          this.timerCount -= 1;
     
         // this.updatetime.timerCount = this.timerCount;
          // const xt = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('examtest')) : null;
          //  const indexToUpdate = xt.findIndex(item => item.em_id === 7);
          // const data = JSON.parse(localStorage.getItem('examtest'));
          // const updatedObject = { em_id: this.updatetime.em_id, timerCount: this.updatetime.timerCount, isComplate: false };
          // if (data) {
          //   const index = data.findIndex(item => item.em_id === this.updatetime.em_id)
          //   if (index !== -1) {
          //     console.log('Data', this.ex_count);
          //     // Replace the object at the specified index
          //     data.splice(index, 1, updatedObject);
          //     const updatetime = localStorage.setItem('examtest', JSON.stringify(data))
          //   } else {
          //     this.ex_count.push(updatedObject)
          //     console.log('Object not found', this.ex_count);
          //     const updatetime = localStorage.setItem('examtest', JSON.stringify(this.ex_count))
          //   }
          // } else {
          //   this.ex_count.push(updatedObject)
          //   const updatetime = localStorage.setItem('examtest', JSON.stringify(this.ex_count))
          // }
      
          this.countDownTimer() 
          this.toHoursAndMinutes()  ///แปลงเวลา
        }, 1000)
      }
      if (this.timerCount == 0) {
        return 1;
      }

    },
    delay() {
      return new Promise((resolve) => setTimeout(resolve, 1000));
    },
    clearTimer() {
    
      const result = new Date(this.timerCount * 1000)
  .toISOString()
  .slice(11, 19);
  this.updatetime.et_time = result;
      if (this.timeoutId) {
     this.UpdateTime();
        clearTimeout(this.timeoutId);
        this.timeoutId = null;
  
      }
    },

    async Start() {
     // this.timerCount = 20;
    },

    async toHoursAndMinutes() {
     
      const totalMinutes = Math.floor(this.timerCount / 60);
      this.seconds = this.timerCount % 60;
      this.hours = Math.floor(totalMinutes / 60);
      this.minutes = totalMinutes % 60;

      return true;

    }

  },


})


