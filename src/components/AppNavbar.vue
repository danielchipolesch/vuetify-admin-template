<script setup>

import { inject } from 'vue';

const toggleDrawerSidebar = inject('toggleDrawerSidebar');

</script>

<template>
    <v-app-bar color="blue-darken-4">
        <v-app-bar-nav-icon @click="toggleDrawerSidebar" variant="text"></v-app-bar-nav-icon>

        <v-toolbar-title>Admin Template</v-toolbar-title>

        <v-spacer></v-spacer>

        <template v-if="$vuetify.display.mdAndUp">
          <v-btn icon="mdi-magnify" variant="text"></v-btn>
          <v-btn icon="mdi mdi-account" variant="text"></v-btn>
        </template>

    </v-app-bar>
</template>