<template lang="html">
  <div class="">
<<<<<<< HEAD

    <map-box></map-box>
    <time-line></time-line>

  </div>
</template>

<script>
import MapBox from '@/components/MapBox.vue'
import Timeline from '@/components/Timeline.vue'
export default {
  name: 'home',
  components: {
    'map-box': MapBox,
    'time-line': Timeline
=======
    <h1> War what is it good for? </h1>
    <br>
      <router-view id="view" :events="events"></router-view>
    </div>
</template>

<script>

import Event from '@/components/Event.vue'

export default {
  props: ['events'],
  components: {
>>>>>>> develop
  }
}
</script>

<style lang="css" scoped>
</style>
