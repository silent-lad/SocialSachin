<template>
  <div class="eraCard">
    <div class="era_head">
      <router-link to="/that"><i class="fas fa-angle-left"></i></router-link>
      <h1 class="era_title">His Era</h1>
      <router-link to="/this"><i class="fas fa-angle-right"></i></router-link>
    </div>
    <div class="era_body">
      <div class="era_panel">
        <div class="era_subject">
          <div class="era_subject_title">Sachin Baap</div>
          <div class="era_subject_content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos alias
            modi delectus ab ad ipsa odit vitae nam corrupti distinctio!
          </div>
        </div>
        <div class="Chart">
          <h2>Linechart</h2>
          <line-chart />
        </div>
      </div>
      <div class="era_panel">
        <div class="Chart">
          <h2>Linechart</h2>
          <radar-chart />
        </div>
      </div>
      <div class="era_panel">
        <div class="Chart">
          <h2>Linechart</h2>
          <pie-chart />
        </div>
      </div>
      <div class="era_panel">
        <div class="Chart">
          <h2>Linechart</h2>
          <bar-chart />
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
.Chart {
  max-width: 600px;
  box-shadow: 0px 2px 15px rgba(25, 25, 25, 0.27);
}

.Chart h2 {
  position: relative;
  margin-top: 0;
  padding: 15px;
  color: rgba(255, 0, 0, 0.5);
  border-bottom: 1px solid #323d54;
}
.era_panel {
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
}
.era_head {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.eraCard {
  height: 50vh;
  width: 90%;
  margin: 0 auto;
  background: #191d26;
  box-shadow: 20px 20px 10px grey;
}
.era_title {
  text-shadow: 7px 7px 15px black;
  font-family: "Cinzel", serif;
  font-size: 8vw;
  line-height: 40%;
  color: rgb(37, 80, 173);
}
</style>
