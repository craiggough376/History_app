<template lang="html">
  <div>
<h3>{{event.title}}</h3>
<img :src="event.image"/>
<p>{{event.blurb}}</p>
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
  li {
    list-style-type: none;
  }
</style>
