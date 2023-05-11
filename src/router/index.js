import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage";
import NewsPage from "@/views/NewsPage";
import ConverterPage from "@/views/ConverterPage";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/news",
    component: NewsPage,
  },
  {
    path: "/convert",
    component: ConverterPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
