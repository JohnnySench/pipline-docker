<script setup lang="ts">
import { computed } from "vue";
import { customIcon } from "@shared/ui/customIcon";
import type { MaterialIcon as TMaterialIcon } from "@material-design-icons/font";

interface IPropsActionsButton {
  messageCount: number,
  likeCount: number,
  pinnedCount: number
}

interface IEmitsActionsButton {
  (e: "click:icon-chat"): void,

  (e: "click:icon-favorite"): void,

  (e: "click:icon-bolt"): void,
}

const emits = defineEmits<IEmitsActionsButton>();

const props = defineProps<IPropsActionsButton>();

const contentForComponent = computed<Record<string, TMaterialIcon | number>[]>(() => {
  return [
    { icon: "chat", text: props.messageCount },
    { icon: "favorite", text: props.likeCount },
    { icon: "bolt", text: props.messageCount }
  ];
});
</script>

<template>
  <div class="max-w-[151px] flex flex-row w-[151px] justify-between items-center">
    <div v-for="item in contentForComponent"
         class="flex flex-row items-center text-gray-400 gap-1 hover:text-black transition duration-300">
      <span class="text-xs">{{ item.text }}</span>
      <custom-icon
        :name="item.icon as TMaterialIcon"
        size="small"
        @click:icon="emits(`click:icon-${item.icon}` as any)"
      />
    </div>
  </div>
</template>

<style scoped>

</style>