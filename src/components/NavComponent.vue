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

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" data-bs-scroll="true" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
            <h5 id="offcanvasRightLabel">Advance Therapy</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body d-flex flex-column p-4">
            <!-- <img :src="imgUrl(`main-logo`)" alt="" style="width: 45px; filter: drop-shadow(0px 0px 0.5px #222)"> -->
            <div class="d-flex flex-column mt-auto" data-bs-dismiss="offcanvas">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link 
                        aria-current="page"
                        class="nav-link fw-bold lh-1 py-1"
                        v-for="route in $router.options.routes" :key="route.path" :to="route.path" v-html="route.name"></router-link>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    </div>
</template>

<style lang="scss">
.nav-link, .nav-item {
    font-size: 7vmin;
}
</style>