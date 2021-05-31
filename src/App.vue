<template>
  <div id="app">
    <component :is="layout"></component>
  </div>
</template>

<script>
import DefaultLayout from './layouts/DefaultLayout.vue'
import EmptyLayout from './layouts/EmptyLayout.vue'

export default {
  components: { DefaultLayout, EmptyLayout },

  computed: {
    layout() {
      return (
        (this.$route.meta.layout === 'empty' ? 'empty' : 'default') + '-layout'
      )
    },
  },
}
</script>
