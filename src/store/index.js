import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    toys:[],
    showForm: false
  },
  mutations: {
    SET_TOYS(state, data) { state.toys = data},
    DISPLAY_TOY_FORM(state){ state.showForm = true },
    HIDE_TOY_FORM(state){ state.showForm = false }
  },
  actions: {
    displayToyForm({commit}){commit('DISPLAY_TOY_FORM')},
    hideToyForm({commit}){commit('HIDE_TOY_FORM')},
    setToys({commit}){
      axios.get('https://us-central1-otto-klaus-7f374.cloudfunctions.net/toys/toys')
      .then(response => {
        commit('SET_TOYS', response.data)
      })
    }
  },
  modules: {
  }
})
