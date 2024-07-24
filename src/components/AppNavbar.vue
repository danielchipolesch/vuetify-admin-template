<script setup>

import { ref, inject } from 'vue';

const toggleDrawerSidebar = inject('toggleDrawerSidebar');

const menuItems = ref([
  { title: 'Dashboard', icon: 'mdi-home', to: '/'},
  { title: 'Dashboard', icon: 'mdi-home', to: '/'},
  { title: 'Sair', icon: 'mdi-login', to: '/'}
])

</script>

<template>
    <v-app-bar color="blue-darken-4">
        <v-app-bar-nav-icon @click="toggleDrawerSidebar" variant="text"></v-app-bar-nav-icon>

        <v-toolbar-title>Admin Template</v-toolbar-title>

        <v-spacer></v-spacer>

        <template v-if="$vuetify.display.mdAndUp" #append>
          <v-btn icon="mdi-magnify" :ripple="true"></v-btn>
          <v-btn icon class="mr-4" :ripple="true">
            <v-badge dot color="error">
              <v-icon icon="mdi-bell-outline"></v-icon>
            </v-badge>
          </v-btn>
          <v-menu class="cursor-pointer">
            <template #activator="{props}">
              <v-avatar v-bind="props" class="cursor-pointer mr-5">
                <v-img cover src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
              </v-avatar>
            </template>
            <v-list :lines="false" density="compact" nav>
              <v-list-item
                v-for="(item, index) in menuItems"
                :key="index"
                :value="index"
                :prepend-icon="item.icon"
                :ripple="true"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>

    </v-app-bar>
</template>