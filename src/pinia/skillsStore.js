import { defineStore } from 'pinia'

export const useSkillsStore = defineStore('skillsStore', {

  state: () => ({
    skills: [
      {
        title: 'Vue.js',
        list: ['Router', 'Pinia', 'Vuex', 'Composition API', 'Firebase', 'Nuxt',]
      },
      {
        title: 'JavaScript',
        list: ['Basic data types', 'Variables', 'Functions', 'Conditional statements', 'Arrays, json, objects', 'Loops', 'Events']
      },
      {
        title: 'HTML + CSS',
        list: ['Semantics', 'BEM', 'Flex & grid', ' Styling by tags, classes, id, ::pseudo', 'Animations, transitions', 'Variables, mixins, counters']
      },
      {
        title: 'Tools',
        list: ['Git & Github', 'SQL', 'MJML', 'Nunjucks', 'SCSS', 'Gulp']
      },
    ]
  })
})