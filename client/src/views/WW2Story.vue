<template lang="html">
  <div>
  <h1>World War 2</h1>
  <map-box :selectedEpisode="selectedEpisode"/>
  <timeline :selectedEpisode="selectedEpisode" />
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
        return event.tag == "WW2"
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
