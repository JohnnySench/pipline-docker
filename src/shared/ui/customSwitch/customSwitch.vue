<script setup lang="ts">

interface IEmits {
  (e: "update:modelValue", payload: boolean): void;
}

const modelValue = defineModel('modelValue')
const emits = defineEmits<IEmits>();
const update = (e: Event): void => {
  const target = e.target as HTMLInputElement;
  emits("update:modelValue", target.checked);
};
</script>

<template>
  <div class="container flex">
    <input v-model="modelValue" type="checkbox" id="check" class="hidden" @change="update">
    <label for="check"
           class="bg-[#d2d2d2] w-14 h-8 rounded-2xl cursor-pointer relative duration-200" />
  </div>
</template>

<style scoped lang="postcss">
label::before {
  @apply absolute p-0.5 content-[url('src/assets/moon.svg')] bg-white w-7 h-7 rounded-2xl m-[2px] transition-all duration-200
}

input:checked + label {
  @apply bg-[#C8BCF6]
}

input:checked + label:before {
  @apply transform translate-x-[calc(100%-4px)] bg-black
}


</style>