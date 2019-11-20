<template>
  <div>
    <b-modal id="addAchat" hide-backdrop title="Nouvel achat">
      <b-row>
        <b-col>
          <b-form>
            <b-form-input v-model="name" id="name" :type="text" placeholder="Nom" class="my-1"></b-form-input>
            <b-form-input v-model="price" id="price" :type="number" class="my-1"></b-form-input>
            <b-form-input v-model="url" id="url" :type="url" placeholder="Url" class="my-1"></b-form-input>
          </b-form>
        </b-col>
      </b-row>

      <template v-slot:modal-footer>
        <div>
          <b-button @click="onSubmit" type="button" variant="primary" ref="btnAdd">Save</b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "AddAchat",
  data() {
    return {
      name: "",
      price: 0.0,
      url: "http://www.google.fr",
      isBuy: false
    };
  },
  methods: {
    onSubmit() {
      let data = { ...this.$data };

      this.$data.name = "";
      this.$data.price = 0.0;
      this.$data.url = "";
      this.$data.isBuy = false;

      this.$store.dispatch("achats/addItem", data);

      return this.$root.$emit("bv::hide::modal", "addAchat", "#btnAdd");
    }
  }
};
</script>
