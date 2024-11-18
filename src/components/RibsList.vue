<template>
  <v-list lines="one">
    <h2 class="text-center">Рёбрышки</h2>
    <v-card v-for="rib in store.ribs" :key="rib.id" class="line">
      <v-row class="pa-4" justify="space-between">
        <v-card-item class="text-card">
          <v-card-title>
            {{ rib.name }}
          </v-card-title>
          <v-card-subtitle class="text-wrap" style="word-break: break-word">
            {{ rib.ingridients.join(", ") }}
          </v-card-subtitle>
        </v-card-item>
        <v-card-item>
          <v-card-title>
            {{ rib.price + " рублей" }}
          </v-card-title>
          <v-card-subtitle>
            {{ rib.grams + " гр." }}
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
