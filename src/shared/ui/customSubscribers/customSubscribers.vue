<script setup lang="ts">

interface IPropsCustomSubscribers {
  imgSrc?: string[];
}

const props = defineProps<IPropsCustomSubscribers>();
</script>

<template>
  <div class="flex flex-row">
    <img
      v-for="(img, index) in imgSrc"
      :src="img"
      :key="index"
      class="rounded-full"
    />
  </div>
</template>

<style scoped>

</style>