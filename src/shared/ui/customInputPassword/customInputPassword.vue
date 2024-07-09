<script setup lang="ts">
import { customIcon, type IPropsCustomIcon } from "@shared/ui/customIcon";
import type { MaterialIcon as TMaterialIcon } from "@material-design-icons/font";
import { shallowRef } from "vue";

interface IPropsCustomInputPassword extends IPropsCustomIcon {
  labelText: string,
  iconNameVisibility: TMaterialIcon,
}


interface IEmitsCustomInputPassword {
  (e: "update:modelValue", value: string): void;

  (e: "click:hidden", value: boolean): void;

  (e: "click:show", value: boolean): void;
}

const props = defineProps<IPropsCustomInputPassword>();
const emits = defineEmits<IEmitsCustomInputPassword>();
const modelValue = defineModel("modelValue");

const updateValue = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emits("update:modelValue", target.value);
};

const typeInputPassword = shallowRef("password");


const showPassword = (e: Event) => {
  typeInputPassword.value = "text";
  const target = e.target as HTMLInputElement;
  emits("update:modelValue", target.value);
  emits("click:show", true);
};

const hiddenPassword = (e: Event) => {
  typeInputPassword.value = "password";
  const target = e.target as HTMLInputElement;
  emits("update:modelValue", target.value);
  emits("click:show", false);
};

</script>

<template>
  <div class="container relative">
    <input
      v-model="modelValue"
      id="inputPassword"
      :type="typeInputPassword"
      @input="updateValue"
    >
    <label
      v-if="Boolean(labelText)"
      for="inputPassword"
      v-html="labelText"
      class="absolute top-1/2 -translate-y-1/2"
    />
    <custom-icon
      v-if="typeInputPassword === 'password'"
      :name="name"
      :size="size"
      :variant="variant"
      class="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer select-none"
      @click:icon="(e) => showPassword(e)"
    />
    <custom-icon
      v-else
      :name="iconNameVisibility"
      :size="size"
      :variant="variant"
      class="absolute right-10 top-1/2 -translate-y-1/2 cursor-pointer select-none"
      @click:icon="(e: Event) => hiddenPassword(e)"
    />

  </div>
</template>

<style scoped lang="postcss">

</style>