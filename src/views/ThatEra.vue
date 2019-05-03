<template>
  <div class="eraCard">
    <div class="era_head">
      <router-link to="/this"><i class="fas fa-angle-left"></i></router-link>
      <h1 class="era_title">That Era</h1>
      <router-link to="/"><i class="fas fa-angle-right"></i></router-link>
    </div>
    <div class="era_body">
      <div class="era_panel_large">
        <h1 class="era_panel_large_title">
          Sachin Vs Viv Richards
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
</style>
