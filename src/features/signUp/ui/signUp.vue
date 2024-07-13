<script setup lang="ts">
import { customButton } from "@shared/ui/customButton";
import { customSwitch } from "@shared/ui/customSwitch";
import { customInput } from "@shared/ui/customInput";
import { customInputPassword } from "@shared/ui/customInputPassword";
import { shallowRef } from "vue";

const rememberMe = shallowRef(false);
</script>

<template>
  <div class="container p-12 rounded-3xl max-h-[900px] w-[456px] bg-white">
    <div class="flex items-center gap-2.5 select-none mb-12">
      <img src="@assets/authIcon.jpg" alt="auth">
      <span class="font-bold">Multi Flow</span>
    </div>
    <h1 class="font-bold text-xl">Nice to see you again</h1>
    <div class="flex flex-col gap-6">
      <custom-input />

      <custom-input-password label-text="Enter password"
                             name="visibility"
                             icon-name-visibility="visibility_off"
                             variant="filled" />
      <div class="mt-6 flex items-center justify-between flex-nowrap">
        <div class="flex flex-row items-center gap-2">
          <custom-switch class="w-min" v-model="rememberMe" />
          <span class="text-xs cursor-pointer" @click="rememberMe = true">Remember me</span>
        </div>

        <span class="text-[#007AFF] text-xs">Forgot password?</span>
      </div>
      <custom-button color="primary">
        <span class="font-bold text-white">Sign in</span>
      </custom-button>
    </div>

    <hr class="!h-[1px] my-8 text-black bg-black" />


    <custom-button color="dark">
      <img src="@assets/googleIcon2.png">
      <span class="text-white">Or sign in with Google</span>
    </custom-button>
  </div>
</template>

<style scoped>

</style>