<template>
  <b-row align-h="center">
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
