<template lang="html">
  <h1>The Civil War</h1>

</template>

<script>
export default {
  props: ["events"],
  computed: {
    filteredEvents(){
      const results = this.events.filter((event) => {
        return event.tag == "Civil War"
      })
      return results
    }
  }
}
</script>

<style lang="css" scoped>
</style>
