import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
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
  created() {
    console.log(this.chartdata);
  },
  mounted() {
    this.gradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    this.gradient2 = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);

    this.gradient.addColorStop(0, "rgba(150, 0, 0, 0.7)");
    this.gradient.addColorStop(1, "purple");
    this.gradient2.addColorStop(0, "rgba(0, 0, 150, 0.7)");
    this.gradient2.addColorStop(1, "purple");
    // this.gradient.addColorStop(1, "rgba(100, 10, 20, 0.9)");
    // Overwriting base render method with actual data.
    // this.chartdata.datasets[0].backgroundColor = this.gradient;
    // this.chartdata.datasets[1].backgroundColor = this.gradient2;
    if (this.chartdata.flag == "kohli") {
      this.chartdata.datasets[1].backgroundColor = "#ba181fdd";
      this.chartdata.datasets[0].backgroundColor = "#173d9fdd";
    } else if (this.chartdata.flag == "ponting") {
      this.chartdata.datasets[1].backgroundColor = "#ef9b33dd";
      this.chartdata.datasets[0].backgroundColor = "#173d9fdd";
    } else {
      this.chartdata.datasets[1].backgroundColor = "#9ada30dd";
      this.chartdata.datasets[0].backgroundColor = "#173d9fdd";
    }
    this.renderChart(this.chartdata, {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              fontColor: "#000000",
              fontSize: 10,
              beginAtZero: true
            },
            ticks: {
              fontColor: "white",
              fontSize: 14
            }
          }
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              fontColor: "#000000",
              fontSize: 10,
              beginAtZero: true
            },
            ticks: {
              fontColor: "white",
              fontSize: 14
            }
          }
        ]
      }
    });
  }
};
