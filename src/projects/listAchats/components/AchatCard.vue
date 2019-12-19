<template>
  <div class="event-card -shadow" @click="edit">
    <b-container class="bv-row">
      <b-row>
        <p class="achat-name">{{ achat.name }}</p>
        <div class="achat-price">{{ achat.price }} €</div>
      </b-row>
      <b-row>
        <b-badge v-if="achat.category" pill variant="primary">{{ achat.category.label }}</b-badge>
        <v-icon v-if="!achat.category" name="alert-circle" class="warning-no-category" id="tooltip-nc"></v-icon>
        <b-tooltip target="tooltip-nc" triggers="hover">
          Attention, cet achat n'a pas de catégorie
        </b-tooltip>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "AchatCard",
  props: {
    achat: Object
  },
  methods: {
    remove() {
      this.$store.dispatch("achats/removeItem", this.achat);
    },
    edit() {
      alert('edit');
    }
  }
};
</script>

<style scoped>
.event-card {
  padding: 10px;
  margin-bottom: 10px;
  transition: all 0.2s linear;
  cursor: pointer;
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.2), 0 2px 17px 0 rgba(0, 0, 0, 0.19);
}
.achat-name {
  font-size: 23px;
}
.achat-link {
  font-size: 15px;
  position: absolute;
  bottom: 0;
  left: 0;
}
.achat-price {
  position: absolute;
  right: -0;
  background-color: #ffeed9;
  padding: 5px;
  border-radius: 5px;
}

.warning-no-category {
  width: 25px;
  color: #FFD33F;
}
.icon-minus-2 {
  width: 13px;
}
</style>