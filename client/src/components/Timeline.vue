<template lang="html">
<div>
  <div class="grid">
    <div class="start-date">1980</div>
    <div class="end-date">1995</div>
    <div class="timeline"></div>
    <div class="episode1">
      <p>{{episodes[0].date}}</p>
      <p>{{episodes[0].title}}</p>
    </div>
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
      episodes: [{date: 1984, title: "This happened in this time a long time ago in a galaxy far far away and over and over and over"}, {date: 1986, title: "This happened in another time"}]
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
  grid-column: 2/10;
  grid-row: 2/4;
  overflow: scroll;
}
.episode1branch{
  border-right: 1px solid black;
  grid-column: 5/5;
  grid-row: 4/6;
}
.episode2{
  border: 1px solid black;
  grid-column: 12/20;
  grid-row: 2/4;
}
.episode2branch{
  border-right: 1px solid black;
  grid-column: 14/14;
  grid-row: 4/6;
}
p{
  margin: 0px;
}

</style>
