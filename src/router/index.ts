import { createRouter, createWebHistory } from 'vue-router'
import BlancLayout from '../components/layouts/blancLayout.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      component: BlancLayout,
      children: [
        {
          path: 'login',
          name: 'Login',
          component: Login,
        },
        {
          path: 'register',
          name: 'Register',
          component: Register,
        },
      ],
    },
    {
      path: '/dashboard',
      component: BlancLayout,
      children: [
        {
          path: '',
          name: 'Dashboard',
          component: Dashboard,
        },
      ],
    },
  ],
})

export default router
