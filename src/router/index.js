import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home";
import Settings from "../views/Settings";
import EventPage from "../views/EventPage";


Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: "home",
      component: Home
    },
    {
      path: '/settings',
      name: "settings",
      component: Settings
    },
    {
      path: '/config',
      redirect: "settings",
    },
    {
      path: '/event/:id',
      name: "event",
      component: EventPage,
      props: true
    },
    // { path: '*', component: NotFound }
  ]
})