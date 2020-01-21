<template>
  <b-container fluid class="no-padding">
    <b-row no-gutters>
      <b-col cols="2" class="d-none d-md-block" v-if="isLogged">
        <Sidebar :links="links" class="sidebar-container"></Sidebar>
      </b-col>
      <b-col>
        <router-view></router-view>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Sidebar from './components/Sidebar'
export default {
  name: "app",
  components: {Sidebar},
  computed: {
    isLogged() {
      return this.$store.getters['security/isLogged'];
    },
    links() {
      return [
        {name: 'name1', link: 'http://www.google.fr'},
        {name: 'name2', link: 'http://www.google.fr'},
      ]
    }
  }
};
</script>

<style>
@import "./assets/css/app.css";
</style>
