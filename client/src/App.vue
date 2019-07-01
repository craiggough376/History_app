<template>
  <div id="app">
    <map-box />
    <timeline />

  </div>
</template>

<script>
import Timeline from './components/Timeline.vue'
import MapBox from './components/MapBox.vue'

export default {
  name: 'app',
  components: {
    'timeline': Timeline,
    'map-box': MapBox
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
