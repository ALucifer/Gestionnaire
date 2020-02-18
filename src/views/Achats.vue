<template>
  <v-app id="inspire">

    <Sidebar :drawer="drawer"/>
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Gestionnaire</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="shrink">
            <router-view name='children'/>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>
<script>
import Sidebar from "../components/Sidebar";

export default {
  name: "Achats",
  components: {Sidebar},
  data() {
    return {
      drawer: null
    }
  },
  beforeCreate: function() {
    document.body.className = 'achatList';
  },
  created() {
    this.$store.dispatch("achats/fetchAll");
    this.$vuetify.theme.dark = true
  }
};
</script>

<style>

</style>
