<template>
  <div>
    <b-form-input v-model="searchText" placeholder="Rechercher un achat" @keyup="search" class="inputSearch"></b-form-input>
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
  .inputSearch {
    background: #fff;
    color: #525865;
    border-radius: 4px;
    border: 1px solid #d1d1d1;
    box-shadow: inset 0px 1px 8px rgba(0, 0, 0, 0.2);
    font-family: inherit;
    font-size: 1em;
    line-height: 1.45;
    outline: none;
    padding: 0.6em 1.45em 0.7em;
    -webkit-transition: .18s ease-out;
    -moz-transition: .18s ease-out;
    -o-transition: .18s ease-out;
    transition: .18s ease-out;
    margin-bottom: 15px;
  }
</style>