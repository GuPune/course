<template>
    <div>
      <h1>{{ $t('home') }}</h1>
      <nav>
        <ul>
          <li><a @click="switchLanguage('en')">English</a></li>
          <li><a @click="switchLanguage('th')">Thai</a></li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import { useLanguageStore } from '~/stores/multi'
  
  export default defineComponent({
    setup() {
      const languageStore = useLanguageStore()
  
      function switchLanguage(language) {
        $i18n.setLocale('th')
      }
  
      return { switchLanguage }
    }
  })
  </script>