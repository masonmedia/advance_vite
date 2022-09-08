<script setup>
// import { textData } from '@/stores/data'
// const data = textData()
import data from '@/json/data'
import IconSupport from '@/components/icons/IconScrollDown.vue'

import { reactive } from 'vue'

const state = reactive({ isLoaded: false })

function imgLoaded() {
  state.isLoaded = true
  state.isLoaded ? alert('image loaded') : ''
}

</script>

<template>
  <div>
    <div class="container-fluid px-0">
      <div class="row mt-5 pt-5">
        <div class="col-lg-12 mt-3 px-5 py-3">
          <h1 class="fw-bold display-1 lh-1">Our Services.</h1>
        </div>
      </div>
      
      <div class="row">
        <div class="col-lg-12 px-5 pt-5">
         <img class="w-100 rounded" @load="imgLoaded" src="https://source.unsplash.com/random/1920x1080/?group" alt="">
        </div>
      </div>

      <!-- about -->

      <div class="row min-vh-100">
        <div class="col-lg-12 min-vh-50 d-flex flex-column my-auto p-5">
          <h4 class="text-secondary fw-bold m-0">Who we are</h4>
          <h1 class="fw-bold lh-1 display-3 my-3">We specialize in rehabilitation services for people with an acquired brain injury. We offer a range of services offering each client customized support for activities of daily living, educational or vocational pursuits, and community reintegration.</h1>
          <!-- <p class="h4 fw-light">Advance Therapy is a healthcare services provider based in Guelph/Kitchener-Waterloo specializing in brain injury rehabilitation. Our team of highly trained therapists help clients achieve their maximum recovery.</p> -->
          <IconSupport />
        </div>
        <!-- <div class="col-lg-6 px-5 py-lg-5">
         <img class="w-100 h-100" style="object-fit: cover" src="https://picsum.photos/1000/600?random=1" alt="">
        </div> -->
      </div>

      <div class="row min-vh-100 bg-light">
        <div class="col-lg-6 min-vh-50 d-flex flex-column my-auto p-5">
          <h4 class="text-secondary fw-bold m-0">Our philosophy</h4>
          <h1 class="fw-bold display-3 lh-1 my-3">Quality. Trust. Support.</h1>
          <p class="h4 fw-light mb-4">Advance Therapy provides the highest quality support services for each client. We work hard to develop trust with our clients, discover their strengths and challenges, and partner with them to find unique ways to support, motivate, and enable them to accomplish their goals.</p>
          <IconSupport />
        </div>
        <div class="col-lg-6 px-5 py-lg-5">
         <img class="w-100 h-100" style="object-fit: cover" src="https://source.unsplash.com/random/1920x1080/?office,landscape" alt="">
        </div>
      </div>

      <!-- services -->
      
      <div class="row min-vh-100">
        <div class="col-lg-8 offset-lg-2 d-flex flex-column my-auto mx-auto p-5 text-center">
          <h4 class="text-secondary fw-bold m-0">Our process</h4>
          <h1 class="fw-bold display-3 lh-1 my-3">Collaborative, multidisciplinary, goal-driven.</h1>
          <p class="h4 fw-light">We are committed to the highest principles of care and treatment. Our client-first process is inclusive, collaborative, and diverse. We are continually evolving to match the needs of our clients, and back our process with thorough documentation.</p>
          <!-- Our process includes client-centered rehabilitation services, multi-disciplinary and goal-driven treatment approaches, family collaboration, customized rehabilitation plans, frequent communication, and thorough documentation. -->
        </div>
        <div class="container px-5">
          <div class="row text-center">
              <div class="col-lg-4 text-center">
                <div class="p-4 border rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="" style="width: 70px">
                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                  </svg>
                  <h4 class="fw-bold text-secondary my-3">Client-centered rehabilitation</h4>
                  <!-- <p>Commodo consectetur dolore nostrud pariatur tempor ipsum Lorem veniam. Ut mollit aliqua fugiat laboris. Sint laborum tempor nisi aute ea. Do officia nulla occaecat ex veniam amet aliqua sint.</p> -->
                </div>
              </div>
              <div class="col-lg-4 text-center">
                <div class="p-4 border rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="" style="width: 80px">
                    <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clip-rule="evenodd" />
                    <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                  </svg>
                  <h4 class="fw-bold text-secondary my-3">Multi-disciplinary treatment</h4>
                    <!-- <p>Commodo consectetur dolore nostrud pariatur tempor ipsum Lorem veniam. Ut mollit aliqua fugiat laboris. Sint laborum tempor nisi aute ea. Do officia nulla occaecat ex veniam amet aliqua sint.</p> -->
                </div>
              </div>
              <div class="col-lg-4 text-center">
                <div class="p-4 border rounded">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="" style="width: 80px">
                  <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12zm2.25-3a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0113.5 9zm3.75-1.5a.75.75 0 00-1.5 0v9a.75.75 0 001.5 0v-9z" clip-rule="evenodd" />
                </svg>
                <h4 class="fw-bold text-secondary my-3">Goal-driven approaches</h4>
                    <!-- <p>Commodo consectetur dolore nostrud pariatur tempor ipsum Lorem veniam. Ut mollit aliqua fugiat laboris. Sint laborum tempor nisi aute ea. Do officia nulla occaecat ex veniam amet aliqua sint.</p> -->
                </div>
              </div>
              <div class="col-lg-4 text-center">
                <div class="p-4 border rounded">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="" style="width: 80px">
                  <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12zm2.25-3a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0113.5 9zm3.75-1.5a.75.75 0 00-1.5 0v9a.75.75 0 001.5 0v-9z" clip-rule="evenodd" />
                </svg>
                <h4 class="fw-bold text-secondary my-3">Family collaboration</h4>
                </div>
              </div>
              <div class="col-lg-4 text-center">
                <div class="p-4 border rounded">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="" style="width: 80px">
                  <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12zm2.25-3a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0113.5 9zm3.75-1.5a.75.75 0 00-1.5 0v9a.75.75 0 001.5 0v-9z" clip-rule="evenodd" />
                </svg>
                <h4 class="fw-bold text-secondary my-3">Customized rehabilitation plans</h4>
                </div>
              </div>
              <div class="col-lg-4 text-center">
                <div class="p-4 border rounded">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="" style="width: 80px">
                  <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12zm2.25-3a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0113.5 9zm3.75-1.5a.75.75 0 00-1.5 0v9a.75.75 0 001.5 0v-9z" clip-rule="evenodd" />
                </svg>
                <h4 class="fw-bold text-secondary my-3">Frequent, professional communication</h4>
                </div>
              </div>
          </div>
        </div>
      </div>

      <!-- therpists -->

      <div class="row min-vh-100">
        <div class="col-lg-6 px-5 py-lg-5">
         <img class="w-100 h-100" style="object-fit: cover" src="https://picsum.photos/1000/600?random=2" alt="">
        </div>
        <div class="col-lg-6 min-vh-50 d-flex flex-column my-auto p-5">
          <h4 class="text-secondary fw-bold m-0">Our team</h4>
          <h1 class="fw-bold lh-1 display-3 my-3">Professional care with personal attention</h1>
          <p class="h4 fw-light">Our team of highly trained Rehabilitation Therapists take pride in helping clients achieve their maximum recovery. We work hard to tailor our services to each client, and deliver the best in rehabilitation and support services.</p>
          <div class="btn btn-outline-success col-3 mt-3">Read more</div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12 px-5">
         <img class="w-100" src="https://picsum.photos/1000/600?random=3" alt="">
        </div>
      </div>

      <div class="row min-vh-50 py-5">
        <div class="col-lg-8 offset-lg-2 d-flex flex-column my-auto mx-auto p-5 text-center">
          <h4 class="text-secondary fw-bold m-0">Contact us</h4>
          <h1 class="fw-bold display-3 lh-1 my-3">Start your journey today</h1>
          <p class="h4 fw-light">Embark on your journey to recovery with us. Please get in touch for booking, details about our range of services, questions, or for more information. We look forward to hearing from you.</p>
          <div class="btn btn-success col-4 offset-4 mt-3">Contact us</div>
        </div>
      </div>


      
    </div>
  </div>
</template>
