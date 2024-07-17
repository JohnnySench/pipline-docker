<script setup lang="ts">
import { TaskStyle } from "@shared/config";

interface IPropsTaskCard {
  statusId: number,
  text: string,
}

const props = defineProps<IPropsTaskCard>();


</script>

<template>
  <div class="flex flex-col bg-[#f4f4f4] rounded-[10px] p-5">
    <div class="flex flex-col gap-2.5 mb-6">
      <div :class="TaskStyle[statusId].class" class="w-[60px] h-2"></div>
      <h4 class="text-base"></h4>
    </div>

    <div class="flex flex-row items-center justify-between">
      <slot name="subscribes" />
      <slot name="actions" />
    </div>
  </div>
</template>

<style scoped>

</style>