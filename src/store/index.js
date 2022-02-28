import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions/actions'
import firebase from '../database/firebaseInit';
import { actionTypes } from './actions/actionTypes';

Vue.use(Vuex);

console.log('FIREBASE', firebase)


let userID = '1tL91ObFEpRi9ZGoU6u7BZOXDHO2';

export default new Vuex.Store({
  state: {
    user: {id: 1, name: 'Roch Folly'},
    events: [],
    criterias: []
  },

  mutations: {
    INIT_EVENTS(state, value) {
      state.events = value
    },
    INIT_CRITERIAS(state, value) {
      state.criterias = value
    },
  },

  actions: {
    fetchEvents: function({ state, commit }) {
      firebase.database().ref(userID + '/events').once('value', (eventsData) => {
        // action.payload = {events: Object.values(eventsData.val())}
        console.log('EVENTS', eventsData.val());
        commit(actionTypes.INIT_EVENTS, eventsData.val()); 
      }, (error) => {
        console.log(error)
      })
    },

    fetchCriterias: function({ state, commit }) {
      firebase.database().ref(userID + '/criterias').once('value', (criteriasData) => {
        // action.payload = {events: Object.values(eventsData.val())}
        console.log('CRITERIAS', criteriasData.val());
        commit(actionTypes.INIT_CRITERIAS, criteriasData.val()); 
      }, (error) => {
        console.log(error)
      })
    }
  },

  getters: {
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    },
    getEventByName: state => name => {
      return state.events.find(event => event.event_name === name)
    },
    getCriteriaById: state => id => {
      return state.events.find(criteria => criteria.id === id)
    } 
  }
})