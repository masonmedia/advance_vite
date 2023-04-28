<template>
    <div>
        <div v-if="layout === 1"  class="row min-vh-100 bg-light">
            <div class="col-lg-6 min-vh-50 d-flex flex-column my-auto p-5">
                <h4 class="text-secondary fw-bold m-0" v-html="microTitle"></h4>
                <h1 class="fw-bold display-3 lh-1 my-3" v-html="title"></h1>
                <p class="fs-4 fw-light mb-4" v-html="text"></p>
                <IconSupport />
            </div>
            <div class="col-lg-6 px-5 py-lg-5">
                <TransitionGroup name="fade" mode="out-in">
                    <div :key="1"  @load="loadImage" v-show="!isLoaded" class="placeholder placeholder-lg col-12 w-100 min-vh-50 bg-success" style="min-height: 500px;"></div>
                    <img :key="2" @load="loadImage" v-show="isLoaded" class="fade-in w-100 h-100 rounded-3" style="object-fit: cover;" :src="img" :alt="imgAlt">
                </TransitionGroup>
            </div>
        </div>

        <div v-if="layout === 2"  class="row min-vh-100 bg-light">
            <div class="col-lg-6 px-5 py-lg-5">
                <TransitionGroup name="fade" mode="out-in">
                    <div :key="1"  @load="loadImage" v-show="!isLoaded" class="placeholder placeholder-lg col-12 w-100 min-vh-50 bg-success" style="min-height: 500px;"></div>
                    <img :key="2" @load="loadImage" v-show="isLoaded" class="fade-in w-100 h-100 rounded-3" style="object-fit: cover;" :src="img" :alt="imgAlt">
                </TransitionGroup>
            </div>
            <div class="col-lg-6 min-vh-50 d-flex flex-column my-auto p-5">
                <h4 class="text-secondary fw-bold m-0" v-html="microTitle"></h4>
                <h1 class="fw-bold display-3 lh-1 my-3" v-html="title"></h1>
                <p class="fs-4 pe-0 pe-md-5 fw-light mb-4" v-html="text"></p>
                <IconSupport />
                </div>
            </div>

            <div v-if="layout === 3" class="row min-vh-100" :class="rowClass">
                <div class="col-lg-8 min-vh-50 d-flex flex-column my-auto p-5">
                <h4 :style="dark ? 'color: darkgrey !important' : '' " class="text-secondary fw-bold m-0" v-html="microTitle"></h4>
                <h1 class="fw-bold lh-1 display-4 my-3" v-html="title"></h1>
                <p class="fs-4 col-md-10 fw-light mb-4" v-html="text"></p>
                <IconSupport />
                </div>
            </div>
            
            <div v-if="layout === 4" class="row">
                <div class="col-lg-12 px-5 pt-5">
                    <TransitionGroup name="fade" mode="out-in">
                        <div :key="1"  @load="loadImage" v-show="!isLoaded" class="placeholder placeholder-lg col-12 w-100 bg-success" style="min-height: 500px;"></div>
                        <img :key="2" @load="loadImage" v-show="isLoaded" class="fade-in w-100 h-100 rounded-3" style="object-fit: cover;" :src="img" :alt="imgAlt">
                    </TransitionGroup>
                </div>
            </div>

        </div>
</template>

<script setup>
import useImageLoader from '../stores/useImageLoader'
import IconSupport from '@/components/icons/IconScrollDown.vue'

// check image loaded
const { isLoaded, loadImage } = useImageLoader();

defineProps({
    layout: Number,
    microTitle: String,
    title: String,
    text: String,
    img: String,
    imgAlt: String,
    rowClass: String,
    dark: Boolean
})
</script>

<style lang="scss" scoped>

</style>