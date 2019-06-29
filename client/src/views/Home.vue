<template lang="html">
  <div class="">
      <map-box></map-box>
  </div>
</template>

<script>

import MapBox from '@/components/MapBox.vue';

export default {
  name: 'home',
  components: {
    "map-box": MapBox
  }
}
</script>

<style lang="css" scoped>
</style>
