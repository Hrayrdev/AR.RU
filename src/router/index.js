import { createRouter, createWebHistory } from 'vue-router'
import NavigationInfoView from "@/views/NavigationInfoView.vue";

const routes = [
  {
    path: '/',
    name: 'NavInfo',
    component: NavigationInfoView
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
