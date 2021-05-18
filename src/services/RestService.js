import axios from 'axios';

const restClient = axios.create({
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  getEvents() {
    return restClient.get('/events')
  },

  get(url){
    return restClient.get(url)
  }
}