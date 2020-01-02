<template>
  <div>
    <Navbar/>
    <b-container fluid>
      <b-row>
        <b-col>
          <InputSearch class="m-3 ih" />
          <ListGlobal />
          <AddAchat />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AddAchat from "../projects/listAchats/components/achat/AddAchat";
import ListGlobal from "../projects/listAchats/components/achat/ListAchats";
import InputSearch from "../projects/listAchats/components/InputSearch.vue";
import Navbar from "../projects/listAchats/components/navigation/Navbar"

export default {
  name: "IndexAchatList",
  components: {AddAchat, ListGlobal, InputSearch, Navbar},
  beforeCreate: function() {
    document.body.className = 'achatList';
  },
  created() {
    this.$store.dispatch("achats/fetchAll");
  }
};
</script>

<style>
  @import "./../assets/css/achatList.css";
  .ih {
    height: initial;
  }
</style>