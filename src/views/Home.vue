<template>
  <v-container>
    <Header />
    <Services />
    <About />
    <Portfolio />
    <ScrollToTop />
  </v-container>
</template>

<script>
import Header from "@/components/Header";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import ScrollToTop from "@/components/ScrollToTop";

export default {
  components: {
    Header,
    Services,
    About,
    Portfolio,
    ScrollToTop,
  },
};
</script>

<style scoped>
.container {
  max-width: 1300px;
}
</style>
