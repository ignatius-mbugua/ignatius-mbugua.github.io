<template>
  <section id="services" class="text-center my-3 py-10">
    <h1 class="primary--text text-uppercase pb-5">Skills</h1>
    <v-row>
      <!-- Services -->
      <v-col cols="12" sm="6" md="4">
        <v-card class="rounded-xl" height="100%" outlined>
          <v-icon color="primary" size="100">
            {{ icons.mdiMonitorCellphone }}
          </v-icon>
          <v-card-title class="justify-center">
            Responsive Web Design
          </v-card-title>
          <v-card-text>
            Making the visual look of websites look attractive to your visitors
            as well as make it responsive on all screens whether big or small
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-card class="rounded-xl" height="100%" outlined>
          <v-icon color="primary" size="100"> {{ icons.mdiCodeTags }}</v-icon>
          <v-card-title class="justify-center">
            Web Application Development
          </v-card-title>
          <v-card-text>
            Development of interactive websites and web apps from ecommerce, web
            portals, marketplaces single page applications as well as customize
            and add features to existing web apps
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-card class="rounded-xl" height="100%" outlined>
          <v-icon color="primary" size="100"> {{ icons.mdiWeb }} </v-icon>
          <v-card-title class="justify-center"> Web Scrapping </v-card-title>
          <v-card-text>
            Fetching of data from APIs as well as scrap data from websites
            around the internet for your custom use or analysis
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import { mdiMonitorCellphone, mdiCodeTags, mdiWeb } from "@mdi/js";
export default {
  name: "Skills",
  data: () => ({
    icons: {
      mdiMonitorCellphone,
      mdiCodeTags,
      mdiWeb,
    },
  }),
};
</script>
