<template>
  <Navbar :absolute="false" />

  <About2Hero />

  <b-container class="py-4 mb-2 my-lg-3">
    <b-breadcrumb class="mb-0">
      <b-breadcrumb-item href="/">
        <Icon :icon="HomeAltIcon" class="fs-lg me-1"></Icon>
        Home
      </b-breadcrumb-item>
      <b-breadcrumb-item active>About</b-breadcrumb-item>
    </b-breadcrumb>
  </b-container>

  <About />

  <Stats /> 
  <Faqs />

  <Testimonial />

 

  <Contact />

  <About2Footer />

  <BackToTop />
</template>

<script lang="ts" setup>
import Navbar from '@/layouts/partials/Navbar.vue'
import About2Hero from '@/views/pages/about/components/About2Hero.vue'
import About from '@/views/pages/about/components/About.vue'
import Stats from '@/views/pages/about/components/Stats.vue'
import Faqs from '@/views/pages/about/components/Faqs.vue'
import Testimonial from '@/views/pages/about/components/Testimonial.vue'
import Contact from '@/views/pages/about/components/Contact.vue'
import About2Footer from '@/views/pages/about/components/About2Footer.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'
import { Icon } from '@iconify/vue'
import HomeAltIcon from '@iconify/icons-bx/bx-home-alt'
</script>
