<script setup lang="ts">
import { computed } from "vue";
import { customIcon, type IEmitsCustomIcon, type IPropsCustomIcon } from "@shared/ui/customIcon";
import {type TSize} from "@shared/types";

type TIconPosition = "left" | "right";

interface ICustomInput extends Partial<IPropsCustomIcon> {
  innerIcon?: boolean,
  labelVisible?: boolean
  label?: string,
  iconPosition?: TIconPosition,
  iconMargin?: number,
  sizeComponent?: TSize,
}

interface IEmits extends IEmitsCustomIcon {
  (e: "update:modelValue", payload: string): void;
}

const props = withDefaults(defineProps<ICustomInput>(), {
  innerIcon: false,
  label: "",
  labelVisible: true,
  iconPosition: "left",
  sizeComponent: "medium",
});
const emits = defineEmits<IEmits>();

const modelValue = defineModel('modelValue')

const iconPositionComputed = computed(() => {
  if (props.iconPosition === "left") return "left-4";
  if (props.iconPosition === "right") return "right-4";
});

const sizeComponent = computed(() => {
  if (typeof props.sizeComponent === 'number') return `h-${props.sizeComponent}`;
  if (props.sizeComponent === "small") return "h-10";
  if (props.sizeComponent === "medium") return "h-12";
  if (props.sizeComponent === "large") return "h-14";
})

const inputPaddingComputed = computed(() => {
  let padding = 0;
  if (!props.innerIcon) {
    return padding + 4;
  }
  if (props.innerIcon) {
    padding += 14;
  }
  return padding;
});

const updateValue = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emits('update:modelValue', target.value)
}

</script>

<template>
  <div class="container relative">
    <input
      :value="modelValue"
      required
      type="text"
      id="input"
      class="px-4 w-full bg-gray-100 outline-0 rounded-2xl"
      :class="[`p${iconPositionComputed![0]}-${inputPaddingComputed}`, sizeComponent]"
      @input="(e) => updateValue(e)"
    />
    <label
      v-if="labelVisible"
      v-html="label"
      for="input"
      class="absolute top-1/2 left-4 transform -translate-y-1/2 px-1.5 pointer-events-none transition-all duration-200"
      :class="[inputPaddingComputed]"
    />
    <custom-icon
      v-if="innerIcon"
      :name="name"
      :variant="variant"
      :class="[iconPositionComputed]"
      @click:icon="(e) => emits('click:icon', e)"
      class="icon absolute top-1/2 transform -translate-y-1/2 transition-all duration-200"
    />
  </div>
</template>

<style scoped lang="postcss">
.container #input:focus ~ label,
.container #input:valid ~ label {
  @apply top-0 text-xs;
}

.container #input:focus ~ .icon,
.container #input:valid ~ .icon {
  @apply opacity-0;
}

</style>
