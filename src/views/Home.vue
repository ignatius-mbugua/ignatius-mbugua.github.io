<template>
  <v-container>
    <Header />
    <About />
    <Services />
    <Portfolio />
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
  data: () => ({}),
};
</script>
