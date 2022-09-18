<template>
  <section id="header" class="my-3 py-10">
    <v-row class="align-md-center">
      <v-col cols="12" sm="6">
        <div class="text-center">
          <h1 class="display-2 font-weight-bold mb-3">Ignatius Mbugua</h1>

          <h2 class="subheading font-weight-regular">Web Developer</h2>
        </div>
      </v-col>
      <v-col cols="12" sm="6">
        <v-img
          height="300px"
          contain
          src="../assets/img/undraw_dev_productivity.svg"
          alt="header image"
        ></v-img>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: "Header",
};
</script>
