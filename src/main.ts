import { createApp, markRaw } from "vue";
import "@/app/style.pcss";
import App from "@app/App.vue";
import router from "@/app/router";
import store from "@app/store";
import { axiosInstance } from "@shared/api";

const app = createApp(App);

store.use(({ store }) => {
  store.router = markRaw(router);
  store.api = markRaw(axiosInstance);
});

app.use(router).use(store);

createApp(App).mount("#app");
