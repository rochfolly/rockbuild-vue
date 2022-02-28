<template>
  <div id="nav">
    <nav>
      <img alt="Vue logo" src="@/assets/logo.png">
      <router-link to="/" class="vue-link">Home</router-link>
      <router-link :to="{ name: 'settings'}" class="vue-link">Settings</router-link>
      <router-link :to="{ name: 'event', params: { id: 5 }}" class="vue-link">Event</router-link>
      <router-view/>
    </nav>

  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>