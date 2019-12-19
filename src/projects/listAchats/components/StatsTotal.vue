<template>
  <b-row align-h="center" class="container-shadow">
    <b-col cols="6">
        <Doughnut></Doughnut>
    </b-col>
  </b-row>
</template>

<script>
import Doughnut from "./statistiques/Doughnut";

export default {
    name: "StatsTotal",
    components: {
        Doughnut
    }
};
</script>

<style scoped>
    .container-shadow {
        margin: 10px;
        padding: 10px;
        transition: all 0.2s linear;
        cursor: pointer;
        box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
    }
</style>