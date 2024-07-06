import { createPinia } from "pinia";
import type { AxiosInstance } from "axios";
import type { Router } from "vue-router";

declare module "pinia" {
  export interface PiniaCustomProperties {
    api: AxiosInstance;
    router: Router;
  }
}

export default createPinia();
