import { RouteRecordRaw } from "vue-router";
import HomeView from "@pages/HomeView.vue";
import EditorView from "@pages/EditorView.vue";
import { authorizationPage } from "@pages/authorization/ui/index.ts";
import SignUpView from "@pages/SignUpView.vue";
import ExampleView from "@pages/ExampleView.vue";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { transition: "slide-right" }
  },
  {
    path: "/editor",
    name: "editor",
    component: EditorView
  },
  {
    path: "/sign",
    name: "auth",
    component: authorizationPage
  },
  {
    path: "/sign-up",
    name: "signUp",
    component: SignUpView,
    meta: { transition: "slide-left" }
  },
  {
    path: "/example",
    name: "example",
    component: ExampleView
  }
];
