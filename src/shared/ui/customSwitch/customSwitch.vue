<script setup lang="ts">
import { computed } from "vue";

interface IEmitsCustomSwitch {
  (e: "update:modelValue", payload: boolean): void;
}

type TSize = "small" | "medium" | "large";

interface IPropsCustomSwitch {
  size?: TSize;
}

const props = withDefaults(defineProps<IPropsCustomSwitch>(), {
  size: "medium"
});

const switchSize = computed(() => {
  if (props.size === "small") return "h-5 w-10";
  if (props.size === "medium") return "h-8 w-14";
});

const beforeSize = computed(() => {
  if (props.size === "small") return "before:size-4";
  if (props.size === "medium") return "before:size-7";
});

const modelValue = defineModel("modelValue");
const emits = defineEmits<IEmitsCustomSwitch>();
const update = (e: Event): void => {
  const target = e.target as HTMLInputElement;
  emits("update:modelValue", target.checked);
};
</script>

<template>
  <div class="container flex">
    <input
      v-model="modelValue"
      type="checkbox"
      id="check"
      class="hidden"
      @change="update"
    >
    <label for="check"
           class="bg-[#d2d2d2] rounded-2xl p-0.5 cursor-pointer relative duration-200"
           :class="[switchSize, beforeSize]"
    />
  </div>
</template>

<style scoped lang="postcss">
label:before {
  @apply absolute content-[url('src/assets/moon.svg')] top-1/2
  -translate-y-1/2 bg-white overflow-hidden rounded-full transform transition-all p-0.5 duration-200 ease-linear
}

input:checked + label {
  @apply bg-[#C8BCF6]
}

input:checked + label:before {
  @apply right-0.5 bg-black
}


</style>