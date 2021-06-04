import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    autos: []
  },
  mutations: {
    SET_AUTOS(state,autos){
      state.autos = autos;
    }
  },
  actions: {
    setAutos({commit}){
      axios.get('http://localhost:3001/')
      .then(res => {
        console.log(res);
        commit('SET_AUTOS', res.data);
      })
    },
    crearAuto({commit}, {params, onComplete, onError}){
      axios.post('http://localhost:3001/crear', params)
      .then(onComplete)
      .catch(onError)
      console.log(commit.length)
    }
  }
});

