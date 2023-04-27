<script setup>
import { RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NavComponent from './components/NavComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
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
   <FooterComponent />
  </div>
</template>
