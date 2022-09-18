<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title id="top">Ignatius Mbugua</v-toolbar-title>
    <v-spacer></v-spacer>

    <!-- Links -->
    <div class="hidden-sm-and-down">
      <v-btn href="#" text @click="$vuetify.goTo('#about')"> About </v-btn>
      <v-btn href="#" text @click="$vuetify.goTo('#services')">
        Services
      </v-btn>
      <v-btn href="#" text @click="$vuetify.goTo('#portfolio')">
        Portfolio
      </v-btn>
    </div>
    <!-- Light and Dark theme -->
    <v-btn v-if="darkmode" icon @click="toggleTheme">
      <v-icon>{{ icons.mdiWhiteBalanceSunny }}</v-icon>
    </v-btn>
    <v-btn v-else icon @click="toggleTheme">
      <v-icon>{{ icons.mdiMoonWaningCrescent }}</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mdiWhiteBalanceSunny, mdiMoonWaningCrescent } from "@mdi/js";

export default {
  name: "AppBar",
  data: () => ({
    icons: {
      mdiWhiteBalanceSunny,
      mdiMoonWaningCrescent,
    },
    darkmode: false,
  }),
  methods: {
    toggleTheme() {
      this.darkmode = !this.darkmode;
      this.$vuetify.theme.dark = this.darkmode;
    },
  },
};
</script>
