<template>
  <v-list lines="one">
    <h2 class="text-center">Напитки</h2>
    <h3 class="text-center">Неалкогольные</h3>
    <v-card
      v-for="drink in store.drinks.nonAlcohol"
      :key="drink.id"
      class="line"
    >
      <v-row justify="space-between" class="pa-4">
        <v-card-item>
          <v-card-title>
            {{ drink.name }}
          </v-card-title>
        </v-card-item>
        <v-card-item>
          <v-card-title>
            {{ drink.price + " рублей" }}
          </v-card-title>
          <v-card-subtitle>
            {{ drink.grams + " мл." }}
          </v-card-subtitle>
        </v-card-item>
      </v-row>
      <v-divider></v-divider>
    </v-card>
    <h3 class="text-center">Алкогольные</h3>
    <v-card v-for="drink in store.drinks.alcohol" :key="drink.id" class="line">
      <v-row justify="space-between" class="pa-4">
        <v-card-item>
          <v-card-title>
            {{ drink.name }}
          </v-card-title>
        </v-card-item>
        <v-card-item>
          <v-card-title>
            {{ drink.price + " рублей" }}
          </v-card-title>
          <v-card-subtitle>
            {{ drink.grams + " мл." }}
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
