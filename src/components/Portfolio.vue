<template>
  <section id="portfolio" class="my-3 py-10">
    <h1 class="primary--text text-center text-uppercase pb-5">Portfolio</h1>
    <v-row>
      <v-col cols="12" sm="12" md="4" lg="3">
        <v-card class="rounded-xl d-flex flex-column" height="100%" outlined>
          <v-img
            class="white--text align-end"
            height="200px"
            src="../assets/img/patient_medical_drug_prescription.jpg"
            alt="Medical Drug Prescription Prediction image"
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
            <v-btn
              block
              rounded
              color="primary"
              dark
              href="https://github.com/ignatius-mbugua/medical-drug-prescription-prediction"
              target="_blank"
            >
              Project Link
              <v-icon right> {{ icons.mdiOpenInNew }} </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="4" lg="3">
        <v-card class="rounded-xl d-flex flex-column" height="100%" outlined>
          <v-img
            class="white--text align-end"
            height="200px"
            src="../assets/img/doctor_drug_prescription.jpg"
            alt="Doctor Drug Prescription System image"
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
            <v-btn
              block
              rounded
              color="primary"
              dark
              href="https://github.com/ignatius-mbugua/doctor-drug-prescription-system"
              target="_blank"
            >
              Project Link
              <v-icon right> {{ icons.mdiOpenInNew }} </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="4" lg="3">
        <v-card class="rounded-xl" height="100%" outlined>
          <v-img
            class="white--text align-end"
            height="200px"
            src="../assets/img/compressed_projects_course.png"
            alt="Course Advisory image"
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
            <v-btn
              block
              rounded
              color="primary"
              dark
              href="https://github.com/ignatius-mbugua/course_advisory"
              target="_blank"
            >
              Project Link
              <v-icon right> {{ icons.mdiOpenInNew }} </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="4" lg="3">
        <v-card class="rounded-xl" height="100%" outlined>
          <v-img
            class="white--text align-end"
            height="200px"
            src="../assets/img/compressed_projects_nanotech.png"
            alt="Nanotech Website image"
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
            <v-btn block rounded color="primary" dark> Project Link </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import { mdiOpenInNew } from "@mdi/js";
export default {
  name: "Portfolio",
  data: () => ({
    icons: {
      mdiOpenInNew,
    },
  }),
};
</script>
