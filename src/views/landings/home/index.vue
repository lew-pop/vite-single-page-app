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
import DevAgency1Hero from '@/views/landings/home/components/DevAgency1Hero.vue'
import About from '@/views/landings/home/components/About.vue'
import UseCase from '@/views/landings/home/components/UseCase.vue'
import Feature from '@/views/landings/home/components/Feature.vue'
import Testimonial from '@/views/landings/home/components/Testimonial.vue'
import DevAgency1Footer from '@/views/landings/home/components/DevAgency1Footer.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'
import Contact from '@/views/landings/home/components/Contact.vue'

</script>
