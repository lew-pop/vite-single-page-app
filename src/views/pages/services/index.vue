<template>
  <main class="position-relative zindex-2">
    <Navbar :absolute="true" />

    <PageTitle />

    <Contact />
  </main>

  <ServiceFooter />

  <BackToTop />
</template>

<script lang="ts" setup>
import Navbar from '@/layouts/partials/Navbar.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'
import PageTitle from '@/views/pages/services/components/PageTitle.vue'
import Contact from '@/views/pages/services/components/Contact.vue'
import ServiceFooter from '@/views/pages/services/components/ServiceFooter.vue'
</script>
