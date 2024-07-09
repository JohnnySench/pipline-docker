<script setup lang="ts">
import { shallowRef } from "vue";

interface ICustomTooltipOptions {
  text: string,
}

defineProps<ICustomTooltipOptions>();

const isShowTooltip = shallowRef(false);
</script>

<template>
  <div class="relative">
    <div @mouseenter="isShowTooltip = true" @mouseleave="isShowTooltip = false">
      <slot />
    </div>
    <div v-if="isShowTooltip"
         class="absolute -right-2 top-0 transform -translate-y-1/2 px-4 py-2 bg-gray-200 rounded-2xl"
         v-html="text"
    />
  </div>

</template>

<style scoped>

</style>