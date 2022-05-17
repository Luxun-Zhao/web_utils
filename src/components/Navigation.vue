<template>
  <v-navigation-drawer
      app
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
  >
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-icon>mdi-tools</v-icon>
      </v-list-item-avatar>

      <v-list-item-title>My Tools</v-list-item-title>

      <v-btn
          icon
          @click.stop="mini = !mini"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item-group
          v-model="currentRoute"
      >
        <v-list-item
            v-for="item in router.options.routes"
            :key="item.name"
            link
            @click="router.push(item.path)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import router from "@/router";

export default {
  name: "Navigation",
  data: () => ({
    drawer: true,
    mini: true,
    currentRoute: null,
    router
  }),
}
</script>

<style scoped>

</style>
