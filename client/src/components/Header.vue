<template>
  <div class="header">
    <b-navbar toggleable="md" type="dark" variant="info">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#/home">Axia
        <img src="#/home" height="66px" fluid alt="Axia" />
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>

        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-item href="#/login">Get Discovered</b-nav-item>
          <b-nav-item href="#/songs">Browse</b-nav-item>
          <b-nav-item href="#/faq">FAQ</b-nav-item>
          <b-nav-item href="#/profile">Profile</b-nav-item>
          <button class="btn btn-outline-success" type="button">Login</button>
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
    text-size:26px;
}
.navbar-dark .navbar-nav .nav-link {
    color: #000;
}
</style>
