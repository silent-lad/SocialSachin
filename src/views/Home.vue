<template>
  <div class="home">
    <div class="hero">
      <img
        class="bg"
        style="z-index:-3;position:absolute;right:0;top:0;width:100vw;"
        src="@/assets/sachin.jpg"
        height="120%"
        alt=""
      />
      <img
        class="front"
        style="z-index:-1;position:absolute;right:0;top:0;width:100vw;"
        src="@/assets/sachin_cut.png"
        height="120%"
        alt=""
      />
      <h1 class="title heading_section">Sachin Tendulkar</h1>
    </div>
    <div class="content">
      <h1 class="vs">VS</h1>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
      <div class="front_page">
        <div class="era_body">
          <div class="era_panel_large">
            <h1 class="era_panel_large_title">
              Sachin Against Ponting
            </h1>
            <div class="era_panel_large_content">
              In the Sachin's era of cricket Ricky Ponting was the second name
              of batting domination. His aggreive, hard-hitting and dominant
              gameplay makes him Sachin's perfect contender for that era. Now
              let's compare these 2 and seek out the answer.
            </div>
          </div>
        </div>
      </div>
    </div>
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
.vs {
  text-shadow: 7px 7px 15px black;
  font-family: "Cinzel", serif;
  font-size: 8vw;
  line-height: 40%;
  color: rgb(216, 12, 12);
}
.front_page {
  background: ;
}
@keyframes jump {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1);
  }
}
.content {
  position: absolute;
  top: 120vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
img {
  object-fit: cover;
  /* object-position: 0 0; */
}

.heading_section {
  position: absolute;
  left: 0;
  width: 100%;
}

.title {
  /* color: #f30a0a; */
  font-size: 10vw;
  line-height: 40%;
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
  margin-bottom: 10%;
  padding: 0;
  text-align: center;
}
.bg {
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 1)),
    to(rgba(0, 0, 0, 0))
  );
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  animation: blur 2s linear;
  filter: blur(3px) grayscale(90%);
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
    filter: blur(3px) grayscale(90%);
  }
}
.fade-enter-active {
  animation: fade-enter 0.5s;
}
.fade-leave-active {
  animation: fade-enter 0.5s reverse;
}
@keyframes fade-enter {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

