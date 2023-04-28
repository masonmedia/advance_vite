<template>
    <footer>
        <div class="container-fluid">
            <div class="row bg-dark py-5 text-light">
                <div class="col-lg-3 col-md-6 d-flex flex-column me-auto p-5"
                v-for="(item, index) in data.footer2" :key="index">
                    <h3 class="fw-bold lh-1 mb-3">{{ item.title }}</h3>
                    <ul class="d-flex flex-column me-auto list-unstyled"
                    v-if="item.links">
                        <li class="" v-for="link in item.links" :key="link.id">
                            <div v-if="checkLink(link.url)">
                                <a :href="link.url" 
                                class="fs-5"
                                target="_blank" v-html="link.title"></a>
                                <!-- <span class="visually-hidden fs-1">Test</span> -->
                            </div>

                            <router-link v-else 
                            :to="link.url" 
                            class="fs-5"
                            v-html="link.title"></router-link>
                        </li>
                    </ul>
                    <ul class="d-flex flex-column me-auto list-unstyled"
                    v-else>
                        <li class="fs-5" v-for="(i, index) in item.text" :key="index">
                            {{ i }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import data from '@/json/data'

let text = "Hello World, welcome to the universe.";
let result = text.includes("world");

function checkLink(link) {
   return link.includes('https://') ? true : link.includes('http://') ? true : '';
   console.log('link is an external url')
}

const footerData = ref([
    {
        "title": "Office",
        "text": [
            "188 Inkerman Street",
            "Guelph, Ontario",
            "N1H 3E1"
        ]

    }
])
</script>

<style lang="scss" scoped>

</style>