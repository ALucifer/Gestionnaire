<template>
  <div>
    <b-modal id="addAchat" hide-backdrop title="Nouvel achat">
      <b-row>
        <b-col>
          <b-form>
            <b-form-input
                    v-model="$v.form.name.$model"
                    :state="submitted ? !$v.form.name.$invalid : null"
                    id="name"
                    :type="'text'"
                    placeholder="Nom"
                    class="my-1"></b-form-input>
            <div class="error" v-if="submitted && !$v.form.name.required">Champs requis</div>
            <div class="error" v-if="submitted && !$v.form.name.minLength">Name must have at least {{$v.form.name.$params.minLength.min}} letters.</div>
            <b-form-input
                    v-model="$v.form.price.$model"
                    :state="submitted ? !$v.form.price.$invalid : null"
                    id="price"
                    :type="'number'"
                    class="my-1"></b-form-input>
            <div class="error" v-if="submitted && !$v.form.price.required">Champs requis</div>
            <div class="error" v-if="submitted && !$v.form.price.minValue">Name must have at least {{$v.form.price.$params.minValue.min}} euros.</div>
            <b-form-input
                    v-model="$v.form.url.$model"
                    :state="submitted ? !$v.form.url.$invalid : null"
                    id="url"
                    :type="'url'"
                    placeholder="Url"
                    class="my-1"></b-form-input>
            <div class="error" v-if="submitted && !$v.form.url.required">Champs requis</div>
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
import achatValidation from '../../services/form/achatValidation';

export default {
  name: "AddAchat",
  data() {
    return {
      submitted: false,
      form: {
        name: "",
        price: 0.0,
        url: "",
        isBuy: false
      }
    };
  },
  validations: achatValidation,
  methods: {
    onSubmit() {
      this.submitted = true;
      this.$v.form.$touch();
      if(!this.$v.form.$anyError){
        console.log("success")
      }
      // let data = { ...this.$data };
      //
      // this.$data.name = "";
      // this.$data.price = 0.0;
      // this.$data.url = "";
      // this.$data.isBuy = false;
      //
      // this.$store.dispatch("achats/addItem", data);
      //
      // return this.$root.$emit("bv::hide::modal", "addAchat", "#btnAdd");
    }
  }
};
</script>

<style scoped>
  .error{
    color: red;
  }
</style>