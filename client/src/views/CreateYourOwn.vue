<template lang="html">
  <div>
<form class="" v-on:submit.prevent="handleSubmit">
  <label for="title">Event:</label>
  <input id="title" type="text" name="" v-model="title" required>
  <label for="date">Date:</label>
  <input id="date" type="text" name="" v-model="date" required>
  <input type="submit" name="" value="Add Event">
</form>
<div class="events-list">
  <div v-for="episode in episodes">
    {{episode.title}}
  </div>
</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      date: "",
      episodes: []
    }
  },
  methods: {
    handleSubmit() {

    }
  }
}
</script>

<style lang="css" scoped>
</style>
