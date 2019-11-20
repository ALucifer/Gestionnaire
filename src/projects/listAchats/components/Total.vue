<template>
  <b-card bg-variant="primary" text-variant="white">
    <blockquote class="card-blockquote">
      <p>Votre total des dépenses s'élève à : {{ total }} €.</p>
      <footer>
        <small>
          Someone famous in
          <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </b-card>
</template>

<script>
export default {
  computed: {
    total() {
      return this.$store.getters["achats/total"];
    }
  }
};
</script>