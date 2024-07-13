<script setup lang="ts">
import { computed, useAttrs } from "vue";

type TSize = string | number | "small" | "medium" | "large";

interface IPropsCustomButton {
  color: "primary" | "dark",
  size?: TSize
}

interface IEmitsCustomButton {
  (e: "button:click"): void,

  (e: "button:mousemove"): void,

  (e: "button:mouseenter"): void
}

const props = withDefaults(defineProps<IPropsCustomButton>(), {
  size: "medium"
});
const emits = defineEmits<IEmitsCustomButton>();
const attrs = useAttrs();

const buttonSize = computed(() => {
  if (typeof props.size === "number") return `h-[${props.size}]`;
  if (props.size === "small") return "h-8";
  if (props.size === "medium") return "h-10";
  if (props.size === "large") return "h-12";
});

const buttonStyle = computed(() => {
  if (props.color === "primary") return "bg-[#007AFF]";
  if (props.color === "dark") return "bg-[#333333]";
});
</script>

<template>
  <button
    v-bind="attrs"
    @click="emits('button:click')"
    @mouseleave="emits('button:mousemove')"
    @mouseenter="emits('button:mouseenter')"
    :class="[buttonSize, buttonStyle]"
    class="outline-0 rounded-md px-4 w-full"
  >
    <div class="flex items-center justify-center gap-4">
      <slot />
    </div>
  </button>
</template>

<style scoped>

</style>