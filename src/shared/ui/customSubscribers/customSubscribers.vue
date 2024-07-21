<script setup lang="ts">
import { customIcon } from "@shared/ui/customIcon";
import { computed, StyleValue } from "vue";

interface IPropsCustomSubscribers {
  imgsSrc: string[];
}

interface IEmitsCustomSubscribers {
  (e: "click:add-sub"): void;
}

const emits = defineEmits<IEmitsCustomSubscribers>();
const props = defineProps<IPropsCustomSubscribers>();

const spacingClassesImages = (index: number): Record<string, string> => {
  return {
    position: "relative",
    left: `-${index * 10}px`
  };
};

const spacingButtonStyle = computed<StyleValue>(() => {
  return {
    position: "relative",
    left: `-${props.imgsSrc?.length * 10}px`
  };
});


</script>

<template>
  <div class="flex flex-row">
    <img
      v-for="(img, index) in imgsSrc"
      :src="img"
      :key="index"
      alt="sub"
      :style="spacingClassesImages(index)"
      class="rounded-full size-[30px]"
    />
    <button
      :style="spacingButtonStyle"
      class="flex items-center justify-center rounded-full size-[30px] bg-black">
      <custom-icon
        name="add"
        size="small"
        variant="filled"
        class="text-white"
        @click:icon="emits('click:add-sub')"
      />
    </button>
  </div>
</template>

<style scoped>

</style>