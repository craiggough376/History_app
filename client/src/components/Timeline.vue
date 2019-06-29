<template lang="html">
<div>
  <div class="grid">
    <div class="timeline">
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      numbers: [0, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4
      ]
    }
  }
}
</script>

<style lang="css" scoped>
.grid{
  display: grid;
  grid-template-columns: repeat(50, 1fr);
  grid-template-rows: repeat(10, 1fr);
  height: 500px;
  width: 100%;
}
.box {
  border: 2px solid black;
}
.timeline {
  border-bottom: 1px solid black;
  grid-column: 1 / 50;
  grid-row: 4 / 5;
}
</style>
