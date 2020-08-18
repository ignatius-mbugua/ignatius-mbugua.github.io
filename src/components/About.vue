<template>
  <section class="mb-4">
    <h1 class="text-center">ABOUT</h1>
    <v-row>
      <v-col cols="12" sm="12">
        <v-card class="rounded-lg" elevation="10">
          <v-row>
            <v-col cols="12" sm="6">
              <v-img src="../assets/undraw_code_review.svg"></v-img>
            </v-col>
            <v-col cols="12" sm="6">
              <v-card-title>
                SKILLS
              </v-card-title>
              <v-card-subtitle>
                Languages:
              </v-card-subtitle>
              <v-card-text>
                <p>
                  <v-chip>HTML</v-chip>
                  <v-chip>CSS</v-chip>
                  <v-chip>Javascript</v-chip>
                  <v-chip>Python</v-chip>
                  <v-chip>PHP</v-chip>
                </p>
              </v-card-text>
              <v-card-subtitle>
                Frameworks:
              </v-card-subtitle>
              <v-card-text>
                <p>
                  <v-chip>Django</v-chip>
                  <v-chip>Vuejs</v-chip>
                  <v-chip>Vuetify</v-chip>
                </p>
              </v-card-text>
              <v-card-subtitle>
                Data:
              </v-card-subtitle>
              <v-card-text>
                <p>
                  <v-chip>MySQL</v-chip>
                  <v-chip>SQL Server</v-chip>
                  <v-chip>Json</v-chip>
                </p>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

