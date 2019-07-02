<template lang="html">
  <div>
  <h1>World War 2</h1>
  <map-box :selectedEpisode="selectedEpisode" :events="filteredEvents" :mapUrl="mapUrl" :center="center"/>
  <timeline :selectedEpisode="selectedEpisode" :events="filteredEvents" :inheritedStyle="inheritedStyle" :boxWidth="boxWidth" :dateBreadth="dateBreadth"/>
</div>
</template>

<script>
import Timeline from '@/components/Timeline.vue'
import MapBox from '@/components/MapBox.vue'
import {eventBus} from '../main.js'

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
      mapUrl: 'https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png',
      center: [50.51342652633956, 13.0078125]
      // mapUrl: 'https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png'
    }
  },
  mounted() {
    eventBus.$emit('new event selected', -1)
  }
}
</script>

<style lang="css" scoped>
</style>
