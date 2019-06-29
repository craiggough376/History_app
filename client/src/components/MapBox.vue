<template lang="html">
  <div class="map">
    <p>Map</p>
    <l-map :zoom="zoom" :center="center">
   <l-tile-layer :url="url"></l-tile-layer>
   <l-marker :lat-lng="places[index]['coordinates']">
     <l-popup>
       <h1>{{places[index]['title']}}</h1>
       <p>{{places[index]['blurb']}}</p>
     </l-popup>
   </l-marker>
 </l-map>
 <button v-on:click="handleClick">Next Place</button>
  </div>
</template>

<script>
export default {
  name: "map-box",
  methods: {
    handleClick(){
      this.index += 1
    }
  },
  data(){
    return{
      zoom:4,
      center: L.latLng(47.413220, -1.219482),
      url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      marker: L.latLng(47.413220, -1.219482),
      index: 0,
      places: [
        {
          "title": "London",
          "blurb": "Blah Blah Blah Blah",
          "coordinates": L.latLng(51.413220, -1.219482)
        },
        {
          "title": "France",
          "blurb": "Blah Blah Blah Blah",
          "coordinates": L.latLng(47.413220, -1.219482)
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
