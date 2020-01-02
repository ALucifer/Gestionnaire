<template>
    <b-container class="event-card -shadow">
        <b-row no-gutters>
            <b-col cols="12">
                <p class="achat-name">{{ achat.name }}</p>
            </b-col>
            <b-col cols="12">
                <b-badge v-if="achat.category" pill variant="primary">{{ achat.category.label }}</b-badge>
                <v-icon v-else name="alert-circle" class="warning-no-category" id="tooltip-nc">
                </v-icon>
                <b-tooltip target="tooltip-nc" triggers="hover">
                    Attention, cet achat n'a pas de catégorie
                </b-tooltip>
                <b-badge pill variant="danger">{{ achat.price }} €</b-badge>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: "AchatCard",
    props: {
        achat: {
            type: Object,
            required: true
        },
    }
};
</script>

<style scoped>
.event-card {
  padding: 10px;
  transition: all 0.2s linear;
  cursor: pointer;
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.2), 0 2px 17px 0 rgba(0, 0, 0, 0.19);
}
.achat-name {
  font-size: 23px;
}

.warning-no-category {
  width: 25px;
  color: #FFD33F;
}
.icon-minus-2 {
  width: 13px;
}
</style>