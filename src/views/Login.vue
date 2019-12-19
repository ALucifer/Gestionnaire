<template>
    <b-container>
        <b-row align-h="center">
            <b-col cols="5" class="container-login">
                <div class="login-title">
                    <span class="title">Login</span>
                </div>
                <form class="form-login">
                    <b-alert show dismissible fade variant="danger" v-if="this.getErrors.length >= 1">
                        Username/Password incorrect
                    </b-alert>
                    <b-input
                        v-model="$v.email.$model"
                        :state="submitted ? !$v.email.$invalid : null"
                        class="my-1"
                        :type="'text'"
                        placeholder="Email"
                    >
                    </b-input>
                    <b-input
                            v-model="$v.password.$model"
                            :state="submitted ? !$v.password.$invalid : null"
                            class="my-1"
                            :type="'password'"
                            placeholder="Password">
                    </b-input>
                    <div class="my-1">
                        <a href="">Mot de passe oublié ?</a>
                        <b-button
                                variant="success"
                                @click="logUser"

                        >
                            <b-spinner v-if="isLoading" small></b-spinner>
                            Login
                        </b-button>
                    </div>
                </form>
            </b-col>
        </b-row>
    </b-container>
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

<style>
    @import "../assets/css/login.css";
    .title {
        font-family: Poppins-Bold;
        font-size: 30px;
        color: #fff;
        text-transform: uppercase;
        line-height: 1.2;
        text-align: center;
    }
</style>