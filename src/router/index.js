import { createRouter, createWebHistory } from 'vue-router'
import NavigationInfoView from "@/views/HeaderInfo.vue";
import ANRU from "@/views/ANRU.vue";

const routes = [
  {
    path: '/',
    name: 'Anru',
    component: ANRU
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
