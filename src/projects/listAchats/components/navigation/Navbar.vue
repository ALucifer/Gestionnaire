<template>
        <b-navbar toggleable="lg" variant="light">
            <b-navbar-brand href="#">Liste des achats</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template v-slot:button-content>
                            <em>{{getUsername}}</em>
                        </template>
                        <b-dropdown-item href="#" @click="logout">Se deconnecter</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
</template>

<script>
import {mapGetters} from 'vuex';
import security from "../../../../services/client/security";
export default {
    name: "Navbar",
    created() {
        security.getUser().then((user) => {
            this.$store.commit('security/set_user_information', user.data);

        });
    },
    methods: {
        logout() {
            this.$store.dispatch('security/logout').then(() => {
                this.$router.go('login')
            })
        }
    },
    computed: {
        ...mapGetters('security', ['getUsername'])
    }
}
</script>
