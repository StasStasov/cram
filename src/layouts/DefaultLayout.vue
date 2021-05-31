<template>
  <div>
    Default layout
    <sidebar-component />
    <router-view />
  </div>
</template>

<script>
import SidebarComponent from '../components/SidebarComponent.vue'
export default {
  components: { SidebarComponent },
  name: 'DefaultLayout',
}
</script>
