<template>
  <div class="home">
    <img
      class="bg"
      style="z-index:-3;position:absolute;right:0;top:0;width:100vw;height:100vh;"
      src="@/assets/sachin.jpg"
      height="100%"
      alt=""
    />
    <img
      class="front"
      style="z-index:-1;position:absolute;right:0;top:0;width:100vw;height:100vh;"
      src="@/assets/sachin_cut.png"
      height="100%"
      alt=""
    />
    <h1 class="title heading_section">Sachin Tendulkar</h1>
  </div>
</template>

<script>
import sachin from "raw-loader!../assets/sachin.csv";
import { csvCleaner } from "@/assets/helper.js";

export default {
  name: "home",
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
@import url("https://fonts.googleapis.com/css?family=Cinzel");
body {
  margin: 0;
  background: grey;
}
.home {
  width: 100vw;
  overflow: hidden;
}
.heading_section {
  position: absolute;
  left: 0;
  width: 100%;
}
.title,
.subtitle {
  font-family: "Acme", sans-serif;
  font-size: 10vw;
  line-height: 40%;
}
.title {
  /* color: #f30a0a; */
  color: black;
  opacity: 1;
  font-family: "Cinzel", serif;
  z-index: -2;
  bottom: 32vh;
  animation: appear 1s linear;
}
.subtitle {
  color: #f34c0a;
  bottom: 0vh;
}
.home {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  text-align: center;
}
.bg {
  animation: blur 2s linear;
  filter: blur(1px) grayscale(90%);
}
.front {
  width: auto;
  animation: scaleUp 2s linear;
  transform: scale(1.02);
}
@keyframes appear {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.8;
  }
}
@keyframes scaleUp {
  0% {
    z-index: -3;
    transform: scale(1);
  }
  50% {
    z-index: -3;
    transform: scale(1);
  }
  100% {
    z-index: -1;
    transform: scale(1.02);
  }
}
@keyframes blur {
  0% {
    filter: blur(0px) grayscale(0%);
  }
  50% {
    filter: blur(0px) grayscale(0%);
  }
  100% {
    filter: blur(1px) grayscale(90%);
  }
}
</style>

