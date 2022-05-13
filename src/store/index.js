import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {

    movies : [],
  },
  getters: {
  },
  mutations: {
    HOME_MOVIE : function(state,res){
      state.movies = res
      
    }
  },
  actions: {
    homeMovie : function({commit}){
      const API_URL = 'https://api.themoviedb.org/3/movie/top_rated'
      const params = {
        api_key : process.env.VUE_APP_TMDB_API_KEY,
        language : 'ko-KR' ,
        page : 1
      }
      axios({
        method :'get',
        url :API_URL,
        params,
      })
        .then(res => {
          console.log(res)
          commit('HOME_MOVIE',res)
        })
    }

  },
  modules: {
  }
})
