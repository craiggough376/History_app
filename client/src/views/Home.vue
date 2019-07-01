<template lang="html">
  <div class="">

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
  }
}
</script>

<style lang="css" scoped>
</style>
