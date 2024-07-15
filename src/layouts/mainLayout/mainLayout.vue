<script setup lang="ts">

</script>

<template>
  <div class="h-screen w-screen flex flex-col">
    <router-view name="sidebar" v-slot="{Component, route}">
      <transition :name="route.meta.transition || 'fade'">
        <component :is="Component" />
      </transition>
    </router-view>
    <router-view name="content" v-slot="{Component, route}">
      <transition :name="route.meta.transition || 'fade'">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped>

</style>