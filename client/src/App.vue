<template>
  <div id="app">
    <nav>
      <router-link :to="{ name: 'home' }">Home</router-link>
      | <router-link :to="{ name: 'rome-story' }">Roman Empire</router-link>
      | <router-link :to="{ name: 'ww2-story' }">WW2</router-link>
      | <router-link :to="{ name: 'usa-story' }">Civil War</router-link>
    </nav>

    <div class="">
    <router-view id="view" :events="events"></router-view>

  </div>
    </div>

</template>

<script>
import Timeline from './components/Timeline.vue'
import MapBox from './components/MapBox.vue'

export default {
  name: 'app',
  data() {
    return {
  events: []
    }
  },


mounted(){
  fetch('http://localhost:3000/api/events#/')
  .then(res => res.json())
  .then(events => this.events = events)
}
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
