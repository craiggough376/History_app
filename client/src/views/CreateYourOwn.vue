<template lang="html">
  <div class="all">
<form v-if="formOn" class="" v-on:submit.prevent="handleSubmit" type="post">
  <label for="title">Event:</label>
  <input id="title" type="text" name="" v-model="title" required>
  <label for="date">Date:</label>
  <input id="date" type="text" name="" v-model="date" required>
  <input id="coordinates" type="text" v-model="coordinates" required>
  <input type="submit" name="" value="Add Event">
</form>
<button v-if="formOn" v-on:click="handleFinish" type="button" name="button">Finished</button>
<event v-if="!(formOn)" :event="episodes[selectedEpisode]"/>
<timeline selectedEpisode="selectedEpisode" :events="episodes" :inheritedStyle="inheritedStyle" :boxWidth="boxWidth" :dateBreadth="dateBreadth"/>
<map-box :selectedEpisode="selectedEpisode" :events="episodes" :mapUrl="mapUrl" :center="center"/>
</div>
</template>

<script>
import Timeline from '@/components/Timeline'
import MapBox from '@/components/MapBox'
import Event from '@/components/Event'
import {eventBus} from '../main.js'

export default {
  data() {
    return {
      formOn: true,
      title: "",
      date: "",
      coordinates: "",
      episodes: [],
      boxWidth: 8,
      inheritedStyle: {
        box: {},
        branch: {},
        grid: {},
        timeline: {},
        boundaries: {},
        date: {},
        title: {},
        selected: {
          "font-weight": "bold",
        }
      },
      dateBreadth: {
        start: '',
        end: ''
      },
      mapUrl: 'https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png',
      center: [50.51342652633956, 13.0078125]
    }
  },
  mounted() {
    eventBus.$on('map clicked', (payload) => {
      this.coordinates = payload;
    })
  },
  methods: {
    handleSubmit() {
      console.log('form submitted')
      this.episodes.push(
        {
          title: this.title,
          date: this.date,
          coordinates: this.coordinates
        }
      )
      this.dateBreadth.end = this.date
      if(this.episodes.length == 1){
        this.dateBreadth.start = this.date
      }
    },
    handleFinish() {
      console.log('finished')
      this.formOn = false;
    }
  },
  components: {
    "timeline": Timeline,
    "event": Event,
    "map-box": MapBox
  },
  props: ['selectedEpisode']
}
</script>

<style lang="css" scoped>
</style>
