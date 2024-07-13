import { createApp, markRaw } from "vue";
import "@/app/styles/index.pcss";
import App from "@app/App.vue";
import router from "@/app/router";
import store from "@app/store";
import { axiosInstance } from "@shared/api";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyC5bwLVAtXq2vTHKsyM2okwfoHN9NQWbHo",
  authDomain: "jwt-auth-43434.firebaseapp.com",
  projectId: "jwt-auth-43434",
  storageBucket: "jwt-auth-43434.appspot.com",
  messagingSenderId: "145544565822",
  appId: "1:145544565822:web:31370881086b189af12d6f"
};

initializeApp(firebaseConfig);

store.use(({ store }) => {
  store.router = markRaw(router);
  store.api = markRaw(axiosInstance);
});

const app = createApp(App);

app
  .use(router)
  .use(store)
  .mount("#app");
