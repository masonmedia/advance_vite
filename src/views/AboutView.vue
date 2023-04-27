<script setup>
// import { textData } from '@/stores/data'
// const data = textData()
import useImageLoader from '../stores/useImageLoader'
import Contact from '../components/TheContact.vue'
import Hero from '../components/TheHero.vue'
import Layout from '../components/TheLayout.vue'
import data from '@/json/data'
import IconSupport from '@/components/icons/IconScrollDown.vue'

// check image loaded
const { isLoaded, loadImage } = useImageLoader();
</script>

<template>
  <div>
    <div class="container-fluid px-0">
      
      <hero col-class="px-5 mt-5 pt-5" :icon="true">
        <h4 class="mb-3 text-secondary">About us</h4>
        <h1 class="fw-bold display-3 lh-1">Advance Therapy offers a wide range of goal-directed services to help clients rebuild their lives following a motor vehicle accident.</h1>
      </hero>

      <div class="row">
        <div class="col-sm-12 px-5 pt-5 min-vh-50">
          <TransitionGroup name="fade" mode="out-in">
              <div :key="1"  @load="loadImage" v-show="!isLoaded" class="placeholder placeholder-lg col-12 w-100 min-vh-50 bg-success"></div>
              <img :key="2" @load="loadImage" v-show="isLoaded" class="fade-in w-100 rounded-3" src="https://source.unsplash.com/random/1920x1080/?office,landscape" alt="">
          </TransitionGroup>
          </div>
      </div>

      <!-- about -->

      <Layout 
      :layout="3"
      micro-title="Who we are"
      title="Based in Guelph/KW, we specialize in rehabilitation services for people with an acquired brain injury. We offer a range of services offering each client customized support for activities of daily living, educational development, vocational pursuits, and community reintegration." />
      
      <Layout 
      :layout="1"
      micro-title="Our philosophy"
      title="Quality. Trust. Support."
      text="Advance Therapy provides the highest quality support services for each client. We work hard to develop trust with our clients, discover their strengths and challenges, and partner with them to find unique ways to support, motivate, and enable them to accomplish their goals."
      img="https://source.unsplash.com/random/1920x1080/?office,landscape" />

      <!-- services -->
      
      <div class="row min-vh-100 py-5">
        <div class="col-lg-8 offset-lg-2 d-flex flex-column my-auto mx-auto p-5 text-center">
          <h4 class="text-secondary fw-bold m-0">Our process</h4>
          <h1 class="fw-bold display-3 lh-1 my-3">Collaborative, multidisciplinary, goal-driven.</h1>
          <p class="h4 fw-light">We are committed to the highest principles of care and treatment. Our client-first process is inclusive, collaborative, and diverse. We are continually evolving to match the needs of our clients, and back our process with thorough documentation.</p>
        </div>
        <div class="container px-5">
          <div class="row text-center">
              <div class="col-lg-4 col-md-6 text-center">
                <div class="p-4 border rounded mb-3 bg-light" style="min-height: 330px">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="" style="width: 70px">
                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                  </svg>
                  <h4 class="h3 fw-bold text-secondary my-3">Client-centered rehabilitation</h4>
                  <p>Our focus is always client-first. The specific needs of every individual are at the center of our entire approach to health.</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 text-center">
                <div class="p-4 border rounded mb-3 bg-light" style="min-height: 330px">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="" style="width: 80px">
                    <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clip-rule="evenodd" />
                    <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                  </svg>
                  <h4 class="h3 fw-bold text-secondary my-3">Multi-disciplinary treatment</h4>
                  <p>Advance Therapy provides a range of treatment options that support and challenge clients and evolve as they do.</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 text-center">
                <div class="p-4 border rounded mb-3 bg-light" style="min-height: 330px">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="" style="width: 80px">
                  <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12zm2.25-3a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0113.5 9zm3.75-1.5a.75.75 0 00-1.5 0v9a.75.75 0 001.5 0v-9z" clip-rule="evenodd" />
                </svg>
                <h4 class="h3 fw-bold text-secondary my-3">Goal-driven approaches</h4>
                <p>Our goal-driven approach allows us to set achievable benchmarks and measure progress as clients grow.</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 text-center">
                <div class="p-4 border rounded mb-3 bg-light" style="min-height: 330px">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="" style="width: 80px">
                  <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12zm2.25-3a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0113.5 9zm3.75-1.5a.75.75 0 00-1.5 0v9a.75.75 0 001.5 0v-9z" clip-rule="evenodd" />
                </svg>
                <h4 class="h3 fw-bold text-secondary my-3">Family collaboration</h4>
                <p>Advance is proud to actively involve client families in every step of the rehabilitation process.</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 text-center">
                <div class="p-4 border mb-3 rounded bg-light" style="min-height: 330px">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="" style="width: 80px">
                  <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12zm2.25-3a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0113.5 9zm3.75-1.5a.75.75 0 00-1.5 0v9a.75.75 0 001.5 0v-9z" clip-rule="evenodd" />
                </svg>
                <h4 class="h3 fw-bold text-secondary my-3">Customized rehabilitation plans</h4>
                <p>We personalize everything we do. There are no cookie cutter approaches when dealing with the specific needs of every inidividual.</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 text-center">
                <div class="p-4 border rounded mb-3 bg-light" style="min-height: 330px">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="" style="width: 80px">
                  <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12zm2.25-3a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0113.5 9zm3.75-1.5a.75.75 0 00-1.5 0v9a.75.75 0 001.5 0v-9z" clip-rule="evenodd" />
                </svg>
                <h4 class="h3 fw-bold text-secondary my-3">Frequent communication</h4>
                <p>Advance Therapy is commited to providing consistent and thorough communication about every step of a client's plan and development.</p>
                </div>
              </div>
          </div>
        </div>
      </div>

      <!-- approach -->

      <Layout 
      :layout="2"
      micro-title="Our approach"
      title="Client-first, innovative, personalized."
      text="Advance Therapy takes pride in offering the best in personally tailored rehabilitation services for acquired brain injuries. With a committment to one-on-one attention, we continually work to provide our clients with the highest level of personal care and support."
      img="https://source.unsplash.com/random/1920x1080/?office,landscape" />

      <div class="row">
        <div class="col-lg-12 px-5">
         <img class="w-100" src="https://picsum.photos/1000/600?random=3" alt="">
        </div>
      </div>

      <Contact />
      
    </div>
  </div>
</template>
