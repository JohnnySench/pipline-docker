import { RouteRecordRaw } from "vue-router";
import EditorView from "@pages/EditorView.vue";
import { authorizationPage } from "@pages/authorization/ui/index.ts";
import SignUpView from "@pages/SignUpView.vue";
import ExampleView from "@pages/ExampleView.vue";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("@layouts/generalLayout"),
    meta: { transition: "slide-right" },
    redirect: "/",
    children: [
      {
        path: "/",
        name: "trello",
        component: () => import("@pages/HomeView.vue")
      }
    ]
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
