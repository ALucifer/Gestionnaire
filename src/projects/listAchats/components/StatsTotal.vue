<template>
  <b-row align-h="center">
    <b-col cols="6">
        <Doughnut :data="chartData" :options="chartOptions"></Doughnut>
    </b-col>
  </b-row>
</template>

<script>
import Doughnut from "./statistiques/Doughnut";
import randomColor from 'randomcolor';

export default {
    name: "StatsTotal",
    components: {
        Doughnut
    },
    computed: {
      chartOptions() {
          return {
              hoverBorderWidth: 20,
              responsive: true,
              maintainAspectRatio: false,
          }
      },
      chartData() {
        var  a = this.$store.getters['achats/getStatistiques'];
          console.log(a.labels)
        return {
            labels: a.labels,
            datasets: [
                {
                    backgroundColor: ["#28a745", "#dc3545"],
                    data: [1]
                }
            ]
        }
      }
    }
};
</script>
