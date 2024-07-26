<template>
  <v-app>
      <AppSidebar/>
      <AppNavbar/>
    <v-main class="bg-grey-lighten-3" bg-color="grey-lighten-3">
      <router-view />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script setup>

  import { provide, ref } from 'vue';

  const drawer = ref(true);
  const toggleDrawerSidebar = ()=> {drawer.value = !drawer.value};

  provide('drawer', drawer);
  provide('toggleDrawerSidebar', toggleDrawerSidebar);

</script>
