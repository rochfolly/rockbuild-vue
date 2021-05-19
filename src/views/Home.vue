<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul v-for="(day, index) in days" :key="index">
      <div class="tempDay">{{ day }}</div>
    </ul>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      days: [],
    }
  },
  created() {
    const currentDay = moment().isoWeekday();
    const nextDays = - currentDay + 7;
    console.table(currentDay, nextDays);
    for (let i = 1; i <= currentDay; i++) {
      this.days.unshift( moment().subtract(i-1, 'days').format('dddd, Do MMMM YYYY') )
    }
    for (let j = 1; j <= nextDays; j++) {
      this.days.push( moment().add(j, 'days').format('dddd, Do MMMM YYYY') )
    }
    console.table(this.days);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  display: inline;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.tempDay {
  border-radius: 50%;
  background-color: beige;
  width: 14%;
  height: 10vh;
}
</style>
