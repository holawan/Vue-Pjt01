import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import _ from 'lodash'
Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    movie : {},
    movies : [],
    wannabes : [],
  },
  getters: {

  },
  mutations: {
    GET_MOVIE : function(state,res){
      state.movies = res.data.results
      
    },
    PICK_MOVIE : function(state){
      // console.log(state.movies)
      state.movie = _.sample(state.movies)
      // console.log(state.movie)
    },
    WANNABE_MOVIE : function(state,wannabe){
      state.wannabes.push(wannabe)
      // console.log(state.wannabes)
    }
  },
  actions: {
    getMovie : function({commit}){
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
          // console.log(res.data.results)
          commit('GET_MOVIE',res)
          commit('PICK_MOVIE')
        })
    },
    wannabeMovie : function({commit},wannabe){
      commit('WANNABE_MOVIE',wannabe)
    }
    
  },
  modules: {
  }
})
