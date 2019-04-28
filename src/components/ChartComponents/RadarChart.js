import { Radar } from "vue-chartjs";

export default {
  extends: Radar,
  data() {
    return {
      gradient: null,
      gradient2: null
    };
  },
  mounted() {
    this.renderChart(
      {
        labels: ["Running", "Swimming", "Eating", "Cycling"],
        datasets: [
          {
            label: "Sachin",
            data: [20, 10, 4, 2],
            backgroundColor: "rgba(0, 231, 255, 0.5)",
            borderColor: "rgb(0, 231, 255)"
          },
          {
            label: "Virat",
            data: [10, 0, 40, 20],
            backgroundColor: "rgba(234, 231, 255, 0.5)",
            borderColor: "rgb(234, 231, 255)"
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
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
