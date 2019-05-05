<template>
  <div class="eraCard">
    <div class="era_head">
      <router-link to="/this"><i class="fas fa-angle-left"></i></router-link>
      <h1 class="era_title">That Era</h1>
      <router-link to="/"><i class="fas fa-angle-right"></i></router-link>
    </div>
    <div class="era_body">
      <div class="era_panel_large" v-scroll-reveal.reset>
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
      <div class="era_panel_chart era_panel_large" v-scroll-reveal.reset>
        <div class="era_subject">
          <div class="era_subject_title">At a glance.</div>
          <div class="era_subject_content">
            We take a look at Sachin's and Donald's player stats comparing only
            Test Cricket as Bradman never played ODI<br />
            We see Bradman's the
            <span class="highlighted_red">99.94</span> average. But we also see
            Sachin's consistency of form and longevity. Which is something
            Bradman didn't had to show due to the condition of cricket at that
            time.
          </div>
        </div>
        <div class="era_chart">
          <bar-chart :chartdata="data.sachinVsBradman" />
        </div>
      </div>
      <div class="era_panel_chart era_panel_large" v-scroll-reveal.reset>
        <div class="era_chart">
          <bar-chart :chartdata="data.sachinVsBradmanLongevity" />
        </div>
        <div class="era_subject">
          <div class="era_subject_title">Sachin's playing conditions</div>
          <div class="era_subject_content">
            This reflects some more information. Cricket at that time was an
            amateur game
            <span class="highlighted_red"> matches per year were very low</span
            >. Unlike now, but we can still see that sachin was consistent over
            his 22 year old career comparing to bradman's 14 year one.<br />
            <span class="highlighted_red">Bowling</span> if taken into
            consideration tilts the scale towards Sachin. <br />Also Sachin had
            to play with
            <span class="highlighted_red">
              more number of teams over a very large span of time.</span
            >
            There was something or someone new coming up every time. So doing
            what Sachin did in those conditions is comendable.
          </div>
        </div>
      </div>
      <div class="era_panel_chart era_panel_large" v-scroll-reveal.reset>
        <h1 class="era_panel_large_title">
          The Legend...
        </h1>
        <div class="era_panel_large_content">
          <span class="highlighted_red">Sir Donald Bradman</span>
          was a exceptional batsman and what he achieve was something even
          Sachin couldn't. So it was a tie. And we may accept that there can be
          multiple Gods.
          <br /><br />
          <span class="highlighted_red">99.94</span>
          <br />
        </div>
      </div>
      <!-- <div class="era_panel_chart era_panel_large">
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
      </div> -->
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
