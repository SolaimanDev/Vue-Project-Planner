import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PlanView from '../views/Plans/PlansView.vue';
import CreateProject from '../views/Plans/CreateProject.vue';
import EditProject from '../views/Plans/EditProject.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/plans',
    name:'plans',
    component:PlanView
  },
  {
    path:'/create-project',
    name:'create-project',
    component:CreateProject
  },
  {
    path:'/project/:id',
    name:'edit-project',
    component:EditProject,
    props:true,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
