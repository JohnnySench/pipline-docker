<script setup lang="ts">
import { customSwitch } from "@shared/ui/customSwitch";
import { customInput } from "@shared/ui/customInput";
import { customInputPassword } from "@shared/ui/customInputPassword";
import { ref, shallowRef } from "vue";
import { authForm } from "@shared/ui/authForm";
import { customSlider } from "@shared/ui/customSlider";
import trelloImg from "@assets/trello.png";
import editorImg from "@assets/editor.jpg";
import gridImg from "@assets/grid.png";

const rememberMe = shallowRef(false);
const password = shallowRef("");
const email = shallowRef("");


const defaultSubmit = () => {
  console.log("sign def");
};
const googleSubmit = () => {
  console.log("sign google");
};

const items = ref([
  { id: 1, route: "trello", img: trelloImg },
  { id: 2, route: "editor", img: editorImg },
  { id: 3, route: "grid", img: gridImg }
]);
</script>

<template>
  <div class="flex flex-row items-center">
    <custom-slider
      :items="items"
      autoplay
      :duration="5000"
    />
    <auth-form
      title="Nice to see you again"
      :sign-in="false"
      @click:default-sign="defaultSubmit"
      @click:google-sign="googleSubmit"
    >
      <template #content>
        <div class="flex flex-col gap-6">
          <custom-input
            v-model="email"
            label-visible
            label="Login"
          />
          <custom-input-password
            v-model="password"
            label-text="Enter password"
            name="visibility"
            icon-name-visibility="visibility_off"
            variant="filled"
          />
          <div class="mt-6 flex items-center justify-between flex-nowrap">
            <div class="flex flex-row items-center gap-2">
              <custom-switch
                v-model="rememberMe"
                size="small"
                class="w-min"
              />
              <span
                class="text-xs cursor-pointer select-none"
                @click="rememberMe = !rememberMe"
                v-html="'Remember me'"
              />
            </div>
            <span
              class="text-[#007AFF] text-xs hover:underline
            hover:underline-offset-2 cursor-pointer"
            >Forgot password?</span>
          </div>
        </div>
      </template>
    </auth-form>
  </div>
</template>

<style scoped>

</style>