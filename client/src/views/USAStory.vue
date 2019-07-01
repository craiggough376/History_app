<template lang="html">
  <div>
  <h1>The Civil War</h1>
  <map-box :selectedEpisode="selectedEpisode" :events="filteredEvents"/>
  <timeline :selectedEpisode="selectedEpisode" :events="filteredEvents"/>
</div>
</template>

<script>
import Timeline from '@/components/Timeline.vue'
import MapBox from '@/components/MapBox.vue'

export default {
  props: ["events", 'selectedEpisode'],
  computed: {
    filteredEvents(){
      const results = this.events.filter((event) => {
        return event.tag == "Civil War"
      })
      return results
    }
  },
  components: {
    "timeline": Timeline,
    "map-box": MapBox
  }
}
</script>

<style lang="css" scoped>
</style>
