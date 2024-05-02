<template>
  <footer class="footer pt-5 pb-4 pb-lg-5">
    <b-container class="text-center pt-lg-3">
      <div class="navbar-brand justify-content-center text-dark mb-2 mb-lg-4">
        <img src="https://cali-girl-assets.s3.us-west-1.amazonaws.com/logo-no-bg.svg" class="me-2" width="60" alt="Cali-Girl Notary" />
        <span class="fs-4">Cali-Girl Notary</span>
      </div>
      <ul class="nav justify-content-center pt-3 pb-3 pb-lg-4">
        
        <li class="nav-item">
         <router-link :to="{ name: 'pages.about' }">
          <a href="#" class="nav-link">About</a>
         </router-link>   
        </li>
        <li class="nav-item">
         <router-link :to="{ name: 'pages.services' }">
          <a href="#" class="nav-link">Services</a>
         </router-link>   
        </li>
        <li class="nav-item">
         <router-link :to="{ name: 'pages.single-post' }">
          <a href="#" class="nav-link">Blog</a>
         </router-link>   
        </li>
        <li class="nav-item">
         <router-link :to="{ name: 'pages.contacts-2' }">
          <a href="#" class="nav-link">Contacts</a>
         </router-link>   
        </li>
        <li class="nav-item">
         <router-link :to="{ name: 'pages.faq' }">
          <a href="#" class="nav-link">FAQ</a>
         </router-link>   
        </li>
        <li class="nav-item">
         <router-link :to="{ name: 'pages.privacy' }">
          <a href="#" class="nav-link">Privacy</a>
         </router-link>   
        </li>
  
      </ul>
     
       <div class="d-flex flex-sm-row justify-content-center">
        <h4>Socials:</h4>
       </div>
     
        
      
      <div class="d-flex justify-content-center pt-1 mt-lg-3">
        <a
            href="https://www.instagram.com/caligirlnotary?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noreferrer noopener"
            class="btn btn-icon btn-secondary btn-instagram mx-2"
            aria-label="Instagram"
          >
            <Icon :icon="InstagramIcon" class="bx"></Icon>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61550899560335&mibextid=LQQJ4d"
            target="_blank"
            rel="noreferrer noopener"
            class="btn btn-icon btn-secondary btn-facebook mx-2"
            aria-label="Facebook"
          >
            <Icon :icon="FacebookIcon" class="bx"></Icon>
          </a>
          <a
            href="http://linkedin.com/in/miryam-scott-52aa68177"
            target="_blank"
            rel="noreferrer noopener"
            class="btn btn-icon btn-secondary btn-linkedin mx-2"
            aria-label="LinkedIn"
          >
            <Icon :icon="LinkedinIcon" class="bx"></Icon>
          </a>        
      </div>
      <p class="nav d-block fs-sm text-center pt-5 mt-lg-4 mb-0">
        <span class="opacity-80">&copy; 2024 Cali-Girl Notary. All rights reserved. Made by </span>
        <a
          class="nav-link d-inline-block p-0"
          href="https://github.com/lew-pop"
          target="_blank"
          rel="noopener"
          >Blossoms</a
        >
      </p>
    </b-container>
  </footer>
</template>

<script setup lang="ts">

import { Icon } from '@iconify/vue'
import { FacebookIcon, InstagramIcon, LinkedinIcon } from '../data'


</script>
