<template>
    <div class="w-25 history">
        <b-list-group>
            <div v-for="item in list">
                <b-list-group-item>{{ item }}</b-list-group-item>
            </div>
        </b-list-group>
    </div>
</template>

<script>
    import EventBus from '../event/eventBus';
    export default {
        name: "ListCalcul",
        computed: {
            list () {
                return this.$store.getters['listCalcul/list'];
            }
        },
        mounted() {
            EventBus.$on('ADD_LIST_HISTORY', (calcul) => {
                this.$store.dispatch('listCalcul/addCalcul', calcul)
            })
        }
    }
</script>

<style scoped>
    .history{
        margin: auto 45%;
    }
</style>