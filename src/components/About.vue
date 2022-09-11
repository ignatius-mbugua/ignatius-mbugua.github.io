<template>
  <section id="about" class="my-3 py-10">
    <h1 class="text-center text-uppercase pb-5">About</h1>
    <v-row>
      <v-col cols="12" sm="12">
        <v-card class="rounded-xl" outlined>
          <v-row>
            <v-col cols="12" sm="6">
              <v-img
                height="300px"
                contain
                src="../assets/img/undraw_code_review.svg"
              ></v-img>
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
                  <v-chip class="ma-1"> <v-icon left>mdi-language-html5</v-icon>HTML</v-chip>
                  <v-chip class="ma-1"><v-icon left>mdi-language-css3</v-icon>CSS</v-chip>
                  <v-chip class="ma-1"><v-icon left>mdi-language-javascript</v-icon>Javascript</v-chip>
                  <v-chip class="ma-1"><v-icon left>mdi-language-python</v-icon>Python</v-chip>
                  <v-chip class="ma-1"><v-icon left>mdi-language-php</v-icon> PHP</v-chip>
                </p>
              </v-card-text>
              <v-card-subtitle>
                Frameworks:
              </v-card-subtitle>
              <v-card-text>
                <p>
                  <v-chip class="ma-1"><v-icon left>mdi-laravel</v-icon>Laravel</v-chip>
                  <v-chip class="ma-1"><v-icon left>mdi-code-tags</v-icon>Django</v-chip>
                  <v-chip class="ma-1"><v-icon left>mdi-vuejs</v-icon>Vuejs</v-chip>
                </p>
              </v-card-text>
              <v-card-subtitle>
                Database:
              </v-card-subtitle>
              <v-card-text>
                <p>
                  <v-chip class="ma-1"><v-icon left>mdi-database</v-icon>MySQL</v-chip>
                  <v-chip class="ma-1"><v-icon left>mdi-database</v-icon>MSSQL</v-chip>
                  <v-chip class="ma-1"><v-icon left>mdi-database</v-icon>SQLite</v-chip>
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
