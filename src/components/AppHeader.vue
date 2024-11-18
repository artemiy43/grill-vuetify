<template>
  <v-app-bar
    class="text-white"
    color="blue-grey-darken-4"
    location="top"
    scroll-behavior="collapse"
  >
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" />

    <v-toolbar-title>Bondar</v-toolbar-title>

    <v-spacer />

    <v-icon
      class="mr-9"
      :color="theme.global.current.value.dark ? 'black' : 'white'"
      icon="mdi-theme-light-dark"
      size="32"
      @click="toggleTheme"
    />
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    :location="$vuetify.display.mobile ? 'bottom' : undefined"
    temporary
  >
    <v-list>
      <v-list-item
        v-for="(item, i) in linksList"
        :key="i"
        :prepend-icon="item.icon"
        :to="item.to"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
  import { useTheme } from 'vuetify'
  import { ref } from 'vue'
  import { linksList } from '@/utils/constants'
  // import { linksList } from ''

  const theme = useTheme()
  function toggleTheme () {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  }
  const drawer = ref(false)

// const items = [
//   {
//     title: "Foo",
//     value: "foo",
//   },
//   {
//     title: "Bar",
//     value: "bar",
//   },
//   {
//     title: "Fizz",
//     value: "fizz",
//   },
//   {
//     title: "Buzz",
//     value: "buzz",
//   },
// ];
</script>
