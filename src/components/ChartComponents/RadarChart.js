import { Radar } from "vue-chartjs";

export default {
  extends: Radar,
  props: {
    chartdata: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      gradient: null,
      gradient2: null
    };
  },
  mounted() {
    this.chartdata.datasets[0].backgroundColor = "rgba(0, 231, 255, 0.5)";
    this.chartdata.datasets[0].borderColor = "rgb(0, 231, 255)";
    this.chartdata.datasets[1].backgroundColor = "rgba(234, 0, 255, 1)";
    this.chartdata.datasets[1].borderColor = "rgb(234, 0, 255)";
    this.renderChart(this.chartdata, {
      responsive: true,
      maintainAspectRatio: false
    });
  }
};

// {
//     label: "Data Two",
//         borderColor: "#05CBE1",
//             pointBackgroundColor: "white",
//                 pointBorderColor: "white",
//                     borderWidth: 1,
//                         backgroundColor: this.gradient2,
//                             data: [60, 55, 32, 10, 2, 12, 53]
// }
