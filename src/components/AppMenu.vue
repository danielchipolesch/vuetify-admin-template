<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    { text: 'Dashboard', icon: 'mdi-home', to: '/'},
    { text: 'Shared with me', icon: 'mdi-account-multiple', to: '/documento' },
    { text: 'Starred', icon: 'mdi-star' },
    { text: 'Recent', icon: 'mdi-history' },
    { text: 'Offline', icon: 'mdi-check-circle' },
    { text: 'Uploads', icon: 'mdi-upload' },
    { text: 'Backups', icon: 'mdi-cloud-upload' }
]);
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

        <v-list :lines="false" density="default" active nav>
          <v-list-item
            v-for="(item, i) in model"
            :key="i"
            :value="item"
            rounded
            ripple="true"
            color="primary"
            >
            <!-- :to="item.to" -->
          <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>
            
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
</template>

<style lang="scss" scoped></style>