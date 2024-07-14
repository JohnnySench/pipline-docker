<script setup lang="ts">
import { computed } from "vue";

interface IPropsCustomLoader {
  isLoading: boolean;
}

interface IEmitsCustomLoader {
  (e: "transitionend" | "transitionstart"): void;
}

const emits = defineEmits<IEmitsCustomLoader>();
const props = defineProps<IPropsCustomLoader>();

const styleLoader = computed(() => {
  if (props.isLoading) return "opacity-0 invisible";
  return "opacity-100 visible";
});
</script>

<template>
  <div
    @transitionend="emits('transitionend')"
    @transitionstart="emits('transitionstart')"
    :class="[styleLoader]"
    class="custom-transition size-full flex absolute justify-center items-center
          bg-white top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 after:content-['']
          after:size-[75px]after:border-[15px] after:border-[#dddddd] after:border-t-[#7449f5]
          after:border-full after:rounded-full after:animate-spin" />
</template>

<style scoped>

</style>