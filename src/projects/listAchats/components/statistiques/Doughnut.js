import { Doughnut } from "vue-chartjs";

export default {
  extends: Doughnut,
  props: ['chartData'],
  data () {
    return {
      options: {
        hoverBorderWidth: 20,
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  async mounted() {
    await this.$store.dispatch('statistiques/fetchStatistiques')
    const stats = await this.$store.getters['statistiques/get_statistiques'];

    var chartData = {
      labels: stats.labels,
      datasets: [stats.datasets]
    };

    if(stats.labels) {
      this.renderChart(chartData, this.options)
    }
  }
};
