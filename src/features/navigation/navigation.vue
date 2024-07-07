<script setup lang="ts">
import { computed, shallowRef } from "vue";
import { useRouter } from "vue-router";
import {customSwitch} from '@shared/ui/customSwitch'


const router = useRouter();

const switchLightMode = shallowRef(true)

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
    },
    {
      text: "Logout",
      icon: "logout",
      action: () => router.push({
        name: "login"
      })
    },
    {
      text: "Light mode",
      icon: "light_mode",
      action: () => {
        console.log(1);
        switchLightMode.value = !switchLightMode.value;
        console.log(switchLightMode.value);
      },
      switch: true
    },
  ];
});


</script>

<template>
  <nav class="flex flex-col gap-6">
    <div
      v-for="(item, index) in navItems"
      :key="index"
      class="p-4 flex flex-row items-center cursor-pointer"

    >
      <div class="flex gap-4  justify-center" @click="item.action">
        <span class="material-icons-outlined">{{ item.icon }}</span>
        <span>{{ item.text }}</span>
      </div>

      <div v-if="item?.switch" class="ml-5">
        <custom-switch v-model="switchLightMode"/>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>