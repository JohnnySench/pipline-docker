<script setup lang="ts">
import { ref } from "vue";
import trelloImg from '@assets/trello.png'
import editorImg from '@assets/editor.jpg'
import gridImg from '@assets/grid.png'
import CustomSlider from "@shared/ui/customSlider/customSlider.vue";

const items = ref([
  {id: 1, route: 'trello', img: trelloImg},
  {id: 2, route: 'editor', img: editorImg},
  {id: 3, route: 'grid', img: gridImg},
])
</script>

<template>
  <div class="h-screen flex items-center justify-center">
    <custom-slider :items="items" autoplay/>
  </div>

</template>

<style scoped>

</style>