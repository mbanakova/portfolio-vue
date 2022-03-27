export default {
  state: {
    pets: [
      {
        title: 'quiz',
        link: 'https://quiz0101.web.app/',
        // img: require('@/assets')
      },
      {
        title: 'barahlito',
        link: 'https://barahlito-new.web.app/',
        // img: require('@/assets')
      },
      {
        title: 'quotes',
        link: 'https://vue-quotes-52acd.web.app/',
        // img: require('@/assets')
      },
      {
        title: 'sapper',
        link: 'https://mbanakova.github.io/Sapper/',
        // img: require('@/assets')
      },
      {
        title: 'snake',
        link: 'https://mbanakova.github.io/Snake/',
        // img: require('@/assets')
      },
      {
        title: 'solar system',
        link: 'https://mbanakova.github.io/Galaxy/',
        // img: require('@/assets')
      },
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getPets(state) {
      return state.pets
    }
  },
} 