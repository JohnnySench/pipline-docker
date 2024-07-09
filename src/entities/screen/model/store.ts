import { defineStore } from "pinia";
import { shallowRef } from "vue";
import { TPlatform } from "./types";

export const useScreenStore = defineStore("screen", () => {
  const platform = shallowRef<TPlatform>("desktop");
  const setPlatform = (width: number) => {
    if (width >= 1208) return platform.value = "desktop";
    if (width <= 768) return platform.value = "mobile";
    return platform.value = "mobile";
  };
  return {
    platform,
    setPlatform,
  }
});