export default {
  state: {
    tasks: [
      {
        description: 'Temperature data, kinda ToDo',
        link: 'https://fhslabs-vue.web.app/',
        img: require('@/assets/task1.png')
      },
      {
        description: 'Event agency web-site',
        link: 'https://eventpro.ru.com/',
        img: require('@/assets/task2.png')
      },
      {
        description: 'Real estate product card',
        link: 'https://mbanakova.github.io/flat_test/build/',
        img: require('@/assets/task4.png')
      },
      {
        description: 'User login form',
        link: 'https://mbanakova.github.io/clothes-login/build/',
        img: require('@/assets/task3.png')
      },
      {
        description: 'Books digest',
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