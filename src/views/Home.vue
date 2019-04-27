<template>
  <div class="home">
    <img
      class="bg"
      style="position:absolute;right:0;top:0;width:100vw;height:100vh;"
      src="@/assets/sachin.jpg"
      height="100%"
      alt=""
    />
    <img
      class="front"
      style="position:absolute;right:0;top:0;width:100vw;height:100vh;"
      src="@/assets/sachin_cut.png"
      height="100%"
      alt=""
    />
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
<style>
body {
  margin: 0;
}
.home {
  background: #d4b00f;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}
.bg {
  animation: blur 2s linear;
  filter: blur(10px) sepia(90%);
}
.front {
  width: auto;
  animation: scaleUp 2s linear;
  transform: scale(1.1);
}
@keyframes scaleUp {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}
@keyframes blur {
  from {
    filter: blur(0px) sepia(0%);
  }
  to {
    filter: blur(10px) sepia(90%);
  }
}
</style>

