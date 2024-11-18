<template>
  <v-list lines="one">
    <h2 class="text-center">Бургеры</h2>
    <v-card v-for="burger in store.burgers" :key="burger.id" class="line">
      <v-row class="pa-4" justify="space-between">
        <v-card-item class="text-card">
          <v-card-title>
            {{ burger.name }}
          </v-card-title>
          <v-card-subtitle class="text-wrap" style="word-break: break-word">
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
      <v-divider />
    </v-card>
  </v-list>
</template>

<script setup lang="ts">
  import { useAppStore } from '@/stores/app'
  const store = useAppStore()
</script>

<style lang="css">
.text-card {
  text-wrap: wrap;
  width: 320px;
}
</style>
