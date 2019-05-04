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
    this.chartdata.datasets[0].backgroundColor = this.gradient;
    this.chartdata.datasets[1].backgroundColor = this.gradient2;
    this.renderChart(this.chartdata, {
      responsive: true,
      maintainAspectRatio: false
    });
  }
};
