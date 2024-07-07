<script setup lang="ts">
import { customInput } from "@shared/ui/customInput";
import { customProfile } from "@shared/ui/customProfile";
import { customNavigation } from "@/features/navigation";
import { customSwitch } from "@shared/ui/customSwitch";
</script>

<template>
  <div class="h-screen w-screen bg-gray-100">
    <div class="h-screen bg-white w-[335px] p-6 overflow-hidden">
      <custom-profile class="mb-11" />
      <custom-input class="mb-11" :name="'search'" label="Search" inner-icon icon-position="left" />
      <custom-navigation />
      <custom-switch />
    </div>
  </div>

</template>

<style scoped></style>
