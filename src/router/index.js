import { createRouter, createWebHistory } from 'vue-router'
import NavigationInfoView from "@/views/HeaderInfo.vue";
import ANRU from "@/views/Anru.vue";
import Anru from "@/views/Anru.vue";

const routes = [
  {
    path: '/',
    name: 'Anru',
    component: Anru
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
