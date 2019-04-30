import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

import ThisEra from "@/views/ThisEra.vue";
import ThatEra from "@/views/ThatEra.vue";
import HisEra from "@/views/HisEra.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "hisera",
      component: HisEra
    },
    {
      path: "/this",
      name: "thisera",
      component: ThisEra
    },
    {
      path: "/that",
      name: "thatera",
      component: ThatEra
    }
  ]
});
