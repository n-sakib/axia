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
  <b-container fluid class="bv-example-row">
  <b-row>
  <b-col cols="6">
    <ul>
      <li class="social-media-icon-footer"><a href="https://placeholder.com"><img src="https://via.placeholder.com/33x33"></a></li>
      <li class="social-media-icon-footer"><a href="https://placeholder.com"><img src="https://via.placeholder.com/33x33"></a></li>
      <li class="social-media-icon-footer"><a href="https://placeholder.com"><img src="https://via.placeholder.com/33x33"></a></li>
      <li class="social-media-icon-footer"><a href="https://placeholder.com"><img src="https://via.placeholder.com/33x33"></a></li>
      <li class="social-media-icon-footer"><a href="https://placeholder.com"><img src="https://via.placeholder.com/33x33"></a></li>
    </ul>
  </b-col>
  <b-col cols="6">
    <ul>
      <li class="bottom-nav-bar-links">Privacy Policy</li>
      <li class="bottom-nav-bar-links">Terms of Use</li>
      <li class="bottom-nav-bar-links">Contact Us</li>
    </ul>
  </b-col>
  </b-row>
  </b-container>
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
h3.about-us-footer {
  position: relative;
  text-align: left;
  margin-left: 40px;
  margin-top: 125px;
  color: #27282a;
}
h3.product-footer {
  position: relative;
  text-align: left;
  margin-left: 40px;
  margin-top: 125px;
  color: #27282a;
}
h3.playlist-footer {
  position: relative;
  text-align: left;
  margin-left: 40px;
  margin-top: 125px;
  color: #27282a;
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
  margin-left: 40.5px;
  margin-top: 16px;
  color: #27282a;
}
a {
  color: #42b983;
}
.footer {
  height: 500px;
  background-color: #fff;
  text-align: center;
  color: #27282a;
}
.footer .footer-right {
  background-color: #f7f7f7;
  height: 500px;
  width: 100%;
  float: right;
  position: absolute;
}
.bottom-nav-bar {
  background-color: rgba(251, 127, 43, .12); /* Use rgba to only affect the parent element */
  overflow: hidden;
  position: relative;
  margin-top: 189px;
  width: 100%;
}
li.social-media-icon-footer {
  display: inline-block;
  position: relative;
  font-size: 12px;
  margin-top: 20px;
}
li.bottom-nav-bar-links {
  display: inline-block;
  position: relative;
  font-size: 12px;
  margin-top: 30px;

}
.bg-info {
    background-color: #17a2b8 !important;
    height: 99px;
}
.navbar-dark .navbar-nav .nav-link {
    color: #000;
    font-size:26px;
}
.navbar-dark .navbar-nav .nav-link {
    color: #000;
}
</style>
