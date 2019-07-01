<template lang="html">
  <div>
<h2>{{event.location}}</h2>
<p>{{event.blurb}}</p>
<img :src="event.image"/>
</div>
</template>

<script>
export default {
name: "event-select",
data(){
  return {
    selectedEvent: null
  }
},
props: ['event'],
methods: {
  }
}
</script>

<style lang="css" scoped>
</style>
