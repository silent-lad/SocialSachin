<template>
  <div class="eraCard">
    <div class="era_head">
      <router-link to="/that"><i class="fas fa-angle-left"></i></router-link>
      <h1 class="era_title">His Era</h1>
      <router-link to="/this"><i class="fas fa-angle-right"></i></router-link>
    </div>
    <div class="era_body">
      <div class="era_panel_large">
        <h1 class="era_panel_large_title">
          Sachin Baap Again
        </h1>
        <div class="era_panel_large_content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima non
          ut suscipit consequatur, unde qui vel quod labore mollitia veniam
          dignissimos, vero ducimus deserunt quo expedita dolores eos quam
          provident, libero eum numquam! Ullam saepe, veniam, natus
          reprehenderit quae odit possimus impedit voluptatem, atque minima ea
          sint eaque perspiciatis fugiat?
        </div>
      </div>
      <div class="era_panel_chart">
        <div class="era_subject">
          <div class="era_subject_title">Sachin Baap</div>
          <div class="era_subject_content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima non
            ut suscipit consequatur, unde qui vel quod labore mollitia veniam
            dignissimos, vero ducimus deserunt quo expedita dolores eos quam
            provident, libero eum numquam! Ullam saepe, veniam, natus
            reprehenderit quae odit possimus impedit voluptatem, atque minima ea
            sint eaque perspiciatis fugiat?
          </div>
        </div>
        <div class="era_chart">
          <line-chart />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  LineChart,
  BarChart,
  RadarChart,
  PieChart
} from "@/components/ChartComponents";
export default {
  components: { LineChart, BarChart, RadarChart, PieChart }
};
</script>

<style>
.era_panel_large_title {
  text-shadow: 7px 7px 15px black;
  font-family: "Cinzel", serif;
  background: rgba(0, 0, 0, 0);
  width: 50%;
  margin: 0 auto 2% auto;
  font-size: 4vw;
  line-height: 100%;
  color: rgb(37, 62, 173);
}
.era_panel_large_content {
  width: 80%;
  margin: 0 auto;
  font-size: 1.5vw;
}
.era_panel_large {
  box-shadow: 10px 10px 10px black;
  margin: 5% auto;
  width: 80%;
  padding: 2%;
  background: #141820;
}
.era_chart {
  max-width: 55%;
  height: auto;
  box-shadow: 0px 2px 15px rgba(25, 25, 25, 0.27);
  margin: 5%;
}

.era_subject_title {
  text-shadow: 7px 7px 15px black;
  font-family: "Cinzel", serif;
  margin: 5% 0;
  font-size: 4vw;
  line-height: 100%;
  color: rgb(173, 37, 82);
}
.era_subject {
  text-align: start;
  width: 50%;
  margin: 5%;
}

.era_subject_content {
  line-height: 100%;
  color: rgb(192, 192, 192);
  font-size: 20px;
}

.era_chart h2 {
  position: relative;
  margin-top: 0;
  padding: 15px;
  color: rgba(255, 0, 0, 0.5);
  border-bottom: 1px solid #323d54;
}
.era_panel_chart {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.era_body {
  display: block;
}
i {
  text-shadow: 7px 7px 15px black;
  font-family: "Cinzel", serif;
  font-size: 8vw;
  line-height: 40%;
  padding-top: 70%;
  color: rgb(255, 255, 255);
  transition: all 0.2s linear;
}
.fas:hover {
  transform: scale(1.2);
  color: darkred;
}
.era_head {
  margin-bottom: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.eraCard {
  width: 90%;
  margin: 0 auto 5% auto;
  background: #191d26;
  box-shadow: 20px 20px 10px rgba(128, 128, 128, 0.267);
}
.era_title {
  text-shadow: 7px 7px 15px black;
  font-family: "Cinzel", serif;
  font-size: 8vw;
  line-height: 40%;
  color: rgb(37, 80, 173);
}

@media screen and (max-width: 786px) {
  .era_subject_content {
    font-size: 10px;
  }
}
</style>
