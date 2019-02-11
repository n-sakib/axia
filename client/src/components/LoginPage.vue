<template>
  <div>
    <div class="login">
      <b-container>
        <div class="content">
          <b-row>
            <!-- LEFT -->
            <b-col>
            </b-col>
            <!-- RIGHT -->
            <b-col>
              <h2>Welcome Back</h2>
              <form v-on:submit="login">
                <b-form-input v-model="text1" type="text" name="email" placeholder="Email"></b-form-input>
                <b-form-input v-model="text1" type="text" name="password" placeholder="Password"></b-form-input>
                <b-button>LOGIN</b-button>
                <b-button>CREATE AN ACCOUNT</b-button>
              </form>
              </b-col>
            </b-row>
          </div>
        </b-container>
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
  background-color: #f7f7f7;
  height: 500px;
}
.login .content {
  padding-top: 66px;
}
</style>
