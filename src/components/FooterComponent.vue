<template>
    <footer>
        <div class="container-fluid">
            <div class="row bg-success py-5 text-light">
                <div class="col-lg-3 col-md-6 d-flex flex-column me-auto p-5"
                v-for="(item, index) in data.footer2" :key="index">
                    <h3 class="fw-bold lh-1" v-html="item.title"></h3>
                    <ul class="d-flex flex-column me-auto list-unstyled"
                    v-if="item.links">
                        <li class="" v-for="link in item.links" :key="link.id">
                            <router-link v-if="checkLink(link.url)" :to="link.url" v-html="link.title"></router-link>
                        </li>
                    </ul>
                </div>
                
                <!-- <div class="col-lg-3 col-md-6 d-flex flex-column my-auto p-5">
                    <h3 class="fw-bold lh-1">Advance Therapy</h3>
                    <router-link to="/" >Home</router-link>
                    <router-link to="/about">About</router-link>
                </div>
                <div class="col-lg-3 col-md-6 p-5">
                    <h3 class="fw-bold lh-1">Office</h3>
                    <router-link to="/">Home</router-link>
                    <router-link to="/about">About</router-link>
                </div>
                <div class="col-lg-3 col-md-6 p-5">
                    <h3 class="fw-bold lh-1">Contact</h3>
                    <router-link to="/">Home</router-link>
                    <router-link to="/about">About</router-link>
                </div>
                <div class="col-lg-3 col-md-6 p-5">
                    <h3 class="fw-bold lh-1">Resources</h3>
                    <router-link to="/">Home</router-link>
                    <router-link to="/about">About</router-link>
                </div> -->
            </div>
        </div>
    </footer>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import data from '@/json/data'

let text = "Hello World, welcome to the universe.";
let result = text.includes("world");

function checkLink(link) {
    link.includes('https://') ? true : link.includes('http://') ? true : ''
}
</script>

<style lang="scss" scoped>

</style>