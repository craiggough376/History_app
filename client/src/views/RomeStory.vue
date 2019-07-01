<template lang="html">
<h1>The Roman Empire</h1>
</template>

<script>
export default {
  props: ["events"],
  computed: {
    filtererdEvents(){
    const results =  this.events.filter((event) => {
      return event.tag == "Rome"
    })
    return results
    }
  }
}


 </script>

 <style lang="css" scoped>
 </style>
