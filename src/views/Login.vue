<template>
    <b-container class="pt-5">
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
                    <div class="my-2">
                        <a href="" class="display-inline-grid w-60">Mot de passe oublié ?</a>
                        <b-button v-if="isLoading" class="w-40" variant="success" disabled>
                            <b-spinner small type="grow"></b-spinner>
                            Loading...
                        </b-button>
                        <b-button v-else variant="success" @click="logUser" class="display-inline-grid w-40">
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

<style scoped>
@import "./../assets/css/login.css";
    .display-inline-grid {
        display: inline-grid;
    }
    .w-60 {
        width: 60%;
    }
    .w-40 {
        width: 40%;
    }
    .w-50 {
        width: 50%;
    }
</style>
