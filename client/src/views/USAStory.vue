<template lang="html">
  <div>
  <h1>The Civil War</h1>
  <map-box :selectedEpisode="selectedEpisode" :events="filteredEvents" :mapUrl="mapUrl" :center="center"/>
  <timeline :selectedEpisode="selectedEpisode" :events="filteredEvents" :inheritedStyle="inheritedStyle" :boxWidth="boxWidth" :dateBreadth="dateBreadth"/>
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
  },
  data() {
    return {
      boxWidth: 8,
      inheritedStyle: {
        box: {},
        branch: {},
        grid: {},
        timeline: {},
        boundaries: {},
        date: {},
        title: {},
        selected: {}
      },
      dateBreadth: {
        start: '1981',
        end: '1988'
      },
      mapUrl: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
      center: [39.804755362523224, -99.16197449275398]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
