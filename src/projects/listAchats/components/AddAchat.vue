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
            <b-input-group append="€">
              <b-form-input
                      v-model="$v.form.price.$model"
                      :state="submitted ? !$v.form.price.$invalid : null"
                      id="price"
                      :type="'number'"
                      no-wheel
                      >
              </b-form-input>
            </b-input-group>

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
            <BSelectItem
                    :items="categories"
                    :type="'categorie'"
                    v-model="form.category"
            />
            <div class="error" v-if="submitted && !$v.form.category.required">Champs requis</div>
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
import achatValidation from '../services/form/achatValidation';
import BSelectItem from '../../../components/BSelectItem'

export default {
  name: "AddAchat",
  components: {
    BSelectItem
  },
  data() {
    return {
      submitted: false,
      form: {
        name: "",
        price: 0.0,
        url: "",
        isBuy: false,
        category: null
      },
    };
  },
  validations: achatValidation,
  computed: {
    categories () {
      var options = [];
      this.$store.getters['achats/categories'].forEach((item) => {
        options.push({value: item.id, text: item.label})
      })
      return options
    }
  },
  methods: {
    onSubmit(event) {
      this.submitted = true;
      this.$v.form.$touch();

      if(!this.$v.form.$anyError){
        let data = { ...this.$data };
        this.$store.dispatch('achats/addItem', data);
        this.$root.$emit("bv::hide::modal", "addAchat", "#btnAdd");
      }
    }
  }
};
</script>

<style scoped>
  .error{
    color: red;
  }
</style>