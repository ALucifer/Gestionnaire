<template>
  <transition-group name="slide-up">
    <div v-for="item in list" class="w-100" :key="item">
      <AchatCard v-bind:achat="item" />
    </div>
  </transition-group>
</template>

<script>
import AchatCard from "./AchatCard";

export default {
  name: "ListGlobal",
  components: {
    AchatCard
  },
  created() {
    this.$store.dispatch("achats/fetchAll");
  },
  computed: {
    list() {
      return this.$store.getters["achats/achats"];
    }
  }
};
</script>
