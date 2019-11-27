<template>
  <b-row align-h="center">
    <b-col cols="12" class="small">
      <Doughnut :data="chartData" :options="chartOptions"></Doughnut>
    </b-col>
  </b-row>
</template>

<script>
import Doughnut from "./statistiques/Doughnut";
export default {
  components: {
    Doughnut
  },
  data() {
    return {
      chartOptions: {
        hoverBorderWidth: 20
      },
      chartData: {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["Green", "Red", "Blue"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
            data: [1, 10, 5]
          }
        ]
      }
    };
  }
};
</script>

<style>
.small {
  width: 300px;
  height: 300px;
}
</style>
