<template>
    <div class="row min-vh-50" :class="rowClass">
        <div class="col-lg-9 d-flex flex-column justify-content-center" :class="colClass">
            <slot></slot>
            <div class="mt-3" v-if="icon === true">
            <Icon  />
            </div>
        </div>
    </div>
</template>

<script setup>
import Icon from './icons/IconSCrollDown.vue'

defineProps({
  rowClass: String,
  colClass: String,
  icon: Boolean
})
</script>

<style lang="scss" scoped>

</style>