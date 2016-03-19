import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/Home'
import Hello from './components/Hello'
import Orale from './components/Orale'
import Swiper from './components/Swiper'

Vue.use(VueRouter)

export var router = new VueRouter()

router.map({
  '/home': {
    component: Home
  },
  '/hello': {
    component: Hello
  },
  '/orale': {
    component: Orale
  },
  '/swiper': {
    component: Swiper
  }
})

router.redirect({
  '*': '/home'
})

router.start(App, '#app')
