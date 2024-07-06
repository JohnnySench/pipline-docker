<script setup lang="ts">
import { customInput } from "@shared/ui/customInput";
import { customProfile } from "@shared/ui/customProfile";

</script>

<template>
  <div class="h-screen bg-amber-500 w-[335px] p-6">
    <custom-profile />
    <custom-input :name="'search'" label="Search" inner-icon />
  </div>
</template>

<style scoped></style>
