<template>
    <v-navigation-drawer
            v-model="drawer"
            app
            clipped
    >
        <v-list dense>
            <v-list-item link>
                <v-list-item-action>
                    <v-icon>mdi-book-open</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        <router-link
                        to="achatIndex">
                            Tickets
                        </router-link>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item link>
                <v-list-item-action>
                    <v-icon>mdi-account-multiple</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        <router-link to="achatAdd">
                            Chats
                        </router-link>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        props: ['drawer'],
        name: "Sidebar"
    }
</script>

<style scoped>

</style>
