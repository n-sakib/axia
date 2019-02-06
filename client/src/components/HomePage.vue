<template>
  <!-- Hero Homepage Section -->
  <div class="body">
    <div class="hero">
      <div class="detail">
        <b-row>
         <b-col cols="6">
           <div class="herocontent">
             <h1>A&R For the Digital Age</h1>
             <p>Where new artists, songwriters, producers, and creators deviate from anomalies.</p>
           </div>
         </b-col>
         <b-col cols="6">
           <div class="herocontentimg">
             <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image" />
             <b-img src="viaJs" fluid alt="hero" />
           </div>
         </b-col>
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
    <div class="detail">
      <b-row>
       <b-col cols="6">
         <h1>Pricing For Creative Minds</h1>
         <p>We have pricing options for every workflow. Subscriptions & per-project licenses.</p>
         <p>Need Custom Music? Learn more about collaborating with our Artist.</p>
       </b-col>
      <b-col cols="6">
        <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image" />
      </b-col>
    </b-row>
    <br>
    <b-row>
       <b-col cols="6" md="8">cols="12" md="8"</b-col>
       <b-col cols="6" md="12">cols="6" md="4"</b-col>
   </b-row>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  }
}
</script>
<style>
.hero {
  background-color: #fff;
  height: 500px;
}
.hero .herocontent {
  margin-top: 150px;
  margin-left: 33px;
  margin-right: 33px;

}
.hero .herocontentimg {
  margin-top: 76px;
  max-width: 475px;
  text-align: left;
}
.collaborate {
  background-color: #000;
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
