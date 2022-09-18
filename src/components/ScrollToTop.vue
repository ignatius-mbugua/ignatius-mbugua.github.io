<template>
  <v-btn
    v-scroll="onScroll"
    v-show="fab"
    fab
    dark
    fixed
    bottom
    right
    color="primary"
    @click="toTop"
  >
    <v-icon> {{mdiChevronUp}} </v-icon>
  </v-btn>
</template>

<script>
import { mdiChevronUp } from "@mdi/js";

export default {
  name: "ScrollToTop",

  data: () => ({
    mdiChevronUp,
    fab: false,
  }),
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 500;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>
