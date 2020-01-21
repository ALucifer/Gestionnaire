<template>
    <div>
        <b-link
            v-for="(link, index) in links"
            v-bind:index="index"
            v-bind:key="index"
            class="sidebar-link"
        >{{ link.name}}</b-link>
    </div>
</template>

<script>
    export default {
        name: "Sidebar",
        props: {
            links: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped>
    .sidebar-link {
        display: block;
        padding: 5px;
        text-decoration: none;
        color: white;
    }
    .sidebar-link::before {
        content: '';
        background-color: white;
        width: 100%;
        height: 1px;
        top: 0px;
        left: 0px;
    }
</style>
