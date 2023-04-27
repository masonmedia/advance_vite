<script setup>
import { RouterLink, RouterView } from 'vue-router'

function imgUrl(name) {
  return new URL(`../assets/img/${name}.png`, import.meta.url).href
}
</script>


<template>
    <div>
        <nav class="navbar fixed-top navbar-light bg-white border-bottom">
            <div class="container-fluid">
                <router-link class="navbar-brand me-auto" to="/">
                    <img :src="imgUrl(`main-logo`)" alt="" style="width: 45px; filter: drop-shadow(0px 0px 0.5px #222)">
                </router-link>
                <button class="btn btn-link" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width: 30px" class="text-success">
                    <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
        </nav>

        <div class="offcanvas offcanvas-end w-100 bg-dark text-light" tabindex="-1" id="offcanvasRight" data-bs-scroll="true" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header border-bottom border-light">
            <h5 id="offcanvasRightLabel" class="mb-0 py-2">Advance Therapy</h5>
            <button type="button" class="btn-close me-2" data-bs-dismiss="offcanvas" aria-label="Close">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-x-lg text-light" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
</svg>
            </button>
        </div>
        <div class="offcanvas-body d-flex flex-column p-4">
            <!-- <img :src="imgUrl(`main-logo`)" alt="" style="width: 45px; filter: drop-shadow(0px 0px 0.5px #222)"> -->
            <div class="d-flex flex-column mt-auto" data-bs-dismiss="offcanvas">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item h1 display-3">
                        <router-link 
                        aria-current="page"
                        class="nav-link fw-bold lh-1 py-1"
                        v-for="route in $router.options.routes" :key="route.path" :to="route.path" v-html="route.name"></router-link>
                        <a href="mailto:doug@atherapy.ca" class="nav-link fw-bold lh-1 py-1">Contact</a>
                    </li>
                   
                    <!-- <li class="nav-item h1 display-3">
                        <a href="mailto:doug@atherapy.ca" class="nav-link fw-bold lh-1 py-1">Contact</a>
                    </li> -->
                </ul>
            </div>
        </div>
        </div>
    </div>
</template>

<style>
a {
    text-decoration: none;
    color: inherit;
}
</style>