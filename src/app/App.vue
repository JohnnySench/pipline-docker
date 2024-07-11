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
  <router-view />
</template>

<style scoped lang="postcss">

</style>
