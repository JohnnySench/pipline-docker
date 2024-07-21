<script setup lang="ts">
import { TaskStyle } from "@shared/config";

interface IPropsTaskCard {
  statusId: number,
  text: string,
  description?: string,
  img?: string
}

interface ISlotsCustomSubscribers {
  subscribes: (props: {}) => any,
  actions: (props: {}) => any,
}

const props = defineProps<IPropsTaskCard>();
const slots = defineSlots<ISlotsCustomSubscribers>()

</script>

<template>
  <div class="select-none flex flex-col w-full bg-[#f4f4f4] rounded-[10px] p-5">
    <div class="flex flex-col gap-2.5 mb-6">
      <img draggable="false" v-if="Boolean(img)" :src="img" alt="Art" class="rounded-2xl"/>
      <div :class="TaskStyle[statusId].class" class="w-[60px] h-2 rounded"></div>
      <h4 class="text-base text-left">{{text}}</h4>
    </div>

    <div class="flex flex-row items-center justify-between">
      <slot name="subscribes" />
      <slot name="actions" />
    </div>
  </div>
</template>

<style scoped>

</style>