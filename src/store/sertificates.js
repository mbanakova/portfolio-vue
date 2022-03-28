export default {
  state: {
    sertificates: [
      {
        school: 'udemy',
        courses: [{
          title: 'Vue - The Complete Guide (incl. Router & Composition API)',
          link: 'https://www.udemy.com/certificate/UC-8beb3e2c-ae6c-47c5-b486-ee614c357da6/',
          date: '19.03.2022'
        },
        {
          title: 'Nuxt.js - Vue.js on Steroids',
          link: 'https://www.udemy.com/certificate/UC-d8c304a6-f0f8-4aee-a027-bc7e26d1f40b/',
          date: '06.02.2022'
        },
        {
          title: 'Clean Code',
          link: 'https://www.udemy.com/certificate/UC-11a1bec9-0768-4b34-85c8-6820a57abc20/',
          date: '22.01.2022'
        }]
      },

      {
        school: 'ITGid',
        courses: [{
          title: 'React. Lite Level',
          link: 'https://itgid.info/img/certificate/02_igr1195.png',
          date: '06.03.2021'
        },
        {
          title: 'JavaScript v.2.0',
          link: 'https://itgid.info/img/certificate/01_319gmqehpv.png',
          date: '06.03.2021'
        }]
      }, {
        school: 'HTML-academy',
        courses: [{
          title: 'Frontend developer',
          link: 'https://assets.htmlacademy.ru/certificates/profession/15/1351465.pdf?1616265195&_ga=2.178448292.1043580548.1648390978-1746616546.1589640756',
          date: '15.11.2020'
        },
        {
          title: 'JavaScript. Professional Development of Web Interfaces',
          link: 'https://assets.htmlacademy.ru/certificates/intensive/173/1351465.pdf?1616265185&_ga=2.207744914.1043580548.1648390978-1746616546.1589640756',
          date: '15.11.2020'
        },
        {
          title: 'HTML & CSS. Adaptive Website Coding and Automation',
          link: 'https://assets.htmlacademy.ru/certificates/intensive/161/1351465.pdf?1616265165&_ga=2.247211012.1043580548.1648390978-1746616546.1589640756',
          date: '13.09.2020'
        },
        {
          title: 'HTML &CSS. Professional Website Coding',
          link: 'https://assets.htmlacademy.ru/certificates/intensive/159/1351465.pdf?1616264907&_ga=2.178335652.1043580548.1648390978-1746616546.1589640756',
          date: '12.07.2020'
        }]
      },
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getSertificates(state) {
      return state.sertificates
    }
  }
}