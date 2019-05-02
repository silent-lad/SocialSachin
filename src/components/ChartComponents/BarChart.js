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
    this.renderChart(
      {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        datasets: [
          {
            label: "GitHub Commits",
            backgroundColor: this.gradient,
            data: [40, 20, 12, 39, 10, 40, 39, 40, 40, 20, 12, 11]
          },
          {
            label: "GitHub Sex",
            backgroundColor: this.gradient2,
            data: [40, 20, 12, 39, 10, 40, 39, 40, 40, 20, 12, 11]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
