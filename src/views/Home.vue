<template>
  <v-container>
    <Header />
    <About />
    <Services />
  </v-container>
</template>

<script>
import Header from "@/components/Header";
import Services from "@/components/Services";
import About from "@/components/About";

export default {
  components: {
    Header,
    Services,
    About,
  },
  data: () => ({}),
};
</script>
