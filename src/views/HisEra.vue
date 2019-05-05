<template>
  <div class="eraCard ricky">
    <div class="era_head">
      <router-link to="/that"><i class="fas fa-angle-left "> </i> </router-link>
      <h1 class="era_title ">His Era</h1>
      <router-link to="/this"
        ><i class="fas fa-angle-right bump tooltip"
          ><span class="tooltiptext">Change Era</span></i
        ></router-link
      >
    </div>
    <div class="era_body">
      <div class="era_panel_large" v-scroll-reveal.reset>
        <h1 class="era_panel_large_title">
          Sachin Against Ponting
        </h1>
        <div class="era_panel_large_content">
          In the Sachin's era of cricket Ricky Ponting was the second name of
          batting domination. His aggreive, hard-hitting and dominant gameplay
          makes him Sachin's perfect contender for that era. Now let's compare
          these 2 and seek out the answer.
        </div>
      </div>
      <div class="era_panel_chart era_panel_large" v-scroll-reveal.reset>
        <div class="era_subject">
          <div class="era_subject_title">At a glance.</div>
          <div class="era_subject_content">
            We take a look at Sachin's and Ricky's player stats with the above
            stated constraints in this bar chart.<br />
            We see a clear win for Sachin here in terms of almost every
            parameter we can judge him on.
            <span class="highlighted_red"
              >But comparing runs would be slightly unfair to Ponting as he came
              8 years after Sachin's debut.</span
            >
          </div>
        </div>
        <div class="era_chart">
          <bar-chart :chartdata="data.sachinVsRicky" />
        </div>
      </div>

      <div class="era_panel_chart era_panel_large" v-scroll-reveal.reset>
        <div class="era_chart">
          <bar-chart :chartdata="data.sachinVsRickySnipped" />
        </div>
        <div class="era_subject">
          <div class="era_subject_title">Changing the timeline.</div>
          <div class="era_subject_content">
            Let's Just tone down Sachin's stats a little bit. Ponting debuted in
            1995.<br />
            <span class="highlighted_red"
              >So let's show the stats of Sachin's career after 1995.</span
            >
            and compare it again with Ponting's career.
            <span class="highlighted_red"></span>
          </div>
        </div>
      </div>
      <div class="era_panel_large" v-scroll-reveal.reset>
        <h1 class="era_panel_large_title">
          Captaincy
        </h1>
        <div class="era_panel_large_content">
          Clearly there is no way Ricky Ponting can catch Sachin's trail.
          Although there is one more way we can compare them and this time
          Ponting wins big .Both of them were great cricketers but
          <span class="highlighted_red">
            Ponting was far better Captain than Sachin.</span
          >
          Let's look at the captaincy stats of both.
        </div>
      </div>
      <div class="era_panel_chart era_panel_large" v-scroll-reveal.reset>
        <div class="era_chart" style="max-width:42%;">
          <h2 class="era_panel_large_title">ODI</h2>
          <p class="era_panel_large_content highlighted_red">
            Outer Circle Ricky Ponting as Captain
          </p>
          <p class="era_panel_large_content ">Inner Circle Sachin as Captain</p>
          <pie-chart :chartdata="data.sachinVsRickyODICaptaincy" />
        </div>

        <div class="era_chart" style="max-width:42%;">
          <h2 class="era_panel_large_title">Test</h2>
          <p class="era_panel_large_content highlighted_red">
            Outer Circle Ricky Ponting as Captain
          </p>
          <p class="era_panel_large_content">Inner Circle Sachin as Captain</p>
          <pie-chart :chartdata="data.sachinVsRickyTestCaptaincy" />
        </div>
      </div>
    </div>
    <div class="era_head">
      <router-link to="/that"><i class="fas fa-angle-left"></i></router-link>
      <h1 class="era_title">His Era</h1>
      <router-link to="/this"
        ><i class="fas fa-angle-right bump tooltip"
          ><span class="tooltiptext">Change Era</span></i
        ></router-link
      >
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
/* body {
  line-height: 30px !important;
} */

.tooltip .tooltiptext {
  width: 6vw;
  background-color: rgb(0, 0, 0);
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  font-size: 1.4vw;
  /* Position the tooltip */
  position: absolute;
  z-index: 1;
}
.highlighted {
  color: red;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.highlighted_red {
  background-size: fit;
  background: rgba(0, 16, 235, 0.514);
  color: rgb(200, 200, 255);
}
.era_panel_large_title {
  text-shadow: 7px 7px 15px black;
  font-family: "Cinzel", serif;
  background: rgba(0, 0, 0, 0);
  width: 50%;
  margin: 0 auto 2% auto;
  font-size: 4vw;
  line-height: 100%;
  text-decoration: underline;
  color: rgb(37, 62, 173);
  /* color: rgb(190, 190, 190); */
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
  /* color: rgb(173, 37, 82); */
  color: rgb(37, 62, 173);
  /* color: rgb(175, 35, 35); */
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
  /* background: #25292b; */
  box-shadow: 20px 20px 10px rgba(128, 128, 128, 0.267);
}
.era_title {
  text-shadow: 7px 7px 15px black;
  font-family: "Cinzel", serif;
  font-size: 8vw;
  line-height: 40%;
  color: rgb(37, 80, 173);
}
.bump {
  animation: bump 1s infinite;
  transform: scale(1.2);
}
@keyframes bump {
  0% {
    color: rgb(245, 130, 130);
    transform: scale(1.2);
  }
  50% {
    color: white;
    transform: scale(1);
  }
  100% {
    color: rgb(245, 130, 130);
    transform: scale(1.2);
  }
}
@media screen and (max-width: 786px) {
  .era_subject_content {
    font-size: 10px;
  }
  .title.heading_section {
    z-index: 999;
    font-size: 10vw;
    line-height: 100%;
    background: rgba(255, 0, 0, 0.5);
  }
}
</style>
