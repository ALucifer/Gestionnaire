<template>
  <transition-group name="slide-up" class="w-100">
    <AchatCard
            v-for="item in filteredAchats"
            class="w-33"
            :key="item.id"
            v-bind:achat="item"
    />
  </transition-group>
</template>

<script>
import AchatCard from "./CardAchat";

export default {
  name: "ListAchats",
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

<style scoped>
    .w-33 {
        display: inline-block;
        width: 30%;
        margin:5px;
    }
    .w-100 {
        display: flex;
        width: 100%;
    }
</style>
