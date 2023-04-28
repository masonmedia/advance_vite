<script setup>
import { RouterView } from 'vue-router'
import NavComponent from './components/NavComponent.vue'
import Footer from './components/TheFooter.vue'
</script>

<template>
  <div class="page-fade overflow-hidden">
  <NavComponent />
  <div class="py-3"></div>
    <router-view v-slot="{ Component }">
      <transition 
      name="slide-fade"
      mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
   <Footer />
  </div>
</template>
