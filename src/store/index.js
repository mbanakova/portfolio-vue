import { createStore } from 'vuex'
import skills from './skills.js'
import pets from './pet.js'
import sertificates from './sertificates.js'
import tasks from './tasks.js'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: { skills, pets, sertificates, tasks }
})