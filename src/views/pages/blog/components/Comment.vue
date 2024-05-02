<template>
  <b-container class="mb-4 pt-lg-4 pb-lg-3">
    <h2 class="h1 text-center text-sm-start">0 comments</h2>
    <b-row>
      <!-- Comments -->
      <b-col lg="9">
        <!-- Comment -->
        <div class="py-4">
          <div class="d-flex align-items-center justify-content-between pb-2 mb-1">
            <div class="d-flex align-items-center me-3">
              
              <div class="ps-3">
                <h6 class="fw-semibold mb-0">Comment</h6>
                <span class="fs-sm text-muted">time</span>
              </div>
            </div>
            <a href="#" class="nav-link fs-sm px-0">
              <Icon :icon="ShareIcon" class="fs-lg me-2" />
              Reply
            </a>
          </div>
          <p class="mb-0">
            
          </p>
        </div>

        <hr class="my-2" />

        
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">

import { Icon } from '@iconify/vue'
import ShareIcon from '@iconify/icons-bx/share'
</script>
