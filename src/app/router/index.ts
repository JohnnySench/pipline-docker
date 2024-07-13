import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/pages/HomeView.vue";
import EditorView from "@/pages/EditorView.vue";
import {authorizationPage} from '@pages/authorization/ui'
import SignUpView from "@pages/SignUpView.vue";
import ExampleView from "@pages/ExampleView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/editor",
      name: "editor",
      component: EditorView,
    },
    {
      path: "/sign",
      name: "auth",
      component: authorizationPage,
    },
    {
      path: "/sign-up",
      name: "signUp",
      component: SignUpView,
    },
    {
      path: "/example",
      name: "example",
      component: ExampleView,
    },
  ],
});

export default router;
