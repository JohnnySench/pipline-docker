import { defineAsyncComponent } from "vue";
export default defineAsyncComponent(() =>
  import("./generalLayout.vue")
);