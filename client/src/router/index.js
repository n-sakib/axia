import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/HelloWorld'
import SongsPage from '@/components/SongsPage'
import NewSong from '@/components/NewSong'
import ProfilePage from '@/components/ProfilePage'
import AboutPage from '@/components/AboutPage'
import HomePage from '@/components/HomePage'
import LoginPage from '@/components/LoginPage'
import FAQ from '@/components/FAQ'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/home',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/songs',
      name: 'Songs',
      component: SongsPage
    },
    {
      path: '/songs/add',
      name: 'NewSong',
      component: NewSong
    },
    {
      path: '/profile',
      name: 'Profile',
      component: ProfilePage
    },
    {
      path: '/about',
      name: 'About',
      component: AboutPage
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: FAQ
    }
  ]
})
