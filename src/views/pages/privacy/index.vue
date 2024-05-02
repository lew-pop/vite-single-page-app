<template>
  <Navbar :isTransparent="false" />
  <b-container class="py-4 mb-2 my-lg-3">
    <b-breadcrumb class="mb-0">
      <b-breadcrumb-item href="/">
        <Icon :icon="HomeAltIcon" class="fs-lg me-1"></Icon>
        Home
      </b-breadcrumb-item>
      <b-breadcrumb-item active>Privacy</b-breadcrumb-item>
    </b-breadcrumb>
  </b-container>
  <Policy />
  <Contacts2Footer />

  <BackToTop />
</template>

<script setup lang="ts">
import Navbar from '@/layouts/partials/Navbar.vue'
import HomeAltIcon from '@iconify/icons-bx/bx-home-alt'
import Policy from '@/views/pages/privacy/components/Policy.vue'
import Contacts2Footer from '@/views/pages/contacts/components/Contacts2Footer.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'
</script>
