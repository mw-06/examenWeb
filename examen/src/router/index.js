import Vue from 'vue'
import VueRouter from 'vue-router'
import visualizarAutos from '../views/visualizarAutos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'visualizarAutos',
    component: visualizarAutos
  },
  {
    path: '/crear',
    name: 'agregarAuto',
    component: () => import('../views/agregarAuto.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
