<template>
  <div id="app">
    <nav>
      <router-link :to="{ name: 'home' }">Home</router-link>
      | <router-link :to="{ name: 'rome-story' }">Roman Empire</router-link>
      | <router-link :to="{ name: 'ww2-story' }">WW2</router-link>
      | <router-link :to="{ name: 'usa-story' }">Civil War</router-link>
    </nav>

    <div class="">
    <router-view id="view" :events="events" :selectedEpisode="selectedEpisode"></router-view>

  </div>
    </div>

</template>

<script>
import {eventBus} from './main.js'

export default {
  name: 'app',
  data() {
    return {
  events: [],
  selectedEpisode: 0
    }
  },
mounted(){
  fetch('http://localhost:3000/api/events/')
  .then(res => res.json())
  .then(events => this.events = events)

  eventBus.$on('new event selected', (payload) => {
    this.selectedEpisode = payload
  })
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
<<<<<<< HEAD
  margin-top: 5px;
=======
  margin-top: 60px;
  /* display: flex;
  align-items: center; */
>>>>>>> develop
}
</style>
