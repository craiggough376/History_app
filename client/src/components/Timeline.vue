<template lang="html">
<div>
  <div class="grid">
    <div class="start-date">1980</div>
    <div class="end-date">1995</div>
    <div class="timeline"></div>
    <div class="episode0branch"></div>
    <div class="episode1branch"></div>
    <div v-for="(episode, index) in episodes" :class="'episode'+index" :style="styles[index]">
      <p>{{episode.date}}</p>
      <p>{{episode.title}}</p>
    </div>
    <div v-for="(episode, index) in episodes" :class="'episode'+index+'branch'" :style="branches[index]">
    </div>
    <div class="episodexbranch"></div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      episodes: [
        {date: 1984, title: "This happened in this time a long time ago in a galaxy far far away and over and over and over"},
      {date: 1986, title: "This happened in another time"},
      {date: 1986, title: "This happened in another time"},
      {date: 1986, title: "This happened in another time"},
      {date: 1986, title: "This happened in another time"},
      {date: 1986, title: "This happened in another time"},
      {date: 1986, title: "This happened in another time"},
      {date: 1986, title: "This happened in another time"},
    ],
    boxWidth: 4,
    boxGap: 1
    }
  },
  computed: {
    // styles() {
    //   const stylesArray = []
    //   let startingColumn = 2
    //   let endingColumn = startingColumn + this.boxWidth
    //   for(let i=0; i < this.episodes.length; i++){
    //     const baseStyle = {
    //       border: '1px solid black',
    //       'grid-column': '',
    //       'grid-row': '3/5',
    //       overflow: 'scroll',
    //     }
    //     stylesArray.push(baseStyle);
    //     stylesArray[i]['grid-column'] = startingColumn + '/' + endingColumn;
    //     startingColumn += (1 + this.boxWidth);
    //     endingColumn += (1 + this.boxWidth);
    //   }
    //   return stylesArray
    // },
    styles() {
      const noOfEpisodes = this.episodes.length
      const episodeGap = Math.floor(43/(noOfEpisodes))
      const stylesArray = []
      let startingColumn = 2
      let endingColumn = startingColumn + this.boxWidth
      for(let i=0; i < noOfEpisodes; i++){
        const baseStyle = {
          border: '1px solid black',
          'grid-column': '',
          'grid-row': '3/5',
          overflow: 'scroll',
        }
        stylesArray.push(baseStyle);
        stylesArray[i]['grid-column'] = startingColumn + '/' + endingColumn;
        startingColumn += (1 + episodeGap);
        endingColumn += (1 + episodeGap);
      }
      return stylesArray
    },
    branches() {
      const noOfEpisodes = this.episodes.length
      const episodeGap = Math.floor(43/(noOfEpisodes))
      const stylesArray = []
      let column = 1 + this.boxWidth/2
      for(let i=0; i < this.episodes.length; i++){
        const baseStyle = {
          'border-right': '1px solid black',
          'grid-column': '',
          'grid-row': '5/6',
        }
        stylesArray.push(baseStyle);
        stylesArray[i]['grid-column'] = column + '/' + column;
        column += (1 + episodeGap);
      }
      return stylesArray
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
/* .episode0{
  border: 1px solid black;
  grid-column: 2/10;
  grid-row: 2/4;
  overflow: scroll;
} */
/* .episode0branch{
  border-right: 1px solid black;
  grid-column: 5/5;
  grid-row: 4/6;
} */
/* .episode1{
  border: 1px solid black;
  grid-column: 12/20;
  grid-row: 2/4;
} */
/* .episodexbranch{
  border-right: 1px solid black;
  grid-column: 47/47;
  grid-row: 5/6;
} */
p{
  margin: 0px;
}

</style>
