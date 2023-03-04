import { createRouter, createWebHistory } from "vue-router";
import AuthLayout from '../layout/AuthLayout.vue'
import ContentLayout from '../layout/ContentLayout.vue'
// import Home from '../layout/Home.vue'
const routes = [
  { path: "/", redirect: "/login" },
  {path: "/login", component:AuthLayout},
  {
    path: '/content',
    component: ContentLayout,
    meta: { requiresAuth: true },
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;