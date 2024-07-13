<script setup lang="ts">
import { customButton } from "@shared/ui/customButton";
import { computed } from "vue";

interface IPropsAuthFrom {
  title: string,
  signIn: boolean,
}

interface IEmitsAuthForm {
  (e: "click:default-sign"): void,
  (e: 'click:google-sign'): void,

}

const props = defineProps<IPropsAuthFrom>();
const emits = defineEmits<IEmitsAuthForm>();

const textSign = computed(() => {
  if (props.signIn) return "Sign in";
  return "Sign up";
});
</script>

<template>
  <div class="container p-12 rounded-r-3xl max-h-[900px] w-[456px] bg-white">
    <div class="flex items-center gap-2.5 select-none mb-12">
      <img src="@assets/authIcon.jpg" alt="auth">
      <span class="font-bold">Multi Flow</span>
    </div>
    <h1 class="font-bold text-xl mb-11">{{ title }}</h1>

    <slot name="content" />

    <custom-button class="mt-8" color="primary" @button:click="emits('click:default-sign')">
      <span class="font-bold text-white">{{ textSign }}</span>
    </custom-button>
    <hr class="!h-[1px] my-8 text-black bg-black" />
    <custom-button color="dark" @button:click="emits('click:google-sign')">
      <img src="@assets/googleIcon2.png" alt="google">
      <span class="text-white">{{ textSign }} with Google</span>
    </custom-button>
  </div>
</template>

<style scoped>

</style>