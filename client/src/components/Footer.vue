<template>
  <div class="footer">
    <b-row>
    <b-col cols="3">
      <h3 class="customer-support-footer">Customer Support</h3>
      <ul>
        <li class="customer-support-list">+X-XXX-XXXX-XX</li>
        <li class="customer-support-list">Start Chat</li>
        <li class="customer-support-list">E-mail</li>
      </ul>
    </b-col>
    <b-col cols="3">
      <h3>ABOUT US</h3>
      <ul>
        <li>Our Story</li>
        <li>Axia Blog</li>
      </ul>
    </b-col>
    <b-col cols="3">
      <h3>PRODUCT</h3>
      <ul>
        <li>Licence</li>
        <li>Custom Music</li>
        <li>Music</li>
      </ul>
    </b-col>
    <b-col cols="3">
      <h3>PLAYLIST</h3>
      <ul>
        <li>What's New</li>
        <li>Cinematic</li>
        <li>Electronic</li>
        <li>View All</li>
      </ul>
    </b-col>

  </b-row>
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
  color:#9000fa;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 43px;
  font-size: 12px;
}
li.customer-support-list {
  color: #9000fa;
}
a {
  color: #42b983;
}
.footer {
  height: 500px;
  background-color: #000;
  text-align: center;
  color: #ff6600;
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
