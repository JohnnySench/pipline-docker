<script setup lang="ts">
import { customInput } from "@shared/ui/customInput";
import { customProfile } from "@shared/ui/customProfile";
import { customNavigation } from "@/features/navigation";


import { useSidebarStore } from "../model";
import { storeToRefs } from "pinia";

const { setVisible } = useSidebarStore();
const { isVisible } = storeToRefs(useSidebarStore());


</script>

<template>
  <div class="h-screen bg-white p-6  transition-all duration-300 overflow-hidden"
       :class="[isVisible ? 'w-[335px]' : 'w-[104px]']"
       @mouseenter="() => setVisible(true)"
       @mouseleave="() => setVisible(false)">
    <custom-profile
      :visible-text="isVisible"
      class="mb-11"
    />
    <custom-input
      :labelVisible="isVisible"
      class="mb-11"
      :name="'search'"
      label="Search"
      inner-icon
      :icon-position="'left'"
    />
    <custom-navigation :full-width="isVisible" />
  </div>
</template>

<style scoped>

</style>