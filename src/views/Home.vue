<template>
  <div class="home">
    <img width="200px;" alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import sachin from "raw-loader!../assets/sachin.csv";
import { csvCleaner } from "@/assets/helper.js";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data: function() {
    return {
      sachin,
      sachinJson: []
    };
  },
  created() {
    this.sachinJson = csvCleaner(sachin);
  }
};
</script>
