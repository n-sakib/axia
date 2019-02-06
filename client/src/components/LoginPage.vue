<template>
    <div>
        <div class="login">
          <div class="content">
        <h2>Login</h2>
        <form v-on:submit="login">
            <input type="text" name="email" /><br>
            <input type="password" name="password" /><br>
            <input type="submit" value="LOGIN" />
        </form>
        </div>
      </div>
    </div>
</template>

<script>
import router from '../router'
import axios from 'axios'
export default {
  name: 'Login',
  methods: {
    login: (e) => {
      e.preventDefault()
      let email = 'user@email.com'
      let password = 'password'
      let login = () => {
        let data = {
          email: email,
          password: password
        }
        axios.post('/api/login', data)
          .then((response) => {
            console.log('Logged in')
            router.push('/dashboard')
          })
          .catch((errors) => {
            console.log('Cannot log in')
          })
      }
      login()
    }
  }
}
</script>

<style>
.login {
  background-color: #000;
  height: 500px;
}
.login .content {
  padding-top: 66px;
}
</style>
