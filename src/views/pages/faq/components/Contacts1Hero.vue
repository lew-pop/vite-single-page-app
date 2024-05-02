<template>
  <Jarallax custom-class="jarallax d-none d-md-block" :options="{ speed: 0.35 }">
    <span
      class="position-absolute top-0 start-0 w-100 h-100 bg-gradient-dark-translucent"
    ></span>
    <div class="jarallax-img" :style="{ backgroundImage: `url('https://cali-girl-assets.s3.us-west-1.amazonaws.com/faq-hero.png')` }"></div>
    <div class="d-none d-xxl-block" style="height:777px"></div>
    <div class="d-none d-md-block d-xxl-none" style="height: 777px"></div>
  </Jarallax>

       
</template>


<script setup lang="ts">

import Jarallax from '@/components/Jarallax.vue'
</script>
