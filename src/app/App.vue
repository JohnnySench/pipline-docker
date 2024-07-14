<script setup lang="ts">
import { useScreenStore } from "@entities/screen/model";
import { onMounted, onUnmounted } from "vue";

const { setPlatform } = useScreenStore();

const onResize = (() => setPlatform(window.innerWidth));

onMounted(() => {
  setPlatform(window.innerWidth);
  window.addEventListener("resize", onResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", onResize);
});
</script>

<template>
  <router-view v-slot="{Component, route}">
    <transition :name="route.meta.transition || 'fade'">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style scoped lang="postcss">

</style>
