import Vue from 'vue'
import VueRouter from 'vue-router'
import addBlog from '../components/addBlog.vue'
import showBlog from '../components/showBlog.vue'
import singleBlog from '../components/singleBlog.vue'


Vue.use(VueRouter)
 
const routes = [
  {
    path: '/',
    name: 'showBlog',
    component: showBlog
  },
  {
    path: '/add',
    name: 'addBlog',
    component: addBlog
  },
  {
    path: '/blog/:id',
    component: singleBlog
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
