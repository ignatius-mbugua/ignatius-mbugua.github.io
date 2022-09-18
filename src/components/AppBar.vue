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

    <!-- Dark mode switch -->

    <v-switch
      v-model="darkmode"
      color="white"
      class="ml-2 mt-5"
      prepend-icon="mdi-white-balance-sunny"
      append-icon="mdi-moon-waning-crescent"
    ></v-switch>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
  data: () => ({
    darkmode: false,
  }),
  methods: {
    toggleTheme(val) {
      this.$vuetify.theme.dark = val;
    },
  },
  watch: {
    darkmode: function (val) {
      this.toggleTheme(val);
    },
  },
};
</script>
