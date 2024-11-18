<template>
  <BurgersList />
  <SteaksList />
  <RibsList />
  <SalatsList />
  <DrinksList />
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores/app";
import BurgersList from "@/components/BurgersList.vue";
import SteaksList from "@/components/SteaksList.vue";
import RibsList from "@/components/RibsList.vue";
import SalatsList from "@/components/SalatsList.vue";
import DrinksList from "@/components/DrinksList.vue";
const store = useAppStore();
</script>
