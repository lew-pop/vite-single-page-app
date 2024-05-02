<template>
  <Navbar :absolute="false" :isTransparent="false" />

  <DevAgency1Hero />

  <About />

  <UseCase />
  <Feature />
  <Testimonial />
  <Contact />
  <DevAgency1Footer />

  <BackToTop />
</template>

<script setup lang="ts">
import Navbar from '@/layouts/partials/Navbar.vue'
import DevAgency1Hero from '@/views/landing/components/DevAgency1Hero.vue'
import About from '@/views/landing/components/About.vue'
import UseCase from '@/views/landing/components/UseCase.vue'
import Feature from '@/views/landing/components/Feature.vue'
import Testimonial from '@/views/landing/components/Testimonial.vue'
import DevAgency1Footer from '@/views/landing/components/DevAgency1Footer.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'
import Contact from '@/views/landing/components/Contact.vue'

</script>
