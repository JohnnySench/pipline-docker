<script setup lang="ts">
import { computed } from "vue";
import { customIcon, type IEmitsCustomIcon, type IPropsCustomIcon } from "@shared/ui/customIcon";

type TIconPosition = "left" | "right";

interface ICustomInput extends Partial<IPropsCustomIcon> {
  innerIcon?: boolean,
  label?: string,
  iconPosition?: TIconPosition,
  iconMargin?: number,
}

interface IEmits extends IEmitsCustomIcon {
  (e: "update:modelValue", payload: string): void;
}

const props = withDefaults(defineProps<ICustomInput>(), {
  innerIcon: false,
  label: "",
  iconPosition: "left"
});
const emits = defineEmits<IEmits>();

const inputValueComputed = computed({
  get: (value) => {
    return value;
  },
  set: (newValue) => {
    emits("update:modelValue", newValue as string);
  }
});

const iconPositionComputed = computed(() => {
  if (props.iconPosition === "left") return "left-0";
  if (props.iconPosition === "right") return "right-0";
});

</script>

<template>
  <div class="container relative">
    <input
      v-model="inputValueComputed"
      required
      type="text"
      id="input"
      class="h-14 px-2.5 bg-gray-100 outline-0 rounded-2xl"
    />
    <label
      v-html="label"
      for="input"
      class="absolute top-1/2 left-[15px] transform -translate-y-1/2 px-1.5 pointer-events-none transition-all duration-500"
    />
    <custom-icon
      v-if="innerIcon"
      :name="name"
      :variant="variant"
      :class="iconPositionComputed"
      @click:icon="(e) => emits('click:icon', e)"
      class="icon absolute top-1/2 transform -translate-y-1/2 transition-all duration-200"
    />
  </div>
</template>

<style scoped lang="postcss">
.container #input:focus ~ label,
.container #input:valid ~ label {
  @apply top-0 bg-gray-100 rounded text-xs;
}

.container #input:focus ~ .icon,
.container #input:valid ~ .icon {
  @apply opacity-0;
}

</style>
