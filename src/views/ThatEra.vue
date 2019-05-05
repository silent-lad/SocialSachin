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
          Sachin Against Don Bradman
        </h1>
        <div class="era_panel_large_content">
          The most awaited and the most difficult comparison of this whole
          project was this one.
          <span class="highlighted_red"
            >You can compare players but you can't compare GODS.</span
          >
          Scroll down to find the answers.
        </div>
      </div>
      <div class="era_panel_chart era_panel_large">
        <div class="era_subject">
          <div class="era_subject_title">At a glance.</div>
          <div class="era_subject_content">
            We take a look at Sachin's and Donald's player stats comparing only
            Test Cricket as Bradman never played ODI<br />
            <span class="highlighted_red">And the Titan Falls...</span>
            Their are many factors why Sachin or as a matter of fact any
            cicketer is nowhere near
            <span class="highlighted_red">9,9,9,4</span>
          </div>
        </div>
        <div class="era_chart era_panel_large">
          <bar-chart :chartdata="data.sachinVsKohli205" />
        </div>
      </div>
      <div class="era_panel_chart era_panel_large">
        <h1 class="era_panel_large_title">
          The Legend...
        </h1>
        <div class="era_panel_large_content">
          It seems to be an impossible feat to achieve what Donald achieved in
          the field.The legend although is supplemented and or fabricated by
          many factors let's have a look.
          <br />
        </div>
      </div>
      <div class="era_panel_chart era_panel_large">
        <div class="era_chart">
          <bar-chart :chartdata="data.sachinVsKohliNormalised" />
        </div>
        <div class="era_subject">
          <div class="era_subject_title">Changing the scale.</div>
          <div class="era_subject_content">
            The story changed when we tak a look at normalised scores.<br />
            <span class="highlighted_red"
              >Sachin leads Virat in almost every parameter and considering that
              Sachin debuted at the age of 16 and Virat was Under-19 captain
              before his first ODI</span
            >
            we can see a look of
            <span class="highlighted_red">Sachin's Godliness</span> already.
          </div>
        </div>
      </div>
      <div class="era_panel_chart era_panel_large">
        <div class="era_subject">
          <div class="era_subject_title">Bradman Vs Bradman</div>
          <div class="era_subject_content">
            Every batsmen has a major role in letting his team to win titles and
            trophies. A player's performane in torunaments knockout phases tells
            us <br />
            <span class="highlighted_red">how well they handle pressure.</span>
            Let's take a look at Sachin Vs Virat stats in
            <span class="highlighted_red">Tournament Knockouts</span>
          </div>
        </div>
        <div class="era_chart">
          <line-chart :chartdata="data.sachinVsViratRadar" />
        </div>
      </div>
    </div>
    <div class="era_head">
      <router-link to="/this"><i class="fas fa-angle-left"></i></router-link>
      <h1 class="era_title">That Era</h1>
      <router-link to="/"><i class="fas fa-angle-right"></i></router-link>
    </div>
  </div>
</template>

<script>
import data from "@/assets/data.json";
import {
  LineChart,
  BarChart,
  RadarChart,
  PieChart
} from "@/components/ChartComponents";
export default {
  data: function() {
    return {
      data
    };
  },
  components: { LineChart, BarChart, RadarChart, PieChart }
};
</script>

<style>
</style>
