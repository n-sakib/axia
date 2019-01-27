<template>
  <div class="about">
    <h1>{{ header }}</h1>
    <p>{{ headerContent }}</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      header: 'Welcome to the next generation of A&R',
      headerContent: 'The old way of being discovered is overdue for innovation. Thats where Axia steps in to offer all of the resources and support of a label, without signing your soul away.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about {
  width: 800px;
}
h1, h2 {
  font-weight: normal;
  text-align: left;
}
p {
  font-weight: normal;
  text-align: left;
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
</style>
