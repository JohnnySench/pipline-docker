<script setup lang="ts">
import { logo } from "@shared/icons/logo";
import {customTooltip} from "@shared/ui/customTooltip";
interface IPropsLogo {
  name?: string;
  email?: string;
  visibleText?: boolean,
}

withDefaults(defineProps<IPropsLogo>(), {
  name: "Duck UI",
  email: "Duckui@demo.com",
  visibleText: true,
});
</script>

<template>
  <div class="flex items-center gap-2">
    <logo />
    <custom-tooltip :text="name">
      <div class="flex flex-col transition-all duration-300"
           :class="{'opacity-0': !visibleText}"
      >
        <span class="font-bold">{{ name }}</span>
        <span>{{ email }}</span>
      </div>
    </custom-tooltip>
  </div>
</template>

<style scoped>

</style>