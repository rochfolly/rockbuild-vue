<template>
  <div>
    <h1>{{ msg }}</h1>
    <div style="width: 100%" class="daysContainer">
      <ul >
          <div v-for="(day, index) in days" :key="index" class="tempDay">{{ day }}</div>
      </ul>
    </div>
    <div>
      <ul>
        <event-card  v-for="(event, index) in events" :key="index" :title="event.event_title"></event-card>
      </ul>
      {{ events }}
      {{ criterias }}
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import actions from '../store/actions/actions';
import { mapState, mapGetters } from 'vuex';
import EventCard from '../components/EventCard.vue'

export default {
  components: { EventCard },
  name: 'Home',
  props: {
    msg: String
  },

  data() {
    return {
      days: [],
    }
  },

  computed: {
    ...mapGetters(['getEventById', 'getEventByName', 'getCriteriaById']),
    ...mapState(['events' , 'criterias'])
  },

  created() {
    this.$store.dispatch('fetchEvents');
    this.$store.dispatch('fetchCriterias');
    const currentDay = moment().isoWeekday();
    const nextDays = - currentDay + 7;
    // console.table(currentDay, nextDays);
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
.daysContainer {
  float: left;
}
.tempDay {
  border-radius: 10%;
  background-color: beige;
  /* width: 14%; */
  height: 50vh;
}
</style>
