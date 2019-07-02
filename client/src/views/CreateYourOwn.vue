<template lang="html">
  <div>
<form class="" v-on:submit.prevent="handleSubmit" type="post">
  <label for="title">Event:</label>
  <input id="title" type="text" name="" v-model="title" required>
  <label for="date">Date:</label>
  <input id="date" type="text" name="" v-model="date" required>
  <input type="submit" name="" value="Add Event">
</form>
<timeline selectedEpisode="selectedEpisode" :events="episodes" :inheritedStyle="inheritedStyle" :boxWidth="boxWidth" :dateBreadth="dateBreadth"/>
<map-box :selectedEpisode="selectedEpisode" :events="filteredEvents" :mapUrl="mapUrl" :center="center"/>
</div>
</template>

<script>
import Timeline from '@/components/Timeline'
export default {
  data() {
    return {
      title: "",
      date: "",
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
        selected: {}
      },
      dateBreadth: {
        start: '',
        end: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      console.log('form submitted')
      this.episodes.push(
        {
          title: this.title,
          date: this.date
        }
      )
      this.dateBreadth.end = this.date
      if(this.episodes.length == 1){
        this.dateBreadth.start = this.date
      }
    }
  },
  components: {
    "timeline": Timeline
  },
}
</script>

<style lang="css" scoped>
</style>
