<template>
  <!-- Hero Homepage Section -->
  <div class="body">
    <b-container class="homepage">
        <b-row>
         <b-col cols="12">
           <div class="herocontent">
             <h1>FAQ</h1>
             <p>Axia is in Motion.</p>
           </div>
         </b-col>
       </b-row>
     </b-container>

     <div class="questions">
       <b-container class="homepage">
       <b-row>
         <b-col cols="4">
           <h3>Question</h3>
           <p>here is the answer to the question</p>
         </b-col>
         <b-col cols="4">
           <h3>Question</h3>
           <p>here is the answer to the question</p>
         </b-col>
         <b-col cols="4">
           <h3>Question</h3>
           <p>here is the answer to the question</p>
         </b-col>
       </b-row>

       <b-row>
         <b-col cols="4">
           <h3>Question</h3>
           <p>here is the answer to the question</p>
         </b-col>
         <b-col cols="4">
           <h3>Question</h3>
           <p>here is the answer to the question</p>
         </b-col>
         <b-col cols="4">
           <h3>Question</h3>
           <p>here is the answer to the question</p>
         </b-col>
       </b-row>

       <b-row>
         <b-col cols="4">
           <h3>Question</h3>
           <p>here is the answer to the question</p>
         </b-col>
         <b-col cols="4">
           <h3>Question</h3>
           <p>here is the answer to the question</p>
         </b-col>
         <b-col cols="4">
           <h3>Question</h3>
           <p>here is the answer to the question</p>
         </b-col>
       </b-row>
     </b-container>
  </div> <!-- end questions -->
 </div><!-- end FAQ -->
</div><!-- end Body -->
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
.questions {
  background-color: #F7F7F7;
  height: 600px;
  width: 100%;
}
.pricing {
  background-color: #fff;
  height: 600px;
}
.detail {
  padding-top: 33px;
}
</style>
