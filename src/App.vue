<template>
  <div id="app">
    <router-view/>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
  </div>
</template>

<style>
@import "https://unicons.iconscout.com/release/v0.0.4/css/unicons.css";
@import url("https://fonts.googleapis.com/css?family=Poppins:300,400,600,700&display=swap");

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Poppins", sans-serif;
}
#nav {
  padding: 30px;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
