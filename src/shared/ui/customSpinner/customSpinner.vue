<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';

interface IPropsCustomSpinner {
  to?: string;
  fullscreen?: boolean;
  shouldCatchFocus?: boolean;
}

const props = defineProps<IPropsCustomSpinner>();

const lastActiveElement = ref<HTMLElement | null>(null);
const rootElementRef = ref<HTMLElement>();

function storeLastActiveElement() {
  lastActiveElement.value = document.activeElement as HTMLElement;
}

function catchFocus() {
  rootElementRef.value?.focus();
}

function restoreLastFocus() {
  lastActiveElement.value?.focus();
}

onMounted(() => {
  storeLastActiveElement();
  if (props.shouldCatchFocus) catchFocus();
});

onUnmounted(() => {
  restoreLastFocus();
});

const spinnerClasses = computed(() => ({
  'fixed inset-0 w-full h-full': props.fullscreen,
  'absolute top-0 left-0 w-full h-full': !props.fullscreen
}));
</script>

<template>
  <teleport v-if="props.to" :to="props.to">
    <div
      ref="rootElementRef"
      :class="['flex items-center justify-center z-50 bg-opacity-70 bg-white', spinnerClasses]"
      tabindex="0"
      @focusout="catchFocus"
    >
      <div class="relative flex items-center justify-center w-10 h-10">
        <div class="absolute w-full h-full border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"/>
      </div>
    </div>
  </teleport>
  <div
    v-else
    ref="rootElementRef"
    :class="['flex items-center justify-center z-50 bg-opacity-70 bg-white', spinnerClasses]"
    tabindex="0"
    @focusout="catchFocus"
  >
    <div class="relative flex items-center justify-center w-10 h-10">
      <div class="absolute w-full h-full border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"/>
    </div>
  </div>
</template>
