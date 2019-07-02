<template lang="html">
  <div class="">
    <h1> Geo Storys</h1>
    <a href="">
      <button>Create Your Own</button>
    </a>
    <div class="images">

      <div class="image">
        <a href="http://localhost:8080/#/romestory">
        <img src="@/assets/images/roman.jpg" height="200px" width="350px">
        </a>
        <h2>Roman Empire</h2>
      </div>
      <div class="image">
        <a href="http://localhost:8080/#/ww2story">
        <img src="@/assets/images/ww2.jpg" height="200px" width="350px">
        </a>
        <h2>World War 2</h2>
      </div>
      <div class="image">
        <a href="http://localhost:8080/#/usastory">
        <img src="@/assets/images/civilwar.jpg" height="200px" width="350px">
        </a>
        <h2>American Civil War</h2>
      </div>

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

.images{
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
    background-position: 50% 50%;
    background-repeat:   no-repeat;
    background-size:     cover;
}

img{
  margin: 10px;
}
img:hover
	{
		-moz-box-shadow: 0 0 10px #ccc;
		-webkit-box-shadow: 0 0 10px #ccc;
		box-shadow: 0 0 10px #ccc;
    opacity: 0.3;
	}

</style>
