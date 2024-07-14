<script setup lang="ts">
import { shallowRef } from "vue";
import CustomSpinner from "@shared/ui/customSpinner/customSpinner.vue";
import CustomButton from "@shared/ui/customButton/customButton.vue";

const isLoading = shallowRef(false);

</script>

<template>
  <div>

    <custom-button color="primary" :size="'small'" @button:click="isLoading = !isLoading" class="relative">
      <span>CLICK</span>
      <custom-spinner v-if="isLoading"/>
    </custom-button>
  </div>
</template>

<style scoped>

</style>