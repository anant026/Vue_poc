import Vue from 'vue'
import Vuex from 'vuex'
import axios1 from '../axiospoc'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    poc:[]
  },
  mutations: {
    storepocdata(state,pocdata) {
      state.poc=pocdata;
    }
  },
  actions: {
    display({commit,state}) {
      axios1.get('/view')
      .then(res => {
        console.log(res);
        const data= res.data;
        console.log(data);
      const users =[];
      for(const key in data) {
        const user = data[key];
        //user.id=key;
        users.push(user);
      }
      console.log(users);
        commit('storepocdata',users);
      })
      .catch(error => console.log(error));
    }
  },
  modules: {
  },
  getters: {
    pocdata(state) {
      return state.poc;
    }
  }
})
