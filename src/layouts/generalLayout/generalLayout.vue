<script setup lang="ts">
import { customSidebar } from "@widgets/sidebar/ui";
</script>

<template>
  <div class="w-screen h-screen bg-gray-200 flex flex-row">
    <customSidebar />
    <router-view v-slot="{Component, route}">
      <transition :name="route.meta.transition || 'fade'">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped lang="postcss">

</style>