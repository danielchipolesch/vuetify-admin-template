<script setup>

import { ref, inject } from 'vue'
import AppMenu from './AppMenu.vue'

const drawer = inject('drawer');

</script>

<template>
    <v-navigation-drawer v-model="drawer" elevation="2">
        <AppMenu/>
    </v-navigation-drawer>
</template>