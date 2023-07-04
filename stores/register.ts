import { defineStore } from 'pinia'




interface RegisterloadInterface {
  username: string;
  password: string;
  email: string;
  fname: string;
  lname: string;
  tel:string;
  confirmPassword: null;
}


export const RegisterStore  = defineStore({
  id: 'register',
  state: () => ({
    isLoading :false,
    form: {
        fname: "",
        lname: "",
        username: "",
        email: "",
        password: "",
    },
  }),
  getters: {

    getisLoading: (state) => {
      return state.isLoading;
    },
  
  }, 
  actions: {

    
 
    async regsiter({ username, password,email,fname,lname,tel }: RegisterloadInterface) {

    
    // console.log(JSON.stringify({
    //   username: username,
    //   password: password,
    //   email: email,
    //   fname: fname,
    //   lname: lname,
    //   tel: tel,
    // }));
this.isLoading = true;
    const { data } = await useFetch('https://dummyjson.com/products/add', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: 'BMW Pencil',
        /* other product data */
      })
    })

     console.log(JSON.stringify(data.value));
     this.isLoading = false;
  
    }


  }
})


