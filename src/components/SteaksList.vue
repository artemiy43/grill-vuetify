<template>
  <v-list lines="one">
    <h2 class="text-center">Бургеры</h2>
    <v-card v-for="steak in store.steaks" :key="steak.id" class="line">
      <v-row justify="space-between" class="pa-4">
        <v-card-item>
          <v-card-title>
            {{ steak.name }}
          </v-card-title>
          <v-card-subtitle>
            {{ steak.ingridients.join(", ") }}
          </v-card-subtitle>
        </v-card-item>
        <v-card-item>
          <v-card-title>
            {{ steak.price + " рублей" }}
          </v-card-title>
          <v-card-subtitle>
            {{ steak.grams + " гр." }}
          </v-card-subtitle>
        </v-card-item>
      </v-row>
      <v-divider></v-divider>
    </v-card>
  </v-list>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores/app";
const store = useAppStore();
</script>
