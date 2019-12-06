<template>
    <div>
        <b-input-group>
            <template v-slot:prepend>
                <b-input-group-text >{{ type }}</b-input-group-text>
            </template>
            <b-form-input
                v-model="selectedItem"
                placeholder="categorie"
                @input="updateValue"
            ></b-form-input>

            <template v-slot:append>
                <b-dropdown text="Dropdown" variant="success">
                    <b-dropdown-item v-for="item in items" :key="item.id" @click="addCategory(item.text)" >{{ item.text }}</b-dropdown-item>
                </b-dropdown>
            </template>
        </b-input-group>
    </div>
</template>

<script>
    export default {
        name: "BSelectItem",
        data () {
            return {
                selectedItem: ''
            }
        },
        props: {
            type: String,
            items: {
                type: Array,
                required: true
            },
            value: String
        },
        methods: {
            addCategory(category) {
                this.selectedItem = category;
                this.$emit('input', category);
            },
            updateValue() {
                this.$emit('input', this.selectedItem)
            }
        }
    }
</script>