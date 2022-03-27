export default {
  state: {
    skills: [
      {
        title: 'HTML + CSS',
        list: ['Semantics', 'BEM', 'Flex & grid', ' Styling by tags, classes, id, ::pseudo', 'Animations, transitions', 'Variables, mixins, counters']
      },
      {
        title: 'JavaScript',
        list: ['Basic data types', 'Variables', 'Functions', 'Conditional statements', 'Arrays, json, objects', 'Loops', 'Events']
      },
      {
        title: 'Tools',
        list: ['Visual Studio', 'Git & Github', 'Figma', 'Photoshop', 'MJML', 'Nunjucks', 'SCSS', 'Gulp']
      },
      {
        title: 'Vue.js',
        list: ['Router', 'Vuex', 'Firebase', 'Nuxt',]
      },
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getSkills(state) {
      return state.skills
    }
  },
} 