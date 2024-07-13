<script setup lang="ts">
import { customIcon, type IPropsCustomIcon } from "@shared/ui/customIcon";
import type { MaterialIcon as TMaterialIcon } from "@material-design-icons/font";
import { computed, shallowRef } from "vue";
import { TSize } from "@shared/types";

interface IPropsCustomInputPassword extends IPropsCustomIcon {
  width?: string,
  labelText?: string,
  iconNameVisibility: TMaterialIcon,
  sizeComponent?: TSize
}


interface IEmitsCustomInputPassword {
  (e: "update:modelValue", value: string): void;

  (e: "click:hidden", value: boolean): void;

  (e: "click:show", value: boolean): void;
}

const props = withDefaults(defineProps<IPropsCustomInputPassword>(), {
  labelText: "Password",
  sizeComponent: 'medium'
});
const emits = defineEmits<IEmitsCustomInputPassword>();

const modelValue = defineModel('modelValue')

const sizeComponent = computed(() => {
  if (typeof props.sizeComponent === 'number') return `h-${props.sizeComponent}`;
  if (props.sizeComponent === "small") return "h-10";
  if (props.sizeComponent === "medium") return "h-12";
  if (props.sizeComponent === "large") return "h-14";
})

const updateValue = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emits("update:modelValue", target.value);
};

const typeInputPassword = shallowRef("password");


const showPassword = (e: Event) => {
  typeInputPassword.value = "text";
  emits("click:show", true);
};

const hiddenPassword = (e: Event) => {
  typeInputPassword.value = "password";
  emits("click:show", false);
};

</script>

<template>
  <div class="container px-4 rounded-2xl top-6 relative bg-gray-100" :class="[sizeComponent]">
    <input
      :value="modelValue"
      required
      id="inputPassword"
      :type="typeInputPassword"
      class="w-full border-0 outline-0 absolute top-1/2 -translate-y-1/2 bg-transparent"
      :class="[width]"
      @input="updateValue"
    >
    <label
      v-if="Boolean(labelText)"
      for="inputPassword"
      v-html="labelText"
      class="absolute top-1/2 left-4 -translate-y-1/2 transform transition-all duration-200"
    />
    <custom-icon
      v-if="typeInputPassword === 'password'"
      :name="name"
      :size="size"
      :variant="variant"
      class="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer select-none"
      @click:icon="(e: Event) => showPassword(e)"
    />
    <custom-icon
      v-else
      :name="iconNameVisibility"
      :size="size"
      :variant="variant"
      class="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer select-none"
      @click:icon="(e: Event) => hiddenPassword(e)"
    />

  </div>
</template>

<style scoped lang="postcss">
.container #inputPassword:focus ~ label,
.container #inputPassword:valid ~ label {
  @apply top-0 text-xs
}
</style>