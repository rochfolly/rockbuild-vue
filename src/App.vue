<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <router-link to="/" class="vue-link">Home</router-link>
    <router-link :to="{ name: 'settings'}" class="vue-link">Settings</router-link>
    <router-link :to="{ name: 'event', params: { id: 5 }}" class="vue-link">Event</router-link>
    <router-view/>
  </div>
</template>

<script>
// import Home from './views/Home.vue'

export default {
  name: 'App',
  components: {
    // Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
