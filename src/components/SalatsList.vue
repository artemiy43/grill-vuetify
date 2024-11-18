<template>
  <v-list lines="one">
    <h2 class="text-center">Салаты</h2>
    <v-card v-for="salat in store.salats" :key="salat.id" class="line">
      <v-row justify="space-between" class="pa-4">
        <v-card-item>
          <v-card-title>
            {{ salat.name }}
          </v-card-title>
        </v-card-item>
        <v-card-item>
          <v-card-title>
            {{ salat.price + " рублей" }}
          </v-card-title>
          <v-card-subtitle>
            {{ salat.grams + " гр." }}
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
