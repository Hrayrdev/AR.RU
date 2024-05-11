import { createRouter, createWebHistory } from 'vue-router'
import Account from "@/views/Account.vue";

const routes = [
  {
    path: '/account',
    name: 'account',
    component: Account
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
