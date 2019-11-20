<template>
    <div id="navbar">
        <b-nav vertical align="left">
            <router-link to="/list-achat">
                <a>Liste</a>
            </router-link>
            <router-link to="/calculatrice">
                <a>Calculatrice</a>
            </router-link>
        </b-nav>
    </div>
</template>

<script>
    export default {
        name: "navbar"
    }
</script>

<style scoped>
    #navbar {
        text-align: center;
    }
</style>