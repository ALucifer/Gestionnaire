<template>
  <transition-group name="slide-up">
      <div v-for="item in filteredAchats" class="w-100" :key="item.id">
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
  computed: {
      filteredAchats() {
        return (this.$store.getters['achats/filteredAchats'] ||
        this.$store.getters['achats/achats'])
      }
  }
};
</script>
