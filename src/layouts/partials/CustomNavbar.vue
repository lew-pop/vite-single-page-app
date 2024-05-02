<template>
  <header
    class="header navbar navbar-expand bg-light border-bottom border-light shadow fixed-top"
    data-scroll-header
  >
    <div class="container-fluid pe-lg-4">
      <div class="d-flex align-items-center">
        <router-link
          :to="{ name: 'ui.typography' }"
          class="navbar-brand flex-shrink-0 py-1 py-lg-2"
        >
          <img src="https://cali-girl-assets.s3.us-west-1.amazonaws.com/logo-no-bg.svg" width="47" alt="Certified Notary" />
          Cali-Girl
        </router-link>
        <span class="badge bg-warning">UI Kit</span>
      </div>
      <div class="d-flex align-items-center w-100">
        <ul v-if="topBarLink" class="navbar-nav d-none d-lg-flex" style="padding-left: 11.75rem">
          <li class="nav-item" v-for="(item, idx) in topBarLink" :key="idx">
            <router-link
              :to="{ name: item.link?.name, params: item.link?.params }"
              class="nav-link"
            >
              <Icon v-if="item.icon" :icon="item.icon" class="opacity-70 fs-lg me-1" />
              &nbsp;{{ item.title }}
            </router-link>
          </li>
        </ul>

        <button
          type="button"
          class="navbar-toggler d-block d-lg-none ms-auto me-4"
          @click="useTheme.toggleSidebar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        
       
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import type { ChildrenLinkType } from '@/layouts/type'
import { Icon } from '@iconify/vue'
import { useThemeStore } from '@/stores/themes'

defineProps({
  topBarLink: {
    type: Array as PropType<ChildrenLinkType[]>
  }
})

const useTheme = useThemeStore()
</script>
