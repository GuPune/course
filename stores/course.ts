import { defineStore } from 'pinia'



export const CoursePostStore = defineStore({
  id: 'courseall',
  state: () => ({
    isActiveCourse:false,
    Coursecategories:[]
  }),
  getters: {
    getisActiveCourse: (state) => {
      return state.isActiveCourse;
    },
    getCoursecategories: (state) => {
      return state.Coursecategories;
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
      this.Coursecategories = []
     

   // this.posts = await myService.fetchData();

   

    try {

    


    const { error, data, statusCode }: any = await useFetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
    });

  
    this.Coursecategories = data.value
    
    } catch (error) {
    
    } finally {
     
    }
    },
    
  }
})


