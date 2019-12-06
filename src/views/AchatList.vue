<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col cols="3">
          <SearchModal />
          <ListGlobal />
          <b-button variant="success" v-b-modal="'addAchat'">
            <v-icon name="plus" class="icon-minus plus"></v-icon>
          </b-button>
          <AddAchat />
        </b-col>
        <b-col cols="9">
          <StatsAchat />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AddAchat from "../projects/listAchats/components/AddAchat";
import ListGlobal from "../projects/listAchats/components/ListGlobal";
import SearchModal from "../projects/listAchats/components/SearchModal.vue";
import StatsAchat from "../projects/listAchats/components/StatsTotal"

export default {
  name: "AchatList",
  components: {
    AddAchat,
    ListGlobal,
    SearchModal,
    StatsAchat
  },
  created() {
    this.$store.dispatch("achats/fetchAll");
  }
};
</script>

<style scoped>
@import "../assets/css/achatList.css";
</style>