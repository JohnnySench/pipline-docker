<script setup lang="ts">
import { customSwitch } from "@shared/ui/customSwitch";
import { customInput } from "@shared/ui/customInput";
import { customInputPassword } from "@shared/ui/customInputPassword";
import { shallowRef } from "vue";
import { authForm } from "@shared/ui/authForm";

const rememberMe = shallowRef(false);
const password = shallowRef("");
const email = shallowRef("");


const defaultSubmit = () => {
  console.log("sign def");
};
const googleSubmit = () => {
  console.log("sign google");
};
</script>

<template>
  <auth-form
    title="Nice to see you again"
    :sign-in="false"
    @click:default-sign="defaultSubmit"
    @click:google-sign="googleSubmit"
  >
    <template #content>
      <div class="flex flex-col gap-6">
        <custom-input v-model="email" label-visible label="Login"/>

        <custom-input-password
          v-model="password"
          label-text="Enter password"
          name="visibility"
          icon-name-visibility="visibility_off"
          variant="filled"
        />

        <div class="mt-6 flex items-center justify-between flex-nowrap">
          <div class="flex flex-row items-center gap-2">
            <custom-switch size="small" class="w-min" v-model="rememberMe" />
            <span class="text-xs cursor-pointer select-none" @click="rememberMe = !rememberMe">Remember me</span>
          </div>
          <span
            class="text-[#007AFF] text-xs hover:underline hover:underline-offset-2 cursor-pointer">Forgot password?</span>
        </div>
      </div>
    </template>
  </auth-form>
</template>

<style scoped>

</style>