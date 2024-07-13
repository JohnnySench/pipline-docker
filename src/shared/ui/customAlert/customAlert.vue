<script setup lang="ts">
import { customIcon } from "@shared/ui/customIcon";
import { computed } from "vue";

export interface IPropsCustomAlert {
  type: "success" | "info" | "warning" | "error";
  msg: string;
  delay: number;
}

type IEmitsCustomAlert = {
  "destroy": [];
}

type TIconName = "info" | "warning" | "check_circle"

const props = defineProps<IPropsCustomAlert>();
const emits = defineEmits<IEmitsCustomAlert>();
const iconSetting = computed(() => {
  if (props.type === "info") {
    return {
      iconName: "info" as TIconName,
      classesContainer: "border rounded-[12px] border-[#2463EB] bg-[#DCEBFE]",
      classesText: "text-[#1E3FAE]"
    };
  }
  if (props.type === "warning") {
    return {
      iconName: "warning" as TIconName,
      classesContainer: "border rounded-[12px] border-[#DC2828] bg-[#FFDCDC]",
      classesText: "text-[#981B1B]"
    };
  }
  if (props.type === "success") {
    return {
      iconName: "check_circle" as TIconName,
      classesContainer: "border rounded-[12px] border-[#16A249] bg-[#DEFCE9]",
      classesText: "text-[#1C713C]"
    };
  }
});

setTimeout(() => emits("destroy"), props.delay);

</script>

<template>
  <div class="fixed bottom-1 w-full z-[9999] flex justify-center">
    <div class="p-4 flex flex-row flex-nowrap items-center min-w-[666px]"
         :class="iconSetting!.classesContainer">
      <custom-icon variant="outlined" class="mr-4"
                   :class="iconSetting!.classesText"
                   :name="iconSetting!.iconName" />
      <span class="font-bold"
            :class="iconSetting!.classesText" v-html="msg" />
      <custom-icon class="ml-auto cursor-pointer"
                   :class="iconSetting!.classesText" name="close"
                   @click:icon="$emit('destroy')" />
    </div>
  </div>
</template>

<style scoped>

</style>