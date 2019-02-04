<template>
  <div class="footer">
    <b-container fluid class="bv-example-row">
    <b-row>
    <b-col cols="2">
      <h3 class="playlist-footer">PLAYLIST</h3>
      <ul>
        <li>What's New</li>
        <li>Cinematic</li>
        <li>Electronic</li>
        <li>View All</li>
      </ul>
    </b-col>
    <b-col cols="2">
      <h3 class="product-footer">PRODUCT</h3>
      <ul>
        <li>Licence</li>
        <li>Custom Music</li>
        <li>Music</li>
      </ul>
    </b-col>
    <b-col cols="2">
      <h3 class="about-us-footer">ABOUT US</h3>
      <ul>
        <li>Our Story</li>
        <li>Axia Blog</li>
      </ul>
    </b-col>
    <b-col cols="6">
      <div class="footer-right">
        /* Right footer content here */
      </div>
    </b-col>
  </b-row>
    </b-container>

<div class="bottom-nav-bar">
        <ul>
          <li class="facebook-icon"></li>
          <li class="twitter-icon"></li>
          <li class="instagram-icon"></li>
          <li class="soundcloud-icon"></li>
          <li class="youtube-icon"></li>
          <li class="bottom-nav-bar-links">Privacy Policy</li>
          <li class="bottom-nav-bar-links">Terms of Use</li>
          <li class="bottom-nav-bar-links">Contact Us</li>
        </ul>
    </div>
  </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'footer',
  data () {
    return {}
  },
  components: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
h3.customer-support-footer {
  color:#ff6600;
}
h3.about-us-footer {
  position: relative;
    text-align: left;
      margin-left: 33px;
}
h3.product-footer {
  position: relative;
    text-align: left;
      margin-left: 33px;
}
h3.playlist-footer {
  position: relative;
  text-align: left;
  margin-left: 33px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  font-size: 12px;
  text-align: left;
  position: relative;
    margin-left: 35px;
    margin-bottom: 16px;
}
li.customer-support-list {
  color: #ff6600;
}
a {
  color: #42b983;
}
.footer {
  height: 500px;
  background-color: #000;
  text-align: center;
  color: #9000fa;
}
.footer .footer-right {
  background-color: #8f1717;
  height: 500px;
  width: 100%;
  float: right;
  position: absolute;
}
.bottom-nav-bar {
  background-color: #42b983;
  height: 100px;
  overflow: hidden;
  position: relative;
  margin-top: 322.5px;
  width: 100%;
}
li.bottom-nav-bar-links {
  display: inline-block;
  position: relative;
  font-size: 12px;
}
.bg-info {
    background-color: #17a2b8 !important;
    height: 99px;
}
.navbar-dark .navbar-nav .nav-link {
    color: #000;
    text-size:26px;
}
.navbar-dark .navbar-nav .nav-link {
    color: #000;
}
</style>
