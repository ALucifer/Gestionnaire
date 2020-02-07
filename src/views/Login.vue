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
                                            type="text"/>
                                    <v-text-field
                                            label="Password"
                                            v-model="$v.password.$model"
                                            prepend-icon="mdi-lock"
                                            type="password"/>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer />
                                <v-btn color="primary">Login</v-btn>
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
                email: '',
                password: '',
                submitted: false
            }
        },
        beforeCreate: function() {
            document.body.className = 'login';
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
                this.submitted = true;
                let payload = {username: this.$v.email.$model, password: this.$v.password.$model};
                this.$store.dispatch('security/login', payload).then(() => this.$router.push('/'));
            }
        }
    }
</script>
