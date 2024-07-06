<script setup lang="ts">
import "@material-design-icons/font/filled.css";
import "@material-design-icons/font/outlined.css";
import type { MaterialIcon as TMaterialIcon } from "@material-design-icons/font";
import { computed } from "vue";

type TIconVariant = "filled" | "outlined";
type TIconSize = number | string | "small" | "medium" | "large";

export interface IPropsCustomIcon {
  name: TMaterialIcon,
  variant?: TIconVariant;
  size?: TIconSize;
}

export interface IEmitsCustomIcon {
  (e: 'click:icon', payload: MouseEvent): void
}

const props = withDefaults(defineProps<IPropsCustomIcon>(), {
  size: "medium",
  variant: "filled"
});

const emits = defineEmits<IEmitsCustomIcon>()

const materialClass = computed(() => props.variant === "filled" ? "material-icons" : `material-icons-${props.variant}`);
const iconSize = computed(() => {
  if (typeof props.size === "number") return `${props.size}px`;
  if (props.size === "small") return "20px";
  if (props.size === "medium") return "24px";
  if (props.size === "large") return "32px";
});
</script>

<template>
  <span
    :class="materialClass"
    :style="{fontSize: iconSize}"
    v-html="name"
    @click="(e) => emits('click:icon', e)"
  />
</template>

<style scoped>

</style>