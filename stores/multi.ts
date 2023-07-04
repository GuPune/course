import { defineStore } from 'pinia'

export const useLocaleStore = defineStore('locale', {
  state: () => ({
    currentLocale: 'en', // Set your default locale here
  }),
  actions: {
    setLocale(locale: string) {
     
      this.currentLocale = locale
      console.log(this.currentLocale);
    },
  },
})