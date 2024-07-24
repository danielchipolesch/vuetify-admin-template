<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    { text: 'Dashboard', icon: 'mdi-home', to: '/'},
    { text: 'Documento', icon: 'mdi-account-multiple', to: '/documento' },
    { text: 'Starred', icon: 'mdi-star' },
    { text: 'Recent', icon: 'mdi-history' },
    { text: 'Offline', icon: 'mdi-check-circle' },
    { text: 'Uploads', icon: 'mdi-upload' },
    { text: 'Backups', icon: 'mdi-cloud-upload' }
]);

const activeItem = ref(false)
</script>

<template>
    <v-list>
          <v-list-item
            prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
            subtitle="john@google.com"
            title="John Leider"
          >
            <template v-slot:append>
              <v-btn icon="mdi-menu-down" size="small" variant="text"></v-btn>
            </template>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list lines="false" nav>
          <v-list-item
            v-for="(item, i) in model"
            :key="i"
            :value="item"
            rounded
            :ripple="true"
            :active="false"
            :to="item.to"
            >
            <!-- color="primary" -->
          <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>
            
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
</template>

<style lang="scss" scoped></style>