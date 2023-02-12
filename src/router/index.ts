import { createRouter, createWebHistory } from 'vue-router'
import BlancLayout from '../components/layouts/BlancLayout.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

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
  ],
})

export default router
