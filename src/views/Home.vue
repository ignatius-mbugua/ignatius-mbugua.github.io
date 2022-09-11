<template>
  <v-container>
    <Header />
    <About />
    <Services />
    <Portfolio />
    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      fab
      dark
      fixed
      bottom
      right
      color="blue"
      @click="toTop"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import Header from "@/components/Header";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";

export default {
  components: {
    Header,
    Services,
    About,
    Portfolio,
  },
  data: () => ({
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

<style scoped>
.container {
  max-width: 1300px;
}
</style>
