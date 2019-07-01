<template lang="html">
  <div class="">
    <h1> War what is it good for? </h1>
    <br>
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
</style>
