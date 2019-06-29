<template lang="html">
  <div class="map">
    <p>Map</p>
    <l-map :zoom="zoom" :center="center" ref="map">
   <l-tile-layer :url="url"></l-tile-layer>
   <l-marker v-if="index != null ":lat-lng="places[index]['coordinates']">
     <l-popup>
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
export default {
  name: "map-box",
  methods: {
    handleNextClick(){
      if ((this.index > -1) && (this.index < 2)){
          this.index ++
          this.$refs.map.mapObject.flyTo(this.places[this.index]['coordinates'], 10)
      }
    },
    handlePreviousClick(){
      if ((this.index > 0) && (this.index < 3)){
          this.index --
          this.$refs.map.mapObject.flyTo(this.places[this.index]['coordinates'], 10)
      }
    },
    beginJourney(){
      this.index = 0
      this.$refs.map.mapObject.flyTo(this.places[this.index]['coordinates'], 10)
    }
  },
  data(){
    return{
      zoom:4,
      center: L.latLng(47.413220, -1.219482),
      url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
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
  }
}
</script>

<style lang="css" scoped>

.map{
  height: 70vh;
  width: 70vw;
}

</style>
