<template>
  <div class="header">
    <b-navbar toggleable="md" type="dark" variant="info" sticky="true">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#/">Axia
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>

        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-item href="#/get-discovered">Get Discovered</b-nav-item>
          <b-nav-item href="#/songs">Explore</b-nav-item>
          <b-nav-item href="#/login">Login</b-nav-item>
          <b-nav-item href="#/login">Sign Up</b-nav-item>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>

    <!-- navbar-1.vue -->
  </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'header',
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
.bg-info {
    background-color: #fff !important;
    height: 99px;
}
.navbar-dark .navbar-nav .nav-link {
    color: #000;
    font-size:26px;
}
.navbar-dark .navbar-nav .nav-link {
    color: #000;
}
.navbar-dark {
  color:#000;
}
.navbar-dark .navbar-brand {
    color: #000;
    font-size: 33px;
}
</style>
