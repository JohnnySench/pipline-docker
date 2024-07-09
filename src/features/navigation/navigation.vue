<script setup lang="ts">
import { computed, shallowRef } from "vue";
import { useRouter } from "vue-router";
import { customSwitch } from "@shared/ui/customSwitch";

interface IProps {
  fullWidth: boolean;
}

const props = defineProps<IProps>();

const router = useRouter();

const switchLightMode = shallowRef(true);

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
        switchLightMode.value = !switchLightMode.value;
      },
      switch: true
    }
  ];
});


</script>

<template>
  <nav class="flex flex-col gap-6">
    <div
      v-for="(item, index) in navItems"
      :key="index"
      class="p-4 flex flex-row items-center cursor-pointer hover:bg-gray-100 hover:rounded-2xl"
    >
      <div class="flex gap-4 justify-center text-nowrap" @click="item.action">
        <span :class="{'!hidden !p-0': item?.switch && !fullWidth}"
              class="material-icons-outlined">{{ item.icon }}
        </span>
        <span v-if="fullWidth">{{ item.text }}</span>
      </div>

      <div v-if="item?.switch"
           class="ml-5 transition-all duration-200"
           :class="{'-ml-4': !fullWidth}">
        <custom-switch v-model="switchLightMode" />
      </div>
    </div>
  </nav>
</template>

<style scoped lang="postcss">

</style>