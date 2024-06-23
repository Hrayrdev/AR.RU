import { createRouter, createWebHistory } from 'vue-router'
import Account from "@/views/Account.vue";

const routes = [
  {
    path: '/account/profile',
    name: 'account',
    component: Account
  },
  {
    path: '/mobileTest',
    name: 'mobileTest',
    component: Account
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
