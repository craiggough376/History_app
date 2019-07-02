<template lang="html">
  <div class="body">
    <h1> Maps of History</h1>
    <div class="images">
        <div class="image1">
          <a href="http://localhost:8080/#/romestory">
          <img src="@/assets/images/roman.jpg" height="200px" width="300px">
          </a>
          <h2>Roman Empire</h2>
        </div>
        <div class="image2">
          <a href="http://localhost:8080/#/ww2story">
          <img src="@/assets/images/ww22.jpg" height="200px" width="300px">
          </a>
          <h2>World War 2</h2>
        </div>
        <div class="image3">
          <a href="http://localhost:8080/#/usastory">
          <img src="@/assets/images/civilwar.jpg" height="200px" width="300px">
          </a>
          <h2>American Civil War</h2>
        </div>
    </div>
    <div class="create-button">
          <p>Choose your journey or create your own</p>
        <a href="http://localhost:8080/#/createyourown">
          <button>Create Your Own</button>
        </a>
    </div>
      <router-view id="view" :events="events"></router-view>
    </div>
</template>

<script>

import Event from '@/components/Event.vue'

export default {
  props: ['events'],
  components: {
  }
}
</script>

<style lang="css" scoped>


.body{
  /* background-color: darkgrey; */
  /* background-image: url('../assets/images/map.jpg'); */
  font-family: New Century Schoolbook, TeX Gyre Schola, serif;
}

h1{
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 3.5em;
}
p{
  font-size: 1.5em;
}

.image1{
  font-family: 'Palatino', serif;
  color: #E6AF2E;
  background-color: #4A001F;
  width: 33vw;
  text-decoration: none;
}
.image2{
  /* background-image: url('../assets/images/homecamo.jpg'); */
  background-color: #A3B18A;
  font-family: American Typewriter, serif;
  color: black;
  width: 33vw;
}
.image3{
  background-image:url(https://chainimage.com/images/old-paper-background-photo-background-1-jpg.jpg);
  width: 33vw;
}

.images{
  display: flex;
  justify-content: center;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
}

button{
  background-color: grey;
   border: none;
   color: white;
   padding: 15px 32px;
   text-align: center;
   text-decoration: none;
   display: inline-block;
   font-size: 16px;
   border-radius: 5px;
}
button:hover{
  background-color: darkgrey;
   border: none;
   color: white;
}

img{
  margin: 10px;
  border-radius: 15px;
}
img:hover
	{
	-moz-box-shadow: 0 0 10px #ccc;
	-webkit-box-shadow: 0 0 10px #ccc;
	box-shadow: 0 0 10px #ccc;
  opacity: 0.8;
}

</style>
