<template lang="html">
  <div>
<h1>The Roman Empire</h1>
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
    const results =  this.events.filter((event) => {
      return event.tag == "Rome"
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
      mapUrl: 'https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg',
      center: [41.01649883461313, 14.229094522985932]
    }
  }
}


 </script>

 <style lang="css" scoped>
 </style>
