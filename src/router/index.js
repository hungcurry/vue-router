import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/props",
    name: "props",
    component: () => import("../views/Props.vue"),
  },
  {
    path: "/emit",
    name: "emit",
    component: () => import("../views/Emit.vue"),
  },
  {
    path: "/transition",
    name: "transition",
    component: () => import("../views/transition.vue"),
  },  
  {
    path: "/transition2",
    name: "transition2",
    component: () => import("../views/transition2.vue"),
  },
  {
    path: "/ref",
    name: "ref",
    component: () => import("../views/Ref.vue"),
  },
  {
    path: "/directive",
    name: "directive",
    component: () => import("../views/Directive.vue"),
  },
  {
    path: "/slot",
    name: "slot",
    component: () => import("../views/Slot.vue"),
  },
  { // courses
    path: "/courses",
    name: "Courses",
    component: () => import("../views/Courses/index.vue"),
    children : [
      { // 動態id頁
        path: ":id",
        name: "coursesId",
        component: () => import("../views/Courses/[id].vue"),
      },
      // { 
      //   path: "286",
      //   component: () => import("../views/Courses/286.vue"),
      // },
    ]
  },
  { // 動態id頁
    path: "/courses/:id",
    name: "coursesId",
    component: () => import("../views/Courses/[id].vue"),
  },
  { // 404頁
    path: '/:domain(.*)*', 
    name: 'NotFound', 
    component: () => import('../views/Courses/404.vue')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
