<template>
  <!-- Hero Homepage Section -->
  <div class="body">
    <b-container class="homepage">
    <div class="hero">
      <div class="detail">
        <b-row>
         <b-col cols="12">
           <div class="herocontent">
               <hooper ref="carousal" @slide="updateCarousel">
                 <slide>
                    <h1>Collaborate. License Your Music. Get Discovered.</h1>
                    <p>Welcome to a new, better music company.</p>
                    <button class="">Get Started</button>
                </slide>
              </hooper>
              <button @click.prevent="slidePrev">prev</button>
               <input v-model="carousalData" type="number" min="0" max="3">
               <button @click.prevent="slideNext">next</button>
          </div>
         </b-col>
       </b-row>
      </div>
    </div>
  </b-container>
  <!-- Our Mission Section -->
  <div class="collaborate">
    <div class="detail">
      <b-container class="homepage">
      <b-row>
        <b-col cols="6">
          <h1>This is What We Do</h1>
        </b-col>
        <b-col cols="6">
         <p class="landing-copy">We are propelled by technology and fueled by passionate executives with proven expertise, keen instincts, and ademonstrated penchant for winning. At our core, we use music as a vehicle to move pop and youth culture forward by building artists into thriving businesses, crystallizing unforgettable moments in time, and architecting legendary experiences for their audiences.</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="6">
          <h1>AXIA in Motion</h1>
        </b-col>
        <b-col cols="6">
         <h1></h1>
         <p class="landing-copy">AXIA Records breaks artists by combining authentic artist development with cutting-edge technology, defining and growing artists' fanbases, giving those audiences exactly what they want: superstars that move and inspire them, incredible music that makes them feel alive, colorful memories that last forever.</p>
         <p></p>
         <p class="landing-copy">AXIA suports its artists with high-quality recording, creative mulimedia, marketing analytics, touring merchandising, and song distribution services, providing the resources our artists need in order to develop their creative strategy, sound, imaging, video, live performances, and merchandising.</p>
        </b-col>
      </b-row>
      </b-container>
    </div>
  </div>

  <b-container class="homepage">
  <!-- Landing Page 3 -->
  <div class="process">
    <div class="detail">
      <b-row>
        <b-col cols="6">
          <h1>Our Process</h1>
            <p class="landing-copy">1.</p>
            <p class="landing-copy">2.</p>
            <p class="landing-copy">3.</p>
        </b-col>
        <b-col cols="6">
            <p class="landing-copy">OPEN An Account: Tell us about you by answering a series of questions to help us get a better sense of who you are, what you've done so far, and what you'd like to do. This way, we can let you know what we can do for you and how we can move forward together. We're excited to meet you!</p>
            <p></p>
            <p class="landing-copy">UPLOAD Your Muisc: Share your music, videos, and creative work with us. Our team, made up of music, tech, e-sports, tv/film, and entertainment industry executives, is reflective of who matter to you most - the streaming and buying general public.</p>
            <p></p>
            <p class="landing-copy">SUBMIT Your Work: If we like what we hear, we will reach out to get to know you better. If it's a fit, we work with you to build your brand-as-a-business, focusing on your artistry, skillset, target-audience, and star power using intelligent, organized strategy that will uniquely benefit you.</p>
        </b-col>
      </b-row>
    </div>
  </div>
  </b-container>
  <!-- Landing Page 4 -->
  <div class="dream">
    <b-container class="homepage">
    <div class="detail">
      <b-row>
       <b-col cols="6">
         <h1>So, Is Your Dream Worth It?</h1>
       </b-col>
      <b-col cols="6">
        <p class="landing-copy">We're committed to leaving our mark on this world through the music we make and the artists we work alongside. AXIA beleives music is life, and we want to share everything our team has to offer with you. Are you ready?</p>
        <p></p>
        <p class="landing-copy">We strive for success and achieving greatness with those who are willing to sacrifice, just as we do, in order to realize their dreams. Is your dream worth it? Send us your music today.</p>
        <p></p>
        <p class="landing-copy">Come along on this journey with us. We promise to provide you with the resources you need to realize your passion. Dream big with us.</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="6">
        <h1>Show Us Your Magic</h1>
      </b-col>
      <b-col cols="6">
        <p class="landing-copy">First impressions matter a lot. Take the time to send us what you feel is the best reflection of who you are as an artist or act - the sound that captures the spirit of everything that you, your music, and art, mean.</p>
        <p></p>
        <p class="landing-copy">Think of it this way - if you were to not release anything else moving forward, what would your final project be? What would it sound like, look like, and feel like? That's what we want when we're introduced to you.</p>
        <p></p>
        <p class="landing-copy">Show us your magic</p>
      </b-col>
    </b-row>
    </div>
  </b-container>
  </div>
</div>
</template>

<script>
import { Hooper, Slide, Progress as HooperProgress, Navigation as HooperNavigation } from 'hooper'

export default {
  name: 'home',
  components: {
    Hooper,
    Slide,
    HooperProgress,
    HooperNavigation
  },
  data () {
    return {
      carousalData: 0,
      hooperSettings: {
        itemsToShow: 1,
        centerMode: true,
        progress: true,
        playSpeed: 2000,
        autoplay: true
      }
    }
  },
  watch: {
    carousalData () {
      this.$refs.carousal.slideTo(this.carousalData)
    }
  },
  methods: {
    slidePrev () {
      this.$refs.carousal.slidePrev()
    },
    slideNext () {
      this.$refs.carousal.slideNext()
    },
    updateCarousel (payload) {
      this.myCarousalData = payload.currentSlide
    }
  }
}
</script>
<style>
.hero {
  background-color: #fff;
  height: 400px;
}
.hero .herocontent {
  margin-top: 66px;
  margin-left: 33px;
  margin-right: 33px;

}
.hero .herocontentimg {
  margin-top: 76px;
  max-width: 475px;
  text-align: left;
}
.collaborate {
  background-color: #F7F7F7;
  position: relative;
  text-align: left;
  margin-top: 0px;
  display: block;
  overflow: auto;
  color: #27282a;
}
.dream {
  background-color: #F7F7F7;
  position: relative;
  text-align: left;
  margin-left: 0px;
  margin-top: 0px;
  display: block;
  overflow: auto;
  color: #27282a;

}
p.landing-copy {
  font-size: 12px;
  text-align: left;
  position: relative;
  margin-left: 40.5px;
  margin-top: 16px;
  color: #27282a;
}
.process {
  background-color: #fff;
  display: block;
  overflow: auto;
}
.pricing {
  background-color: #272727;
  display: block;
  overflow: auto;
}
.detail {
  padding-top: 33px;
}
.section {
  background-color: #272727;
}
</style>
