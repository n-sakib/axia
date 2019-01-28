<template>
  <div class="footer">
    <b-row>
    <b-col cols="3">
      <h3>AXIA</h3>
      <ul>
        <li>About</li>
      </ul>
    </b-col>
    <b-col cols="3">
      <h3>ABOUT US</h3>
      <ul>
        <li>About</li>
      </ul>
    </b-col>
    <b-col cols="3">
      <h3>SUPPORT</h3>
      <ul>
        <li>About</li>
      </ul>
    </b-col>
    <b-col cols="3">
      <h3>PLAYLIST</h3>
      <ul>
        <li>About</li>
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
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.footer {
  height: 200px;
  background-color: #fff;
  text-align: center;
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
