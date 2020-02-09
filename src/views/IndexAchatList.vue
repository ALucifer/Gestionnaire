<template>
  <div>
    test
  </div>
</template>

<script>

export default {
  name: "IndexAchatList",
  beforeCreate: function() {
    document.body.className = 'achatList';
  },
  created() {
    this.$store.dispatch("achats/fetchAll");
  }
};
</script>

<style>

</style>
