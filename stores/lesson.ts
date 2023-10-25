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
      cs_id: null
    },
    data: {
      course_id: null,
      crt_date: null,
      cs_cover: null,
      cs_description: null,
      cs_id: null,
      cs_name: null,
      cs_video: null,
      udp_date: null
    }
  }),
  getters: {

  },
  actions: {




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
    async updateLogCourse() {

      this.formlean.cs_id = this.cs_id;
      this.formlean.user_id = this.user_id;
      const data = await ApiService.post('/log/lesson/create', this.formlean).then(response => {

      });
    }



  }
})


