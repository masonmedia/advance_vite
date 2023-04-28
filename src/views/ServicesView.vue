<script setup>
// import { textData } from '@/stores/data'
// const data = textData()
import data from '@/json/data'
import Hero from '../components/TheHero.vue'
import Layout from '../components/TheLayout.vue'
import Contact from '../components/TheContact.vue'

import { reactive } from 'vue'

const state = reactive({ isLoaded: false })

function imgLoaded() {
  state.isLoaded = true
  // state.isLoaded ? alert('image loaded') : ''
}

</script>

<template>
  <div>
    <div class="container-fluid px-0">

      <hero col-class="px-5 mt-5 pt-5" :icon="true">
        <h4 class="mb-3 text-secondary">Our services</h4>
        <h1 class="fw-bold display-3 lh-1">Advance Therapy specializes in a range of rehabilitation services including academic support, job coaching, addictions support, physical rehabilitation, and more.</h1>
      </hero>

      <!-- <div class="row">
        <div class="col-lg-12 px-5 pt-5">
         <img class="w-100 rounded" @load="imgLoaded" src="https://source.unsplash.com/random/1920x1080/?green,grass" alt="">
        </div>
      </div> -->

      <Layout 
      :layout="4"
      img="https://source.unsplash.com/random/1200x500/?green,minimal"
      />

      <!-- about -->

      <Layout 
      :layout="3"
      row-class="bg-dark text-light my-5"
      :dark="true"
      micro-title="What we do"
      title="Rebuilding lives. <br/> Empowering people."
      text="Advance Therapy offers a wide range of goal-directed services which help clients rebuild their lives following a motor vehicle accident. A Rehabilitation Therapist works directly with a client in the home or community to develop skills and level of independence over time."
      />

      <Layout 
      :layout="1"
      micro-title="Individual services"
      title="Client-focused, fully customized."
      text="We specialize in many aspects of rehabilitation including: academic support, job coaching, addictions support, behavioural interventions, complex social or emotional needs, group facilitation, physical rehabilitation, slow to recover & spinal cord damage, and we offer services to all age groups."
      img="https://source.unsplash.com/random/1200x500/?trees" />
      
      <Layout 
      :layout="2"
      micro-title="Group services"
      title="Integration, support, networking."
      text="Advance Therapy offers a range of group-based activities including basketball, biking, fishing, golf, billiards, games nights, and 'bootcamp' workouts. Activities maintain a client-therapist ratio of 3:1 and group sizes ranges from 2 to 6 clients. Group activities offer numerous benefits including community integration, social networking, development of interpersonal skills, outdoor exercise, event-planning, and reinforcement of weekly routine."
      img="https://source.unsplash.com/random/1200x500/?beach" />

      <Layout 
      :layout="1"
      micro-title="Team"
      title="Professional. Creative. Dedicated."
      text="Advance Therapy's Personal Support Workers Plus (PSWPs) focus solely on client support services including administrative tasks, appointment confirmation, liasing between treatment team and medical specialists, recording meeting notes, and transportation to appointments."
      img="https://source.unsplash.com/random/1200x500/?wood" />

      <Layout 
      :layout="3"
      micro-title="Mission"
      row-class="bg-dark text-light mb-5"
      :dark="true"
      title="Professional care with personal attention."
      text="Our team of highly trained Rehabilitation Therapists take pride in helping clients achieve their maximum recovery. We work hard to tailor our services to each client, and deliver the best in rehabilitation and support services."
      img="https://source.unsplash.com/random/1200x500/?horizon" />

      <div class="row">
        <div class="col-lg-12 px-5">
         <img class="w-100" src="https://picsum.photos/1000/600?cat" alt="">
        </div>
      </div>

      <Contact />
      
    </div>
  </div>
</template>
