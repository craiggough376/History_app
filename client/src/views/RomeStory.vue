<template lang="html">
  <div class="all">
  <h1>THE FALL OF THE ROMAN REPUBLIC</h1>
  <div class="map-container">
<h1>The Roman Empire</h1>
<map-box :selectedEpisode="selectedEpisode" :events="filteredEvents" :mapUrl="mapUrl" :center="center"/>
</div>
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
        box: {
          "font-family": "Palatino, serif"
        },
        branch: {},
        grid: {},
        timeline: {},
        boundaries: {},
        date: {},
        title: {},
        selected: {}
      },
      dateBreadth: {
<<<<<<< HEAD
        start: '82 BC',
        end: '27 BC'
      }
=======
        start: '1981',
        end: '1988'
      },
      mapUrl: 'https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg',
      center: [41.01649883461313, 14.229094522985932]
>>>>>>> develop
    }
  }
}


 </script>

 <style lang="css" scoped>
   .all {
     font-family: Palatino, serif;
     color: #800000;
   }

   .map-container {
     margin: auto;
     padding: 0px;
   }
 </style>
