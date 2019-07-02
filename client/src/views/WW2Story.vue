<template lang="html">
  <div class="body">
  <h1>World War 2</h1>
    <div class="top-half">
        <div class="text-box">
        <event :event="filteredEvents[selectedEpisode]"/>
        </div>
      <map-box :selectedEpisode="selectedEpisode" :events="filteredEvents" :mapUrl="mapUrl" :center="center"/>
    </div>
  <timeline :selectedEpisode="selectedEpisode" :events="filteredEvents" :inheritedStyle="inheritedStyle" :boxWidth="boxWidth" :dateBreadth="dateBreadth"/>
</div>
</template>

<script>
import Timeline from '@/components/Timeline.vue'
import MapBox from '@/components/MapBox.vue'
import Event from '@/components/Event.vue'

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
    "map-box": MapBox,
    'event': Event
  },
  data() {
    return {
      boxWidth: 8,
      inheritedStyle: {
        box: {
          'background-color': '',
        },
        branch: {

        },
        grid: {
          'background-color': '',
        },
        timeline: {

        },
        boundaries: {

        },
        date: {},
        title: {},
        selected: {

        }
      },
      dateBreadth: {
        start: '1939',
        end: '1945'
      },
      mapUrl: 'https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png',
      center: [50.51342652633956, 13.0078125]
      // mapUrl: 'https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png'
    }
  }
}
</script>

<style lang="css" scoped>

.body{
    background-color: ;
    margin: 0px;
    color: #969696;
}
h1{
  margin-top: 0px;
}

.top-half{
  display: flex;
  justify-content: flex-start;
}

.text-box{
  width: 30vw;
  height: 40vh;
  overflow: scroll;
  border-width: medium;
  border-style: solid;
  margin: 10px;
}
</style>
