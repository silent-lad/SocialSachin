<template>
  <div class="front_page">
    <div class="era_body">
      <div class="era_panel_large">
        <h1
          class="title"
          style="text-shadow:4px 4px 10px black;color:darkblue;"
        >
          God
        </h1>
        <div class="era_panel_large_content">
          After the analysis it is safe to say that Sachin is the
          <span class="highlighted_red"> GOD OF CRICKET</span>. Although not the
          only one but atleast one of them. We compared him with players of
          every era. Now let's have a comparison of him with himself.
        </div>
      </div>
      <h1
        class="title"
        style=" margin-top:15%;text-shadow:4px 4px 10px black;color:white;"
      >
        A 100 Centuries.
      </h1>
      <div class="chart_large">
        <line-chart :chartdata="data.sachin100" />
        <p>Number of Centuries Vs year</p>
      </div>
      <div class="era_panel_chart era_panel_large">
        <div class="era_subject">
          <div class="era_subject_title">100 Ton</div>
          <div class="era_subject_content">
            Sachin Tendulkar the only man to achieve the feat of 100 Centuries
            in the game of Cricket. Every one above compared to him have some
            characterstics or records which surpass him in one way or
            another.But no living or dead or even future Cricketer can beat this
            record of him.
          </div>
        </div>
        <div class="era_chart">
          <pie-chart :chartdata="data.sachin100Nation" />
        </div>
      </div>

      <h1
        class="title"
        style=" margin-top:15%;text-shadow:4px 4px 10px black;color:white;"
      >
        Consistency
      </h1>
      <div class="chart_large">
        <line-chart :chartdata="data.sachinYearByYear" />
        <p>Number of Centuries Vs year</p>
      </div>
      <p class="era_subject_content" style="padding:0 10% ;">
        <span class="highlighted_red"
          >Thirty Four Thousand Three Hundred and Forty Seven</span
        >
        . That's the benchmark for longevity, consistency and durability that
        all batsmen will be measured against, for that's the final tally of runs
        that Sachin Tendulkar has finished with, in a 24-year journey that has
        combined flair and natural talent with relentless hard work and
        single-minded focus. Without either attribute he wouldn't have been able
        to succeed as much, and as consistently, as he did over an incredibly
        long period of time.
      </p>
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

import data from "@/assets/data.json";
export default {
  name: "frontpage",
  data: function() {
    return {
      data
    };
  },
  components: { LineChart, BarChart, RadarChart, PieChart }
};
</script>

<style>
.front_page {
  width: 90%;
  margin: 0 auto 5% auto;
  background: #191d26;
  box-shadow: 20px 20px 10px rgba(128, 128, 128, 0.267);
}
.chart_large {
  max-width: 100% !important;
  padding: 2% 7%;
}
</style>
