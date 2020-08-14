import Vue from 'vue'
import Vuex from 'vuex'
import axios1 from '../axiospoc'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    poc:[],
    user:null,
  },
  mutations: {
    storepocdata(state,pocdata) {
      state.poc=pocdata;
    },
    authUser(state,userdata) {
      state.user=userdata;
    },
    clearAuthData(state) {
      state.user=null;
    },
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
    },
    login({commit},authData) {
      axios1.post('/adminlogin',{userName:authData.email,userPassword:authData.password})
     .then(res =>{
       console.log(res);
       commit('authUser',
        res.data.Name
      )
      if(res.data.Name) {
        router.replace('/about')
      }
       })
    },
    logout({commit}) {
      commit('clearAuthData');
      router.replace('/')
    },
  },
  modules: {
  },
  getters: {
    pocdata(state) {
      return state.poc;
    },
    isAuthenticated(state) {
      return state.user;
    },
  }
})
