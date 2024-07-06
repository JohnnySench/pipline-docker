<script setup lang="ts">
import { logo } from "@shared/icons/logo";
interface IPropsLogo {
  name: string;
  email: string;
}

withDefaults(defineProps<IPropsLogo>(), {
  name: "Duck UI",
  email: "Duckui@demo.com"
});
</script>

<template>
  <div class="flex justify-center items-center gap-2">
    <logo />
    <div class="flex flex-col">
      <span class="font-bold">{{ name }}</span>
      <span>{{ email }}</span>
    </div>
  </div>
</template>

<style scoped>

</style>