import { defineStore } from 'pinia'

export const usePetsStore = defineStore('petsStore', {

  state: () => ({
    pets: [
      {
        title: 'pixelgram',
        link: 'https://pixelgram01.web.app/',
        img: require('@/assets/pet9.png')
      },
      {
        title: 'quiz',
        link: 'https://quiz0101.web.app/',
        img: require('@/assets/pet1.png')
      },
      {
        title: 'barahlito',
        link: 'https://barahlito-new.web.app/',
        img: require('@/assets/pet2.png')
      },
      // {
      //   title: 'furniture tooltips',
      //   link: 'https://mbanakova.github.io/tooltips/build/',
      //   img: require('@/assets/pet7.png')
      // },
      {
        title: 'quotes',
        link: 'https://vue-quotes-52acd.web.app/',
        img: require('@/assets/pet3.png')
      },
      {
        title: 'sapper',
        link: 'https://mbanakova.github.io/Sapper/',
        img: require('@/assets/pet4.png')
      },
      {
        title: 'snake',
        link: 'https://mbanakova.github.io/Snake/',
        img: require('@/assets/pet5.png')
      },
      {
        title: 'solar system',
        link: 'https://mbanakova.github.io/Galaxy/',
        img: require('@/assets/pet6.png')
      },
      {
        title: 'react todo',
        link: 'https://mbanakova.github.io/ToDo/',
        img: require('@/assets/pet8.png')
      },
    ]
  })
})