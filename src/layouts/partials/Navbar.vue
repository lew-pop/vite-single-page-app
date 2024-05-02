<!-- eslint-disable vue/no-unused-vars -->
<template>
  <header class="header navbar navbar-expand-lg navbar-sticky" :class="{
    'bg-transparent': transparent && isTransparent,
    'bg-light shadow-sm': !isTransparent,
    'navbar-dark bg-dark': isDark,
    'navbar-stuck': isStuck,
    'position-absolute': absolute,
    'border-bottom': borderBottom,
    'fixed-top': fixedTop,
    'navbar-sticky': navbarSticky,
'border-bottom border-light': isBorder
  }">
    <div class="container px-3">
      <router-link class="navbar-brand pe-3" to="/">
        <img src="https://cali-girl-assets.s3.us-west-1.amazonaws.com/logo-no-bg.svg" alt="Notary services" width="47" />
        Cali-Girl Notary
      </router-link>

      <div id="navbarNav">
        <div v-if="!isMobileView">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li v-for="(item, idx) in navbarLinkData" :key="item.title" class="nav-item dropdown">
              <router-link v-if="item.link" class="nav-link" :to="{ name: item.link.name }">
                {{ item.title }}
              </router-link>

              <template v-else>
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">{{
                  item.title
                }}</a>
                
              </template>
            </li>
          </ul>
        </div>
      </div>

  
      <button class="navbar-toggler" type="button" @click="showMobileNav = !showMobileNav">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </header>

  <!--  Mobile Navbar-->
  <b-offcanvas placement="end" v-model="showMobileNav" title="Menu" header-class="border-bottom"
    footer-class="border-top">
    <template v-slot:default>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li v-for="(item, idx) in navbarLinkData" :key="item.title" class="nav-item dropdown">
          <router-link v-if="item.link" class="nav-link" :to="{ name: item.link.name }">{{
            item.title
          }}</router-link>

          
        </li>
      </ul>
    </template>

    <template v-slot:footer>
      <div class="align-content-center px-3 py-3">
      
          <img src="https://cali-girl-assets.s3.us-west-1.amazonaws.com/logo-no-bg.svg" alt="San Diego Notary Public" width="60" class="me-2" />
          Cali-Girl Notary

        
       
        
      </div>
    </template>
  </b-offcanvas>
</template>

<script lang="ts" setup>

import { onMounted, ref } from 'vue';

import { navbarLinkData } from '@/layouts/data';

import router from '@/router';

const props = defineProps({
  isDark: {
    type: Boolean,
    default: false
  },
  isTransparent: {
    type: Boolean,
    default: true
  },
  stuck: {
    type: Boolean,
    default: false
  },
  absolute: {
    type: Boolean,
    default: true
  },
  borderBottom: {
    type: Boolean,
    default: false
  },
  fixedTop: {
    type: Boolean,
    default: false
  },
  navbarSticky: {
    type: Boolean,
    default: true
  },
  isBorder: {
    type: Boolean,
    default: false
  }
});

const transparent = ref(true);
const isStuck = ref(props.stuck);

const isMobileView = ref(false);
const showMobileNav = ref(false);

onMounted(() => {
  if (!props.stuck) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 700) {
        transparent.value = false;
        isStuck.value = true;
      } else {
        transparent.value = true;
        isStuck.value = false;
      }
    });
  }

  window.addEventListener('resize', () => {
    isMobileView.value = window.innerWidth < 990;
  });

  isMobileView.value = window.innerWidth < 990;
});

const makeChunk = (input: Array<any> | undefined) => {
  if (!input) return [];
  const perChunk = 2; // items per chunk

  return input.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);
};

const currentRouteName = router.currentRoute.value.name;
</script>
