<template>
  <b-container class="py-2 py-lg-4 py-xl-5 mb-2 mb-md-3">
    <b-row class="py-5">
      <b-col lg="5" class="offset-lg-1">
        <h2 class="h4 mb-4">Contact Info</h2>
        <ul class="list-unstyled pb-2 pb-lg-0 mb-4 mb-lg-5">
          <li class="d-flex pb-1 mb-2">
            <a href="mailto:caligirlnotary4u@gmail.com?subject=Cali-Girl Contact Form">
              <Icon
                :icon="EnvelopeIcon"
                class="text-primary fs-xl me-2"
                style="margin-top: 0.125rem"
              />
              caligirlnotary4u@gmail.com
            </a>
          </li>
          <li class="d-flex pb-1 mb-2">
            <a href="tel:6195923797">
              <Icon
                :icon="PhoneCallIcon"
                class="text-primary fs-xl me-2"
                style="margin-top: 0.125rem"
              />
              (619) 592-3797
            </a>
          </li>
          <li class="d-flex">
            <Icon
              :icon="TimeFiveIcon"
              class="text-primary fs-xl me-2"
              style="margin-top: 0.125rem"
            />
            <div>
              <strong class="text-nav">Mon - Fri</strong>: 9:00 am - 9:00 pm
              <br />
              <strong class="text-nav">Sat - Sun:</strong>: 9:00 am - 9:00 pm
            </div>
          </li>
        </ul>
        <h2 class="h4 mb-4">Emergency/Mobile Notary Info</h2>
        <ul class="list-unstyled pb-2 pb-lg-0 mb-4 mb-lg-5">
          <li class="d-flex pb-1 mb-2">
            <a href="mailto:caligirlnotary4u@gmail.com">
              <Icon
                :icon="EnvelopeIcon"
                class="text-primary fs-xl me-2"
                style="margin-top: 0.125rem"
              />
              caligirlnotary4u@gmail.com
            </a>
          </li>
          <li class="d-flex pb-1 mb-2">
            <a href="tel:6195923797">
              <Icon
                :icon="PhoneCallIcon"
                class="text-primary fs-xl me-2"
                style="margin-top: 0.125rem"
              />
              (619) 592-3797
            </a>
          </li>
          <li class="d-flex">
            <Icon
              :icon="TimeFiveIcon"
              class="text-primary fs-xl me-2"
              style="margin-top: 0.125rem"
            />
            <div>
              <strong class="text-nav">24/7</strong>
            </div>
          </li>
        </ul>
        <div class="d-flex pt-1 pt-md-3 pt-xl-4">
          <a
            href="https://www.instagram.com/caligirlnotary?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noreferrer noopener"
            class="btn btn-icon btn-outline-secondary btn-instagram me-3"
            aria-label="Instagram"
          >
            <Icon :icon="InstagramIcon" class="bx"></Icon>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61550899560335&mibextid=LQQJ4d"
            target="_blank"
            rel="noreferrer noopener"
            class="btn btn-icon btn-outline-secondary btn-facebook me-3"
            aria-label="Facebook"
          >
            <Icon :icon="FacebookIcon" class="bx"></Icon>
          </a>
          <a
            href="http://linkedin.com/in/miryam-scott-52aa68177"
            target="_blank"
            rel="noreferrer noopener"
            class="btn btn-icon btn-outline-secondary btn-linkedin me-3"
            aria-label="LinkedIn"
          >
            <Icon :icon="LinkedinIcon" class="bx"></Icon>
          </a>
          
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import PhoneCallIcon from '@iconify/icons-bx/phone-call'
import TimeFiveIcon from '@iconify/icons-bx/time-five'
import FacebookIcon from '@iconify/icons-bx/bxl-facebook'
import InstagramIcon from '@iconify/icons-bx/bxl-instagram'
import EnvelopeIcon from '@iconify/icons-bx/bx-envelope'
import LinkedinIcon from '@iconify/icons-bx/bxl-linkedin'
</script>
