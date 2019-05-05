import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

import VueScrollReveal from "vue-scroll-reveal";

// Using ScrollReveal's default configuration
Vue.use(VueScrollReveal);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
