<template>
  <div v-loading="loading" class="layout">
    <Nuxt />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters({
      loading: "loading",
    }),
  }
}
</script>

<style lang="scss">
.el-drawer__open .el-drawer.btt{
  max-width: 600px;
  margin: 0 auto;
}
.el-popup-parent--hidden{
  padding: 0 !important;
}
</style>
