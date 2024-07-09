import { defineStore } from "pinia";
import { shallowRef } from "vue";

export const useSidebarStore = defineStore("sidebar", () => {
  const isVisible = shallowRef(false);
  const setVisible = (visible: boolean): void => {
    isVisible.value = visible;
  };

  return {
    isVisible,
    setVisible
  };
});