import firebase from '../../database/firebaseInit';
import { actionTypes }  from './actionTypes';

let userID = '1tL91ObFEpRi9ZGoU6u7BZOXDHO2';

export const actions = {
  fetchEvents: function({ state, commit }) {
    firebase.database().ref(userID + '/events').once('value', (eventsData) => {
      // action.payload = {events: Object.values(eventsData.val())}
      console.log('EVENTS', eventsData.val());
      commit(actionTypes.INIT_EVENTS, eventsData.val());
    }, (error) => {
      console.log(error)
    })
  }
}