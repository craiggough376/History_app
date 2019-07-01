<template lang="html">
  <div class="map">
    <l-map v-on:click="showCoordinates"  :zoom="zoom" :center="center" :attribution="attribution" ref="map">
   <l-tile-layer :url="url"></l-tile-layer>
   <l-marker v-if="index != null ":lat-lng="places[index]['coordinates']">
     <l-popup ref="popup" class="popup">
       <h1>{{places[index]['title']}}</h1>
       <p>{{places[index]['blurb']}}</p>
     </l-popup>
   </l-marker>
 </l-map>
 <button v-on:click="beginJourney">Begin</button>
 <button v-on:click="handleNextClick">Next</button>
 <button v-on:click="handlePreviousClick">Previous</button>
  </div>
</template>

<script>
import {eventBus} from '../main.js'

export default {
  name: "map-box",
  methods: {
    showCoordinates(ev){
    console.log(ev['latlng']['lat'], ev['latlng']['lng']);
  },
    handleNextClick(){
      if ((this.index > -1) && (this.index + 1 < this.places.length )){
          this.index ++
          this.$refs.map.mapObject.flyTo(this.places[this.index]['coordinates'], 10)
          eventBus.$emit('new event selected', this.index)
      }
    },
    handlePreviousClick(){
      if ((this.index > 0) && (this.index < this.places.length)){
          this.index --
          this.$refs.map.mapObject.flyTo(this.places[this.index]['coordinates'], 10)
          eventBus.$emit('new event selected', this.index)
      }
    },
    beginJourney(){
      this.index = 0
      this.$refs.map.mapObject.flyTo(this.places[this.index]['coordinates'], 10)
      eventBus.$emit('new event selected', this.index)
      // this.$refs.map.mapObject.openPopup()
    },
    jumpToEvent(indexSelected){
      this.index = indexSelected
      this.$refs.map.mapObject.flyTo(this.places[this.index]['coordinates'], 10)
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
  }
}
</script>

<style lang="css" scoped>

.map{
  height: 60vh;
  width: 70vw;
  margin: auto;
  margin-bottom: 30px
}

.popup{
  width: 300px;
height: 150px;
overflow: scroll;
}

</style>
