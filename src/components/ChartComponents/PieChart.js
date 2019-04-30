import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
  data() {},
  mounted() {
    this.renderChart(
      {
        labels: ["Running", "Swimming", "Eating", "Cycling"],
        datasets: [
          {
            data: [20, 10, 4, 2],
            backgroundColor: [
              "rgba(0, 231, 255, 0.5)",
              "rgba(230, 23, 255, 0.5)",
              "#647678"
            ],
            borderColor: [
              "rgba(0, 231, 255, 1)",
              "rgba(230, 23, 255, 1)",
              "#5c6b6d"
            ],
            hoverBackgroundColor: [
              "rgba(0, 231, 255, 1)",
              "rgba(230, 23, 255, 1)",
              "#5c6b6d"
            ]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
