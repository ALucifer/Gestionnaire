<template>
  <b-container fluid class="no-padding">
    <b-row no-gutters>
      <b-col cols="2" class="d-none d-md-block" v-if="this.$store.getters['security/isLogged']">
        <Sidebar class="sidebar-container"></Sidebar>
      </b-col>
      <b-col>
        <router-view class="p-3"></router-view>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Sidebar from './components/Sidebar'
export default {
  name: "app",
  components: {Sidebar}
};
</script>

<style>
@import "./assets/css/app.css";
</style>
