<template>
  <b-container class="primary-bg-subtle pt-5 mt-2 mt-md-4 mt-lg-5">
    <b-row class="pt-xl-3">
      <b-col md="5" class="text-center text-md-start pb-5">
        <h1 class="mb-4">Certified Notary Services</h1>
        <p class="fs-lg pb-lg-3 mb-4">
          Welcome to Cali-Girl Notary! My name is Miryam Scott, and I am a proud bilingual Latina entrepreneur.
          I provide mobile notary solutions that are tailored to your specific needs. With a strong dedication
          to excellence, I aim to make every client's experience seamless and stress-free. Your satisfaction 
          is my top priority. Please contact me today to schedule an appointment. I look forward to serving you!
        </p>
        <p class="fs-lg pb-lg-3 mb-4">
          At Cali-Girl Notary SVCS, LLC, we offer professional notary services and signing services to 
          individuals. Our mobile notary services are designed to cater to your convenience by traveling 
          to your location. We handle everything from printing and preparing documents to scanning, 
          delivering, and executing them with precision. Our services are <b>LSS certified</b>, bonded, and insured.
        </p>
        <p class="fs-lg pb-lg-3 mb-4">
          We offer full-service notary solutions, including bilingual services in English and Spanish.
        </p>
        <router-link :to="{ name: 'pages.contacts' }">
          <a href="#" class="btn btn-primary shadow-primary btn-lg">Contact Us!</a>
        </router-link>
      </b-col>
      <b-col xl="6" md="7" class="offset-xl-1 pb-4 pb-sm-3 pb-lg-0 mb-4 mb-sm-5 mb-lg-0">
        <img src="https://cali-girl-assets.s3.us-west-1.amazonaws.com/Miry.png" class="rounded-3 shadow-sm" alt="reliable notary" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">

</script>
