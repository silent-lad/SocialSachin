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
      <div class="era_panel_chart era_panel_large">
        <div class="era_subject">
          <div class="era_subject_title">At a glance.</div>
          <div class="era_subject_content">
            We take a look at Sachin's and Virat's player stats with the above
            stated constraints in this bar chart.<br />
            We see a clear win for Virat Kohli here in terms of almost every
            parameter we can judge him on.
            <span class="highlighted_red"
              >Interestingly Sachin still scored more of the team's total. That
              is a wierd exception..</span
            >
            Also, they have won the same number of Man of the Match Awards.
            Logic would suggest that Kohli should have won many more. But that
            is not the case.
          </div>
        </div>
        <div class="era_chart">
          <bar-chart :chartdata="data.sachinVsKohli205" />
        </div>
      </div>
      <div class="era_panel_chart era_panel_large">
        <h1 class="era_panel_large_title">
          Missing out a key factor
        </h1>
        <div class="era_panel_large_content">
          Both of them played in a different era in a different team.
          <span class="highlighted_red"
            >Standards of batting have imporoved over the years</span
          >
          . For a more honest comparison between Tendulkar and Kohli we need to
          compare them with the standards of their times.
          <span class="highlighted_red"
            >So we will calculate the average for each and every parameter of
            the top 6 players in Sachin's and Virat's respective era. These will
            be used to normalise their scores against respective era's
            standards.</span
          >
        </div>
      </div>
      <div class="era_panel_chart era_panel_large">
        <div class="era_chart">
          <bar-chart :chartdata="data.sachinVsKohliNormalised" />
          <span class="highlighted_red"
            >Absolute Score= Real Score - Average Top 6 scores of that era</span
          >
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
            <br /><br />
          </div>
        </div>
      </div>
      <div class="era_panel_chart era_panel_large">
        <div class="era_subject">
          <div class="era_subject_title">The Trophy Winner</div>
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
      <router-link to="/"><i class="fas fa-angle-left"></i></router-link>
      <h1 class="era_title">This Era</h1>
      <router-link to="/that"><i class="fas fa-angle-right"></i></router-link>
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
