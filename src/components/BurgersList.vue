<template>
  <v-list lines="one">
    <h2 class="text-center">Бургеры</h2>
    <v-card v-for="burger in store.burgers" :key="burger.id" class="line">
      <v-row justify="space-between" class="pa-4">
        <v-card-item>
          <v-card-title>
            {{ burger.name }}
          </v-card-title>
          <v-card-subtitle>
            {{ burger.ingridients.join(", ") }}
          </v-card-subtitle>
        </v-card-item>
        <v-card-item>
          <v-card-title>
            {{ burger.price + " рублей" }}
          </v-card-title>
          <v-card-subtitle>
            {{ burger.grams + " гр." }}
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
