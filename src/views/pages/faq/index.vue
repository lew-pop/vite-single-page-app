<template>
  <Navbar :absolute="false"  />

  <Contacts1Hero />
  <FaqHero />
  <Details />

  <Faqs />

  <Contacts1Footer />

  <BackToTop />
</template>

<script setup lang="ts">
import Navbar from '@/layouts/partials/Navbar.vue'
import Contacts1Hero from '@/views/pages/faq/components/Contacts1Hero.vue'
import FaqHero from '@/views/pages/faq/components/FaqHero.vue'

import Details from '@/views/pages/faq/components/Details.vue'
import Faqs from '@/views/pages/faq/components/Faqs.vue'
import Contacts1Footer from '@/views/pages/faq/components/Contacts1Footer.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'
</script>
