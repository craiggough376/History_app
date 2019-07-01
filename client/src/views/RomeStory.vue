<template lang="html">
  <div>
<h1>The Roman Empire</h1>
<map-box />
<timeline />
</div>
</template>

<script>
import Timeline from '@/components/Timeline.vue'
import MapBox from '@/components/MapBox.vue'

export default {
  props: ["events"],
  computed: {
    filtererdEvents(){
    const results =  this.events.filter((event) => {
      return event.tag == "Rome"
    })
    return results
    }
  },
  components: {
    "timeline": Timeline,
    "map-box": MapBox
  }
}


 </script>

 <style lang="css" scoped>
 </style>
