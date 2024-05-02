<template>
 <section class="position-relative bg-light py-2">
   
  <b-container class="pb-5 mb-2 mb-md-4 mb-xl-5">
    <b-row>
      <b-col md="5" class="mb-4 mb-md-0">
        <div class="card justify-content-center h-100 p-4 p-lg-5"
        :style="{
                 backgroundImage: `url(https://cali-girl-assets.s3.us-west-1.amazonaws.com/bg-swirl.png)` 
                 }"
        >
          <div class="p-2">
            <h3 class="display-4 text-primary mb-1"></h3>
            <h2 class="text-light pb-5 mb-2">Comprehensive Notary Services: Secure, Efficient, and Certified Solutions</h2>
            <a
              href="#"
              class="d-inline-flex align-items-center rounded-3 text-decoration-none py-2 px-4"
              style="background-color: #ec95fd"
            >
             
              <div class="ps-1">
                <div class="text-nowrap mb-2">
                  <Icon :icon="StarIcon" class="bx text-tertiary"></Icon>
                  <Icon :icon="StarIcon" class="bx text-tertiary"></Icon>
                  <Icon :icon="StarIcon" class="bx text-tertiary"></Icon>
                  <Icon :icon="StarIcon" class="bx text-tertiary"></Icon>
                  <Icon :icon="StarIcon" class="bx text-tertiary"></Icon>
                </div>
               
              </div>
            </a>
          </div>
        </div>
      </b-col>
      <b-col md="7">
        <div class="card border-0 shadow-sm p-4 p-xxl-5">
          <!-- Slider prev/next buttons + Quotation mark -->
          <div class="d-flex justify-content-between pb-4 mb-2">
            <span class="btn btn-icon btn-primary btn-lg shadow-primary pe-none">
              <Icon :icon="QuoteIcon" class="bx"></Icon>
            </span>
            <div class="d-flex">
              <button
                type="button"
                id="prev"
                class="btn btn-prev btn-icon btn-sm me-2"
                aria-label="Previous"
              >
                <Icon :icon="ChevronLeftIcon"></Icon>
              </button>
              <button
                type="button"
                id="next"
                class="btn btn-next btn-icon btn-sm ms-2"
                aria-label="Next"
              >
                <Icon :icon="ChevronRightIcon" class="bx"></Icon>
              </button>
            </div>
          </div>

          <!-- Slider -->
          <Swiper
            class="mx-0 mb-md-n2 mb-xxl-n3"
            :modules="[Pagination, Navigation]"
            :spaceBetween="24"
            :loop="true"
            :pagination="{
              el: '.swiper-pagination',
              clickable: true
            }"
            :navigation="{
              prevEl: '#prev',
              nextEl: '#next'
            }"
          >
            <!-- Item -->
            <SwiperSlide class="h-auto" v-for="(testimonial, idx) in testimonialData" :key="idx">
              <TestimonialCard :testimonial="testimonial" />
            </SwiperSlide>

            <!-- Pagination (bullets) -->
            <div class="swiper-pagination position-relative pt-3 mt-4"></div>
          </Swiper>
        </div>
      </b-col>
    </b-row>
  </b-container>
</section>
</template>

<script setup lang="ts">
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Icon } from '@iconify/vue'
import ChevronRightIcon from '@iconify/icons-bx/bx-chevron-right'
import QuoteIcon from '@iconify/icons-bx/bxs-quote-left'
import StarIcon from '@iconify/icons-bx/bx-star'
import ChevronLeftIcon from '@iconify/icons-bx/bx-chevron-left'

import TestimonialCard from '@/views/pages/about/components/TestimonialCard.vue'
import { testimonialData } from '../data'
</script>
