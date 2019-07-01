<template lang="html">
<div>
  <div class="grid" :style="gridStyle">
    <div class="start-date">{{dateBreadth.start}}</div>
    <div class="end-date">{{dateBreadth.end}}</div>
    <div class="timeline"></div>
    <div v-for="(episode, index) in episodes" :class="'episode'+index" :style="styles[index]" v-on:click="handleClick(index)">
      <p>{{episode.date}}</p>
      <p>{{episode.title}}</p>
    </div>
    <div v-for="(episode, index) in episodes" :class="'episode'+index+'branch'" :style="branches[index]" style="">
    </div>
    <div class="test"></div>
  </div>
  <button v-on:click="handlePrevious">Previous</button>
  <button v-on:click="handleNext">Next</button>
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
      {date: 1986, title: "This happened in another time"},
      // {date: 1986, title: "This happened in another time"},
      // {date: 1986, title: "This happened in another time"},
      // {date: 1986, title: "This happened in another time"},
      // {date: 1986, title: "This happened in another time"},
      // {date: 1986, title: "This happened in another time"},
      // {date: 1986, title: "This happened in another time"},
      // {date: 1986, title: "This happened in another time"},
      // {date: 1986, title: "This happened in another time"},
      // {date: 1986, title: "This happened in another time"},
      // {date: 1986, title: "This happened in another time"},
    ],
    boxWidth: 8,
    boxGap: 1,
    selectedEpisode: 0,
    highlightColor: 'lightcyan',
    gridsize: 100,
    dateBreadth: {
      start: '1981',
      end: '1988'
    }
    }
  },
  computed: {
    gridStyle(){
      return {
        'grid-template-columns': 'repeat(' + this.gridsize + ', 1fr)'
      }
    },
    styles() {
      const noOfEpisodes = this.episodes.length
      console.log(noOfEpisodes)
      let episodeGap = Math.floor((this.gridsize + noOfEpisodes)/(noOfEpisodes))
      if(episodeGap <2){
        episodeGap = 2;
      }
      console.log(episodeGap)
      const stylesArray = []
      let startingColumn = 2
      let endingColumn = startingColumn + this.boxWidth
      for(let i=0; i < noOfEpisodes; i++){
        const baseStyle = {
          border: '1px solid black',
          'grid-column': '',
          'grid-row': '1/3',
          overflow: 'scroll',
          'box-shadow': '1px 1px black'
        }
        if(i == this.selectedEpisode){
          baseStyle['background-color'] = this.highlightColor
          baseStyle['box-shadow'] = '1px 1px navy'
          baseStyle['border-color'] = 'navy'
          baseStyle['font-weight'] = 'bold'
        }
        stylesArray.push(baseStyle);
        if(i % 2 == 1){
          stylesArray[i]['grid-row'] = '5/7'
        }
        stylesArray[i]['grid-column'] = startingColumn + '/' + endingColumn;
        startingColumn += (episodeGap -1);
        endingColumn += (episodeGap -1);
      }
      return stylesArray
    },
    branches() {
      const noOfEpisodes = this.episodes.length
      const episodeGap = Math.floor((this.gridsize + noOfEpisodes)/(noOfEpisodes))
      const stylesArray = []
      let column = 1 + this.boxWidth/2
      for(let i=0; i < this.episodes.length; i++){
        const baseStyle = {
          'border-right': '1px solid black',
          'grid-column': '',
          'grid-row': '3/4',
        }
        stylesArray.push(baseStyle);
        stylesArray[i]['grid-column'] = column + '/' + column;
        if(i % 2 == 1){
          stylesArray[i]['grid-row'] = '4/5'
        }
        column += (episodeGap -1);
      }
      return stylesArray
    }
  },
  methods: {
    handleNext() {
      if(this.selectedEpisode < this.episodes.length -1){
        this.selectedEpisode += 1
      }
    },
    handlePrevious() {
      if(this.selectedEpisode > 0){
        this.selectedEpisode -= 1
      }
    },
    handleClick(index) {
      this.selectedEpisode = index
    }
  }

}
</script>

<style lang="css" scoped>
.grid{
  display: grid;
  /* grid-template-columns: repeat(50, 1fr); */
  grid-template-rows: repeat(6, 1fr);
  margin: auto;
  height: 280px;
  width: 90%;
  border: 1px solid blue;
  padding: 10px;
  border-radius: 1em;
}
.box {
  border: 2px solid black;
}
.start-date {
  grid-column: 1 / 3;
  grid-row: 4 / 5;
}
.end-date {
  grid-column: 97 / 101;
  grid-row: 4 / 5;
}
.timeline {
  border-bottom: 3px dashed black;
  grid-column: 3 / 98;
  grid-row: 3 / 4;
}


/* .episodedown {
  border: 1px solid black;
  grid-column: 4/8;
  grid-row: 7/9;
  overflow: scroll;
} */

/* .episodedownbranch {
  border-right: 1px solid black;
  grid-column: 5/5;
  grid-row: 6/7

} */

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
