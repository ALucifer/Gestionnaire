<template>
    <v-app id="inspire">
        <v-content>
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="4">
                        <v-card class="elevation-12">
                            <v-toolbar color="primary" dark flat>
                                <v-toolbar-title>Login</v-toolbar-title>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field
                                            label="Login"
                                            v-model="$v.email.$model"
                                            prepend-icon="mdi-account"
                                            type="text"
                                            required
                                            />
                                    <v-text-field
                                            label="Password"
                                            v-model="$v.password.$model"
                                            prepend-icon="mdi-lock"
                                            type="password"
                                            required
                                            />
                                </v-form>
                                <span v-if="errors" class="error">
                                    Login / Mot de passe incorrect.
                                </span>
                                <span v-if="empty && isSubmitted" class="empty">
                                    Merci de renseigner les champs requis pour valider le formulaire.
                                </span>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer />
                                <v-btn color="primary" @click.prevent="logUser">Login</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import {required, email} from 'vuelidate/lib/validators'

    export default {
        name: "Login",
        data () {
            return {
                empty: true,
                errors: false,
                isSubmitted: false,
                email: '',
                password: '',
                submitted: false
            }
        },
        computed: {
            isLoading () {
                return this.$store.getters['security/isLoading'];
            },
            getErrors() {
                return this.$store.getters['security/getErrors'];
            }
        },
        validations: {
            email: {required, email},
            password: {required}
        },
        methods: {
            logUser() {
                this.empty = !this.$v.$anyDirty;
                this.errors = this.$v.$anyError;
                this.isSubmitted = true;
                if (this.errors === false && this.empty === false) {
                    let payload = {username: this.$v.email.$model, password: this.$v.password.$model};
                    this.$store.dispatch('security/login', payload).then(() => this.$router.push('/'));
                }
            }
        }
    }
</script>

<style scoped>
.empty {
  color: red;
}
.v-application .error {
    background-color: white!important;
    color: red;
}
</style>
