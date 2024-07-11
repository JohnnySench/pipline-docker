import { createApp, defineAsyncComponent, h } from "vue";

export const useAlert = (type: "info" | "success" | "warning", msg: string, delay: number) => {
  const component = defineAsyncComponent(
    () => import("@shared/ui/customAlert/customAlert.vue"));
  useResolvedModal(component, { type, msg, delay }).then();
};

export const useResolvedModal = (component: any, props: any): Promise<any> => {
  return new Promise((resolve) => {
    const dialogContainer = document.createElement("div");
    document.body.appendChild(dialogContainer);

    const app = createApp({
      setup() {
        const onDestroy = (result: any) => {
          app.unmount();
          document.body.removeChild(dialogContainer);
          resolve(result);
        };

        return {
          onDestroy
        };
      },
      render() {
        return h(component, {
          ...props,
          onDestroy: this.onDestroy
        });
      }
    });
    app.mount(dialogContainer);
  });
};