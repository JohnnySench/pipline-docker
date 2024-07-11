import { defineStore } from "pinia";
import { signUp, ISignUp, IResponseSignUp } from "../api";
import { ref, shallowRef } from "vue";

export const useAuthorizationStore = defineStore("auth", () => {
  const isAuthenticated = shallowRef(false);

  const userInfo = ref<null | undefined | IResponseSignUp>(null);

  const registration = async (payload: ISignUp) => {
    userInfo.value = await signUp(payload);
  };
  return {
    isAuthenticated,
    userInfo,
    registration,
  };
});