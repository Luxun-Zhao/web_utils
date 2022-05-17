<template>
  <v-app>
    <Navigation></Navigation>
    <v-main>
      <v-card class="ma-8 pa-8">
        <v-card-title>
          {{$route.name}}
        </v-card-title>
        <router-view />
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
  name: 'App',
  components:{
    Navigation
  }
};
</script>
