<template>
  <section data-bs-theme="dark">
    <b-container class="position-relative zindex-2 pt-5 pb-2 pb-md-0">
      <!-- Breadcrumb -->
      <b-nav class="pt-lg-4" aria-label="breadcrumb">
        <b-breadcrumb class="mb-0">
          <b-breadcrumb-item href="/">
            <Icon :icon="HomeAltIcon" class="fs-lg me-1 text-body" />
            Home
          </b-breadcrumb-item>
          <b-breadcrumb-item active>FAQs</b-breadcrumb-item>
        </b-breadcrumb>
      </b-nav>

      <b-row class="justify-content-center pt-2 mt-3">
        <b-col xl="6" lg="7" md="8" sm="10" class="text-center">
          <h1 class="mb-4 text-body">Get in Touch</h1>
          <p class="text-body fs-lg pb-3 mb-3">
            Efficient, bilingual notary services for English and Spanish speakers. Our certified
            notaries offer mobile and in-office signings. Experience hassle-free notarization.
          </p>
          <div class="d-flex justify-content-center">
            <a
              href="https://www.instagram.com/caligirlnotary?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noreferrer noopener"
              class="btn btn-icon btn-secondary btn-instagram rounded-circle mx-2"
              aria-label="Instagram"
            >
              <Icon :icon="InstagramIcon" class="bx"></Icon>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61550899560335&mibextid=LQQJ4d"
              target="_blank"
              rel="noreferrer noopener"
              class="btn btn-icon btn-secondary btn-facebook rounded-circle mx-2"
              aria-label="Facebook"
            >
              <Icon :icon="FacebookIcon" class="bx"></Icon>
            </a>
            <a
              href="http://linkedin.com/in/miryam-scott-52aa68177"
              target="_blank"
              rel="noreferrer noopener"
              class="btn btn-icon btn-secondary btn-linkedin rounded-circle mx-2"
              aria-label="LinkedIn"
            >
              <Icon :icon="LinkedinIcon" class="bx"></Icon>
            </a>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import HomeAltIcon from '@iconify/icons-bx/bx-home-alt'
import FacebookIcon from '@iconify/icons-bx/bxl-facebook'
import InstagramIcon from '@iconify/icons-bx/bxl-instagram'
import LinkedinIcon from '@iconify/icons-bx/bxl-linkedin'
</script>
