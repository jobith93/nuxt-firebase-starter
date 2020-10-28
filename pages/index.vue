<template>
  <div class="container">
    <Logo />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'index',
  middleware: 'guest',
  mounted(){
    // this.$fireAnalytics.logEvent('index_page_opened')
    // dispatch store events for module stores
    this.$store.dispatch('categories/get')
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters({
      categories: "categories/list"
    })
  }
}
</script>

<style lang="scss">

</style>
