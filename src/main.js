import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Hello from './components/Hello'
import Orale from './components/Orale'

Vue.use(VueRouter)

export var router = new VueRouter()

router.map({
  'hello': {
    component: Hello
  },
  'orale': {
    component: Orale
  }
})

router.redirect({
  '*': 'hello'
})

router.start(App, '#app')
