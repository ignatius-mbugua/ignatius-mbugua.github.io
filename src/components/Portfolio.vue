<template>
  <section>
    <h1 class="text-center">PORTFOLIO</h1>
    <v-row>
      <v-col cols="12" sm="12" md="4" lg="3">
        <v-card class="rounded-lg">
          <v-img
            class="white--text align-end"
            height="200px"
            src="../assets/patient_medical_drug_prescription.jpg"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.8)"
          >
            <v-card-title>Medical Drug Prescription Prediction</v-card-title>
          </v-img>

          <v-card-text class="text--primary">
            <div>
              A web application that prescribes medicine to a patient. It was
              developed in Django web framework and also uses Python Decision
              Trees.
            </div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="blue" text>
              View
            </v-btn>

            <v-btn color="blue" text>
              Link
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="4" lg="3">
        <v-card class="rounded-lg">
          <v-img
            class="white--text align-end"
            height="200px"
            src="../assets/doctor_drug_prescription.jpg"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.8)"
          >
            <v-card-title>Doctor Drug Prescription System</v-card-title>
          </v-img>

          <v-card-text class="text--primary">
            <div>
              A web application that assists a doctor in prescribing effective
              medicine to patients that reduces side effects. It was developed
              in Django web framework and also uses Python Decision Trees.
            </div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="blue" text>
              View
            </v-btn>

            <v-btn color="blue" text>
              Link
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="4" lg="3">
        <v-card class="rounded-lg">
          <v-img
            class="white--text align-end"
            height="200px"
            src="../assets/compressed_projects_course.png"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.8)"
          >
            <v-card-title>Course Advisory</v-card-title>
          </v-img>

          <v-card-text class="text--primary">
            <div>
              A web application that assists students in choosing the right
              course when joining the university. It was developed using the
              Laravel framework where i was actively involved in the backend and
              administration of the application.
            </div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="blue" text>
              View
            </v-btn>

            <v-btn color="blue" text>
              Link
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="4" lg="3">
        <v-card class="rounded-lg">
          <v-img
            class="white--text align-end"
            height="200px"
            src="../assets/compressed_projects_nanotech.png"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.8)"
          >
            <v-card-title>Nanotech Website</v-card-title>
          </v-img>

          <v-card-text class="text--primary">
            <div>
              A website developed using Laravel framework for the company
              Nanotech Engineering Ltd. I was fully involved in developing of
              the backend of the website to ensure easy management of its
              content.
            </div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="blue" text>
              View
            </v-btn>

            <v-btn color="blue" text>
              Link
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: "Portfolio",
};
</script>
