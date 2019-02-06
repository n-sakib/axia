<template>
  <!-- Hero Homepage Section -->
  <div class="body"> <!-- Begin FAQ -->
  <b-container class="faqpage">
  <!-- Deleted the above <b-container class="faqpage"> that was here. Deleting allows for full page. Why? -->
     <div class="questions"> <!-- Begin Questions -->
       <b-container class="faqpage">
       <b-row>
        <b-col cols="12">
          <div class="faq-content">
            <h1>FAQ</h1>
            <p>Axia is in Motion.</p>
          </div>
        </b-col>
      </b-row>
       <b-row>
         <b-col cols="6">
           <h3 class="faq-content-q">Where is AXIA Music Located?</h3>
           <p class="faq-content-a">AXIA Music Group has offfices in Edwardsville, Illinois (St. Louis) as well as in the heart of New York City, NY.</p>
         </b-col>
         <b-col cols="6">
           <h3 class="faq-content-q">What is Lineup Media Group?</h3>
           <p class="faq-content-a"> Lineup Media Group  is a multi-entity entertainment company and the parent umbrella to AXIA Music. AXIA benefits from relationships with its sister companies within LMG, including digital streaming, merchandsing, eSports, film & television, and more.</p>
         </b-col>
       </b-row>
       <b-row>
         <b-col cols="6">
           <h3 class="faq-content-q">What Kinds of Deals does AXIA Music Group Offer?</h3>
           <p class="faq-content-a">AXIA offers giftern artists, songwriters, and music creaives recording, publishing, and managment deals. AXIA Music is a full-service record label, publishing, and management company. AXIA works side-by-side with talented artists, singers, songwriters, rappers, producers, and music creatives.</p>
         </b-col>
         <b-col cols="6">
           <h3 class="faq-content-q">What is AXIA's Philosphy?</h3>
           <p class="faq-content-a">We believe in artist's rights, independence, and ability to pursue their passions as music creatives fulltime, with an understanding of how they can earn a real living from their art and work. AXIA's founders have bult successful companies in various industries with this philosphy, but their true passions remain in music - with the artists, singers, songwriters, and creatives that drive music forward.</p>
         </b-col>
       </b-row>
       <b-row>
         <b-col cols="6">
           <h3 class="faq-content-q">How do I Submit Music to AXIA Music Group?</h3>
           <p class="faq-content-a">Click here to begin! We want to hear what you have, who you are, and where you want to go.</p>
         </b-col>
         <b-col cols="6">
           <h3 class="faq-content-q">Are there Employment Opportunities Available with AXIA?</h3>
           <p class="faq-content-a">If you'd like to join our team, please tell us about you and how you feel you'd contribute to and be a valuable asset for AXIA Music Group. We're looking forward to it.</p>
         </b-col>
       </b-row>
      <b-row>
        <b-col cols="6">
          <h3 class="faq-content-q">I Am a Member of the Press. Who May I Contact for Questions and Interviews?</h3>
          <p class="faq-content-a">Media inquiries about AXIA Music Group should be directed t oour publicity department:</p>
          <p></p>
          <p class="faq-content-a">AXIA Music Group PR: pr@axiamusicgroup.com</p>
        </b-col>
        <b-col cols="6">
          <h3 class="faq-content-q">What Kinds of Music is AXIA Music Group Looking For?</h3>
          <p class="faq-content-a">We put artists first, and in doing so, we know that true creativity has no real labels. With that said, we do love and are always listening for and looking to work with the world's leading artists at the bleeding edge of culture, whether that's Hip-Hop, Pop, Singer-Songwriter, Alt Pop, Trap Hop, Alt Rock, or other. We love all music. If it moves the people, it quite likely will move us too.</p>
        </b-col>
        </b-row>
     </b-container>
    </div> <!-- end questions -->
    </b-container>
  </div> <!-- end FAQ -->
</template>

<script>
export default {
  name: 'FAQ',
  data () {
    return {
    }
  }
}
</script>
<style>
.faqpage {
  width: 100%;
}
.questions {
  background-color: #f7f7f7;
  height: 730px;
}
.faq-content {
  margin-top: 15px;
  margin-bottom: 15px;
}
.faq-content-q {
  position: relative;
  text-align: left;
  margin-left: 40px;
  margin-top: 0px;
  color: #27282a;

}
.faq-content-a{
  font-size: 12px;
  text-align: left;
  position: relative;
  margin-left: 40.5px;
  margin-top: 16px;
  color: #27282a;

}
.hero .faq-content {
  margin-top: 150px;
  margin-left: 33px;
  margin-right: 33px;
}
</style>
