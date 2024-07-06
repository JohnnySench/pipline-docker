<script setup lang="ts">
import { logo } from "@shared/icons/logo";

interface IProps {
  name: string;
  email: string;
}

withDefaults(defineProps<IProps>(), {
  name: "Duck UI",
  email: "Duckui@demo.com",
});
</script>

<template>
  <div class="h-screen bg-amber-500 w-[335px] p-6">
    <div class="flex justify-center items-center gap-2">
      <logo />
      <div class="flex flex-col">
        <span class="font-bold">{{ name }}</span>
        <span>{{ email }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
