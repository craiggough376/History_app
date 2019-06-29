<template lang="html">
<div>
  <div class="grid">
    <div class="start-date">1980</div>
    <div class="end-date">1995</div>
    <div class="timeline"></div>
    <div class="episode1">1984: This happened</div>
    <div class="episode1branch"></div>
    <div class="episode2">1986: This other thing happened</div>
    <div class="episode2branch"></div>
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
  border: 1px solid blue;
}
.box {
  border: 2px solid black;
}
.start-date {
  grid-column: 1 / 3;
  grid-row: 6 / 7;
}
.end-date {
  grid-column: 49 / 51;
  grid-row: 6 / 7;
}
.timeline {
  border-bottom: 1px solid black;
  grid-column: 3 / 49;
  grid-row: 5 / 6;
}
.episode1{
  border: 1px solid black;
  grid-column: 2/8;
  grid-row: 2/4;
}
.episode1branch{
  border-right: 1px solid black;
  grid-column: 4/4;
  grid-row: 4/6;
}
.episode2{
  border: 1px solid black;
  grid-column: 12/18;
  grid-row: 2/4;
}
.episode2branch{
  border-right: 1px solid black;
  grid-column: 14/14;
  grid-row: 4/6;
}

</style>
