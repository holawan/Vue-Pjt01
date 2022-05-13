import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import _ from 'lodash'
Vue.use(Vuex)


export default new Vuex.Store({
  // state에 데이터를 담을 값들을 선언해준다.
  state: {
    // 영화는 object
    movie : {},
    // 영화 목록은 array
    movies : [],
    // 보고싶은 영화 목록 array
    wannabes : [],
  },
  getters: {

  },
  mutations: {
    // GET_MOVIE 커밋이 들어오면 들어온 결과를 담아서 movies 배열에 추가해준다.
    GET_MOVIE : function(state,res){
      state.movies = res.data.results
      
    },
    // PICK_MOVIEcommit이 들어오면 
    PICK_MOVIE : function(state){
      // console.log(state.movies)
      // 추천해줄 영화에 들어온 영화중 하나를 넣어준다.
      state.movie = _.sample(state.movies)
      // console.log(state.movie)
    },
    // WANNABE_MOVIE mutation을 실행할 때 wannabe를 가져와서 wannabes 배열에 추가한다.
    WANNABE_MOVIE : function(state,wannabe){
      state.wannabes.push(wannabe)
      // console.log(state.wannabes)
    }
  },
  actions: {
    // getmovie 요청이 들어오면
    getMovie : function({commit}){
      // BASE_URL을mua 생성해준다.  
      const API_URL = 'https://api.themoviedb.org/3/movie/top_rated'
      // 요구되는 파라미터들을 정의해준다.
      const params = {
        api_key : process.env.VUE_APP_TMDB_API_KEY,
        language : 'ko-KR' ,
        page : 1
      }
      // url과 파라미터를 담아서 get 요청을 보낸다.
      axios({
        method :'get',
        url :API_URL,
        params,
      })
      // 요청에 성공하면 GET_MOVIE mutation에 결과를 담아서 보낸다.
        .then(res => {
          // console.log(res.data.results)
          commit('GET_MOVIE',res)
          // PICK_MOVIE에도 요청을 보낸다.
          commit('PICK_MOVIE')
        })
    },
    // wannabeMovie 요청이 들어오면, 같이 담겨온 wannabe를 담아서 commit한다.
    wannabeMovie : function({commit},wannabe){
      commit('WANNABE_MOVIE',wannabe)
    }
    
  },
  modules: {
  }
})
