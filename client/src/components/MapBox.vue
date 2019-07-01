<template lang="html">
  <div class="map">
    <l-map v-on:click="showCoordinates"  :zoom="zoom" :center="center" :attribution="attribution" ref="map">
   <l-tile-layer :url="mapUrl"></l-tile-layer>
   <l-marker v-if="index != null ":lat-lng="events[index]['coordinates']">
     <l-popup ref="popup" class="popup">
       <event :event ="events[this.index]" />
     </l-popup>
   </l-marker>
 </l-map>
 <button v-on:click="beginJourney">Begin</button>
 <button v-on:click="handlePreviousClick">Previous</button>
 <button v-on:click="handleNextClick">Next</button>

  </div>
</template>

<script>
import {eventBus} from '../main.js'
import Event from './Event.vue'

export default {
  name: "map-box",
  props: ["events", "mapUrl", "center"],
  methods: {
    showCoordinates(ev){
    console.log(ev['latlng']['lat'], ev['latlng']['lng']);
  },
    handleNextClick(){
      if ((this.index > -1) && (this.index + 1 < this.events.length )){
          this.index ++
          this.$refs.map.mapObject.flyTo(this.events[this.index]['coordinates'], 10)
          eventBus.$emit('new event selected', this.index)
      }
    },
    handlePreviousClick(){
      if ((this.index > 0) && (this.index < this.events.length)){
          this.index --
          this.$refs.map.mapObject.flyTo(this.events[this.index]['coordinates'], 10)
          eventBus.$emit('new event selected', this.index)
      }
    },
    beginJourney(){
      this.index = 0
      this.$refs.map.mapObject.flyTo(this.events[this.index]['coordinates'], 10)
      eventBus.$emit('new event selected', this.index)
      // this.$refs.map.mapObject.openPopup()
    },
    jumpToEvent(indexSelected){
      this.index = indexSelected
      this.$refs.map.mapObject.flyTo(this.events[this.index]['coordinates'], 10)
    }
  },
  data(){
    return{
      zoom:4,
      center: L.latLng(50.51342652633956, 13.0078125),
      url:'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(47.413220, -1.219482),
      index: null,
      map: null,
      places: [
        {
          "title": "London",
          "blurb": "Blah Blah Blah Blah",
          "coordinates": L.latLng(51.413220, -1.219482)
        },
        {
          "title": "France",
          "blurb": "Blah Blah Blah Blah",
          "coordinates": L.latLng(46.413220, -1.219482)
        },
        {
          "title": "Spain",
          "blurb": "Blah Blah Blah Blah",
          "coordinates": L.latLng(40.413220, -1.219482)
        }
      ]
    }
  },
  mounted(){
    eventBus.$on('event clicked', (payload) => {
      this.jumpToEvent(payload)
    })
  },
  components: {
    'event': Event
  }
}
</script>

<style lang="css" scoped>

.map{
  height: 60vh;
  width: 70vw;
  margin: auto;
  margin-bottom: 10px;
  padding-bottom: 20px;
  border: 1px solid black;
}

.popup{
  width: 300px;
height: 150px;
overflow: scroll;
}

</style>
