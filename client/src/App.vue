<template>
  <div id="app">

<timeline />

  </div>
</template>

<script>
import Timeline from '@/components/Timeline.vue'

export default {
  name: 'app',
  components: {
    timeline: Timeline
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
