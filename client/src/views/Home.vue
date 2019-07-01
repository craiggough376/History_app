<template lang="html">
  <div class="">
    <h1> War what is it good for? </h1>
    <br>

      <Event :event="events[0]"></Event>
      <router-view id="view" :events="events"></router-view>
    </div>
</template>

<script>

import Event from '@/components/Event.vue'

export default {
  props: ['events'],
  components: {
    Event
  }
}
</script>

<style lang="css" scoped>
</style>
