<template>
  <!-- Hero Homepage Section -->
  <div class="body"> <!-- Begin FAQ -->
  <!-- Deleted the above <b-container class="faqpage"> that was here. Deleting allows for full page. Why? -->
     <div class="questions"> <!-- Begin Questions -->
       <b-container class="faqpage">
       <b-row>
        <b-col cols="12">
          <div class="faq-content">
            <h1>Get Discovered With Axia</h1>
            <p>Axia is in Motion.</p>
          </div>
        </b-col>
      </b-row>
     </b-container>
    </div> <!-- end questions -->
  </div> <!-- end FAQ -->
</template>

<script>
export default {
  name: 'GetDiscoveredPage',
  data () {
    return {
    }
  }
}
</script>
<style>
.questions {
  background-color: #f7f7f7;
  height: 730px;
}
.faq-content {
  margin-top: 15px;
  margin-bottom: 5px;
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
