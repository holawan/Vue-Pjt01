<template>

  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light py-0" style="background-color: rgb(253, 243, 192);;">
      <div class="container-fluid py-0">
        <a class="navbar-brand" href="/"><img src="https://i.pinimg.com/564x/88/29/c5/8829c57efabf4ae6401030ec9b3cf3ed.jpg" alt="" style="width:70px;"></a>
        
          <div>
             <router-link to="/" class="textnone">Home</router-link> 
            <router-link to="/random"  class="mx-3 textnone">Random</router-link>  
            <router-link to="/watch-list" class="textnone">MyMovieList</router-link>
          </div>
      </div>
    </nav>
    <nav>
      <router-view/>
    </nav>
    
  </div>
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
/* 253,243,192 */
nav a.router-link-exact-active {
  color: #7eb6ff;
}
b-navbar-nav{
  /* display: flex;
  flex-direction: row-reverse; */
  position: absolute;
  right: 0px;
}
.textnone{
  text-decoration: none;
}
</style>
