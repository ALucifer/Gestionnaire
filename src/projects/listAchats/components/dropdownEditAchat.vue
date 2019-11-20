<template>
  <div>
    <b-dropdown variant="link" toggle-class="text-decoration-none icon-minus-button" no-caret>
      <template v-slot:button-content>
        <v-icon name="edit-2" class="icon-minus edit"></v-icon>
      </template>

      <b-dropdown-item href="#">
        <v-icon
          name="shopping-cart"
          class="icon-minus cart mx-2"
          v-b-tooltip.hover
          title="Achat effectué"
        ></v-icon>
      </b-dropdown-item>
      <b-dropdown-item-button @click="remove" href="#">
        <v-icon name="delete" class="icon-minus remove mx-2" v-b-tooltip.hover title="Supprimer"></v-icon>
      </b-dropdown-item-button>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  name: "dropdownEditAchat",
  props: ["remove"],
  methods: {
    remove() {
      this.$emit("remove");
    }
  }
};
</script>

<style scoped>
.icon-minus,
.icon-minus-button {
  width: 20px;
  position: relative;
  top: 10px;
  left: 20px;
}
.edit {
  text-decoration: none;
}
</style>