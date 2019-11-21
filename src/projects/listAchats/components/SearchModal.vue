<template>
  <div>
    <b-form-input v-model="searchText" placeholder="Rechercher un achat" @keyup="search"></b-form-input>
  </div>
</template>

<script>
export default {
  name: "SearchModal",
  data() {
    return {
      searchText: ""
    };
  },
  methods: {
    search() {
      this.$store.dispatch("achats/filter", this.searchText);
    }
  }
};
</script>

<style scoped>
</style>