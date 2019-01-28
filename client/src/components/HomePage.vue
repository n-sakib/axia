<template>
  <!-- Hero Homepage Section -->
  <div class="body">
  <div class="hero">
    <div class="detail">
      <b-row>
       <b-col cols="6">
         <h1>A&R For the Digital Age</h1>
         <p>Where new artists, songwriters, producers, and creators deviate from anomalies.</p>
       </b-col>
       <b-col cols="6">3 of 3</b-col>
     </b-row>
    </div>
  </div>

  <!-- Collaborate Section -->
  <div class="collaborate">
    <div class="detail">
      <b-row>
        <b-col cols="6"></b-col>
       <b-col cols="6">
         <h1>Collaborate with Industry Talent</h1>
         <p>We put the ability to select what artists we work with right back into the hands of the true A&R – the buying public. Convincing the public to spend their money and time supporting your art is true A&R.</p>
       </b-col>
     </b-row>
    </div>
  </div>

  <!-- Pricing Section -->
  <div class="pricing">
    <b-row>
    <div class="detail">
       <b-col cols="6">
         <h1>Pricing For Creative Minds</h1>
         <p>We have pricing options for every workflow. Subscriptions & per-project licenses.</p>
       </b-col>
    </div>
    <div class="detail-image">
      <b-col cols="6">3 of 3</b-col>
    </div>
  </b-row>

  </div>
</div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {}
  }
}
</script>
<style>
.hero {
  background-color: #fff;
  height: 600px;
}
.hero .detail {
  margin-top: 50px;
}
.hero detail {
  margin-top: 10px;
}
.collaborate {
  background-color: #F7F7F7;
  height: 600px;
}
.pricing {
  background-color: #fff;
  height: 600px;
}
.detail {
  padding-top: 33px;
}
</style>
