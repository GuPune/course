import { defineStore } from 'pinia'
import ApiService from '../services/api.service';


export const LessonStore = defineStore({
  id: 'lessonsselect',
  state: () => ({
    isActiveCourse: false,
    cs_id: null,
    user_id: null,
    formlean: {
      user_id: null,
      cs_id: null,
      course_id: null,
    },
    isYoutube:false,
    seconds: 0,
    timer: null,
    windowWidth:0,
    selelesson:null,
    data: {
      course_id: null,
      crt_date: null,
      cs_cover: null,
      cs_description: null,
      cs_id: null,
      cs_name: null,
      cs_video: null,
      udp_date: null
    },
    total:0,
    formcourse: {
      page: 1,
      per_page: 1,
      search: "",
    },
    formgroup: {
      page: 1,
      per_page: 50,
      search: "",
    },
    group:[],
    formsearchlessongroup:{
      page: 1,
      per_page: 50,
      search: '',
    },
  }),
  getters: {

  },
  actions: {

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

    console.log(this.group);
  
      
    },


    async fetchLessonId(id) {


      try {
        const data = await ApiService.get('/course/lesson/get/' + id).then(response => {
          if (response.data) {
            this.data.course_id = response.data.course_id
            this.data.crt_date = response.data.crt_date
            this.data.cs_cover = response.data.cs_cover
            this.data.cs_description = response.data.cs_description
            this.data.cs_id = response.data.cs_id
            this.data.cs_name = response.data.cs_name
            this.data.cs_video = response.data.cs_video
            this.data.udp_date = response.data.udp_date
            this.cs_id = response.data.cs_id
return true
          }else {
            return false;
          }

        });
        return data;
      } catch (error) {

      }

    },

    async fetchCourse(id) {
      const selelesson = localStorage.getItem('selelesson');
      this.selelesson = selelesson;
      this.formcourse.page = parseInt(this.selelesson);
      this.formlean.course_id = id

      // ((int.parse(page) * int.parse(perPage)) - ((int.parse(perPage) -  index)) +  1)
  
      
      try {
        const data = await ApiService.post('/course/lesson/list/' + id,this.formcourse).then(response => {
          if(response.data.data.length > 0){
            this.data.course_id = response.data.data[0].course_id
            this.data.crt_date = response.data.data[0].crt_date
            this.data.cs_cover = response.data.data[0].cs_cover
            this.data.cs_description = response.data.data[0].cs_description
            this.data.cs_id = response.data.data[0].cs_id
            this.data.cs_name = response.data.data[0].cs_name
            this.data.cs_video = response.data.data[0].cs_video
            this.data.udp_date = response.data.data[0].udp_date
            this.cs_id = response.data.data[0].cs_id
            this.total = response.data.total
            return true
          }else {
            return false;
          }
 
        });
        return data;
      } catch (error) {
console.log(error);
      }

    },
    async updateLogCourse() {
  
      this.formlean.cs_id = this.cs_id;
      this.formlean.user_id = this.user_id;
    
      const data = await ApiService.post('/log/lesson/create', this.formlean).then(response => {
        console.log(this.formlean);
        console.log(response);
      });
    },

    async fetchCourseLessonSelect(id) {

    const selelesson = localStorage.setItem('selelesson',this.selelesson)
    this.formcourse.page = this.selelesson;
try {
  const data = await ApiService.post('/course/lesson/list/' + id,this.formcourse).then(response => {
    this.data.course_id = response.data.data[0].course_id
    this.data.crt_date = response.data.data[0].crt_date
    this.data.cs_cover = response.data.data[0].cs_cover
    this.data.cs_description = response.data.data[0].cs_description
    this.data.cs_id = response.data.data[0].cs_id
    this.data.cs_name = response.data.data[0].cs_name
    this.data.cs_video = response.data.data[0].cs_video
    this.data.udp_date = response.data.data[0].udp_date
    this.cs_id = response.data.data[0].cs_id
    this.total = response.data.total
  });
  return data;
} catch (error) {

}

    

    }



  }
})


