<template>
  <Jarallax custom-class="jarallax bg-dark py-xxl-5" data-bs-theme="light">
    <span class="position-absolute top-0 start-0 w-100 h-100 bg-gradient-dark-translucent"></span>
    <div
      class="jarallax-img"
      :style="{
        backgroundImage: `url(https://cali-girl-assets.s3.us-west-1.amazonaws.com/CaliGirlHero4.png)`
      }"
    ></div>
    <div class="position-relative text-center zindex-5 overflow-hidden pt-4 py-md-5">
      <!-- Slider controls (Prev / next) -->
      <b-button
        size="lg"
        id="hero-prev"
        class="btn-prev btn-icon bg-transparent shadow-none position-absolute top-50 start-0 translate-middle-y d-none d-md-inline-flex ms-n3 ms-lg-2"
        aria-label="Previous"
      >
        <i class="bx bx-chevron-left fs-1"></i>
      </b-button>
      <b-button
        size="lg"
        id="hero-next"
        class="btn-next btn-icon bg-transparent shadow-none position-absolute top-50 end-0 translate-middle-y d-none d-md-inline-flex me-n3 me-lg-2"
        aria-label="Next"
      >
        <i class="bx bx-chevron-right fs-1"></i>
      </b-button>

      <b-container class="text-center py-xl-5">
        <b-row class="justify-content-center pt-lg-5">
          <b-col xl="8" lg="9" md="10" cols="11">
            <Swiper
              class="swiper pt-5 pb-4 py-md-5"
              :modules="[Navigation, Pagination, Autoplay, EffectCube]"
              effect="cube"
              :speed="500"
              :loop="true"
              :autoplay="{
                delay: 5000,
                disableOnInteraction: false
              }"
              :pagination="{
                el: '.swiper-pagination',
                clickable: true
              }"
              :navigation="{
                prevEl: '#hero-prev',
                nextEl: '#hero-next'
              }"
            >
              <SwiperSlide>
                <h2 class="display-2 text-light from-start mb-lg-4">
                  Empowering Your Documents with Trust and Efficiency
                </h2>
                <div class="from-end">
                  <p class="fs-xl text-light opacity-70 pb-2 mb-lg-5">
                    Need a certified notary? Our local notary services ensure your documents are
                    legally authenticated with ease and precision. Quick, reliable service
                    guaranteed.
                  </p>
                </div>
                <div class="scale-up delay-1">
                  <router-link :to="{ name: 'pages.blog' }">
                    <a href="#" class="btn btn-primary shadow-primary btn-lg">Learn More</a>
                  </router-link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h2 class="display-2 text-light from-start mb-lg-4">
                  24/7 Notary Service &amp; Mobile Notary Service
                </h2>
                <div class="from-end">
                  <p class="fs-xl text-light opacity-70 pb-2 mb-lg-5">
                    Get documents notarized at your doorstep with our mobile notary service. Secure,
                    convenient, and certified signing wherever you are. Book your appointment now!
                  </p>
                </div>
                <div class="scale-up delay-1">
                  <router-link :to="{ name: 'pages.contacts' }">
                    <a href="#" class="btn btn-primary shadow-primary btn-lg">Book Now</a>
                  </router-link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h2 class="display-2 text-light from-start mb-lg-4">
                  Comprehensive Notary Services:  Print, Prep, Scan & Document Execution
                </h2>
                <div class="from-end">
                  <p class="fs-xl text-light opacity-70 pb-2 mb-lg-5">
                    Get documents notarized at your doorstep with our mobile notary service. Secure,
                    convenient, and certified signing wherever you are. Book your appointment now!
                  </p>
                </div>
                <div class="scale-up delay-1">
                  <router-link :to="{ name: 'pages.contacts' }">
                    <a href="#" class="btn btn-primary shadow-primary btn-lg">Book Now</a>
                  </router-link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h2 class="display-2 text-light from-start mb-lg-4">
                  Experience Hassle-Free Notary Services Tailored for You
                </h2>
                <div class="from-end">
                  <p class="fs-xl text-light opacity-70 pb-2 mb-lg-5">
                    Need to Notarize Documents Without the Hassle? Enjoy the freedom of mobile
                    notarization services – we come to you, making the process as straightforward as
                    possible.
                  </p>
                </div>
                <div class="scale-up delay-1">
                  <router-link :to="{ name: 'pages.contacts' }">
                    <a href="#" class="btn btn-primary shadow-primary btn-lg">Get Started Today!</a>
                  </router-link>
                </div>
              </SwiperSlide>

              

              <!-- Pagination (bullets) -->
              <div class="swiper-pagination position-relative d-md-none pt-2 mt-5"></div>
            </Swiper>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <b-container
      class="d-flex flex-column flex-sm-row align-items-center justify-content-between position-relative zindex-5 pb-5"
    >
      <div class="d-flex mb-4 mb-sm-0">
        <a
            href="https://www.instagram.com/caligirlnotary?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noreferrer noopener"
            class="btn btn-icon btn-secondary btn-ibstagram rounded-circle me-2"
            aria-label="Instagram"
          >
            <Icon :icon="InstagramIcon" class="bx"></Icon>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61550899560335&mibextid=LQQJ4d"
            target="_blank"
            rel="noreferrer noopener"
            class="btn btn-icon btn-secondary btn-facebook rounded-circle me-2"
            aria-label="Facebook"
          >
            <Icon :icon="FacebookIcon" class="bx"></Icon>
          </a>
          <a
            href="http://linkedin.com/in/miryam-scott-52aa68177"
            target="_blank"
            rel="noreferrer noopener"
            class="btn btn-icon btn-secondary btn-linkedin rounded-circle me-2"
            aria-label="LinkedIn"
          >
            <Icon :icon="LinkedinIcon" class="bx"></Icon>
          </a>
        
      </div>
    </b-container>
  </Jarallax>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination, EffectCube } from 'swiper/modules'
import { Icon } from '@iconify/vue'
import { FacebookIcon, InstagramIcon, LinkedinIcon } from '../data'

import Jarallax from '@/components/Jarallax.vue'


</script>
