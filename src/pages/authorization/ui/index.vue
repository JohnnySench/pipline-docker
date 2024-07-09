<script setup lang="ts">
import { customInputPassword } from "@shared/ui/customInputPassword";
</script>

<template>
  <custom-input-password @click:show="(e) => console.log(e)" @click:hidden="(e) => console.log(e)" label-text="username" name="visibility"
                         icon-name-visibility="visibility_off" variant="filled" />
</template>

<style scoped>

</style>