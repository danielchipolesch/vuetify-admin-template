<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    { text: 'Dashboard', icon: 'mdi-home', to: 'home'},
    { text: 'Documento', icon: 'mdi-text-box', to: 'documento' },
    { text: 'Starred', icon: 'mdi-star', to: 'starred'},
    { text: 'Recent', icon: 'mdi-history', to: 'recent' },
    { text: 'Offline', icon: 'mdi-check-circle', to: 'offline' },
    { text: 'Uploads', icon: 'mdi-upload' },
    { text: 'Backups', icon: 'mdi-cloud-upload' },
    { text: 'Manual de Uso', icon: 'mdi-book-open-page-variant' }
]);

const activeItem = ref(false)
const selectItem = () => {
    activeItem.value = true;
}
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

        <v-list nav>
          <v-list-item
            v-for="(item, i) in model"
            :key="i"
            :value="item"                        
            :to="item.to"
            color="primary"
            >
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>
            
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
</template>

<style lang="scss" scoped></style>