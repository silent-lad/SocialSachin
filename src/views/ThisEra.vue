<template>
  <div class="eraCard">
    <div class="era_head">
      <router-link to="/"><i class="fas fa-angle-left"></i></router-link>
      <h1 class="era_title">This Era</h1>
      <router-link to="/that"><i class="fas fa-angle-right"></i></router-link>
    </div>
    <div class="era_body">
      <div class="era_panel_large">
        <h1 class="era_panel_large_title">
          Sachin Against Kohli
        </h1>
        <div class="era_panel_large_content">
          In the Present era of cricket Virat Kohli is the perfect contender to
          challenge the God Of Cricket. So we'll analyse his records and stats
          with that of Sachin's.Lets' See what we find out. To be fair to Virat
          we will only compare first 205 innings of Sachin with the 205 innings
          of Virat Kohli as doing the contrary might defeat Virat by cheating of
          time shortage.
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
</style>
