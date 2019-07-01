<template lang="html">
  <h1>World War 2</h1>

</template>

<script>
export default {
  props: ["events"],
  computed: {
    filteredEvents(){
      const results = this.events.filter((event) => {
        return event.tag == "WW2"
      })
      return results
    }
  }
}
</script>

<style lang="css" scoped>
</style>
