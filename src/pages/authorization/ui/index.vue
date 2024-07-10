<script setup lang="ts">
import { customInputPassword } from "@shared/ui/customInputPassword";
import { customInput } from "@shared/ui/customInput";
import { shallowRef } from "vue";

const password = shallowRef("");
const login = shallowRef("");
</script>

<template>
  <div class="flex flex-col gap-8 w-[200px]">
    <custom-input-password
      v-model="password"
      label-text="Enter password"
      name="visibility"
      icon-name-visibility="visibility_off"
      variant="filled"
      @click:show="(e) => console.log(e)"
      @click:hidden="(e) => console.log(e)"
    />

    <custom-input
      v-model="login"
      label="Enter login"
      label-visible
    />
  </div>

</template>

<style scoped>

</style>