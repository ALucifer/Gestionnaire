<template>
  <transition-group name="slide-up">
    <div v-for="item in filteredAchats" class="w-100" :key="item">
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
    filteredAchats() {
      return this.$store.getters["achats/filteredAchats"];
    }
  }
};
</script>
