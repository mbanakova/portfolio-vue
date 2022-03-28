export default {
  state: {
    tasks: [
      {
        description: 'temperature data, kinda todo',
        link: 'https://fhslabs-vue.web.app/',
        img: require('@/assets/task1.png')
      },
      {
        description: 'event agency web-site',
        link: 'https://eventpro.ru.com/',
        img: require('@/assets/task2.png')
      },
      {
        description: 'real estate product card',
        link: 'https://mbanakova.github.io/flat_test/build/',
        img: require('@/assets/task4.png')
      },
      {
        description: 'user login form',
        link: 'https://mbanakova.github.io/clothes-login/build/',
        img: require('@/assets/task3.png')
      },
      {
        description: 'books digest',
        link: 'https://mbanakova.github.io/ibrush/build/',
        img: require('@/assets/task5.png')
      },
      {
        description: 'various block models',
        link: 'https://mbanakova.github.io/Test-task-with-cats/build/',
        img: require('@/assets/task6.png')
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getTasks(state) {
      return state.tasks
    }
  },
} 