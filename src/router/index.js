/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from "vue-router/auto";
import { setupLayouts } from "virtual:generated-layouts";
// import { routes } from "vue-router/auto-routes";

const routes = [
  {
    path: "/",
    redirect: "home",
    component: () => import("@/layouts/default.vue"),
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("@/pages/index.vue"),
      },
      {
        path: "documento",
        name: "documento",
        component: () => import("@/components/Documento.vue"),
      },
      {
        path: "starred",
        name: "starred",
        component: () => import("@/components/Starred.vue"),
      },
      {
        path: "recent",
        name: "recent",
        component: () => import("@/components/Recent.vue"),
      },
      {
        path: "offline",
        name: "offiline",
        component: () => import("@/components/Recent.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //   routes: setupLayouts(routes),
  routes: routes,
});

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.("Failed to fetch dynamically imported module")) {
    if (!localStorage.getItem("vuetify:dynamic-reload")) {
      console.log("Reloading page to fix dynamic import error");
      localStorage.setItem("vuetify:dynamic-reload", "true");
      location.assign(to.fullPath);
    } else {
      console.error("Dynamic import error, reloading page did not fix it", err);
    }
  } else {
    console.error(err);
  }
});

router.isReady().then(() => {
  localStorage.removeItem("vuetify:dynamic-reload");
});

export default router;
