<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";


const router = useRouter();


const navItems = computed(() => {
  return [
    {
      text: "Dashboard",
      icon: "home"
    },
    {
      text: "Revenue",
      icon: "analytics"
    },
    {
      text: "Notifications",
      icon: "notifications"
    },
    {
      text: "Analytics",
      icon: "pie_chart"
    },
    {
      text: "Inventory",
      icon: "inventory_2"
    },
    {
      text: "Editor",
      icon: "description",
      action: () => router.push({
        name: "editor"
      })
    }
  ];
});


</script>

<template>
  <nav class="flex flex-col gap-6">
    <div
      v-for="(item, index) in navItems"
      :key="index"
      class="p-4 flex flex-row items-center gap-4 cursor-pointer"
      @click="item.action"
    >
      <span class="material-icons-outlined">{{ item.icon }}</span>
      <span>{{ item.text }}</span>
    </div>
  </nav>
</template>

<style scoped>

</style>