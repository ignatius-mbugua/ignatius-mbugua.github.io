<template>
  <v-container>
    <Header />
    <Skills />
    <About />
    <Portfolio />
    <ScrollToTop />
  </v-container>
</template>

<script>
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import ScrollToTop from "@/components/ScrollToTop";

export default {
  components: {
    Header,
    Skills,
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
