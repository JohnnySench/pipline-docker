<script setup lang="ts" generic="T extends object">
import { ref, shallowRef } from "vue";

interface IPropsCustomDropdown {
  items: Array<T>,
  itemValue: keyof T,
  itemText: keyof T
}


const props = defineProps<Partial<IPropsCustomDropdown>>();

const selectedValue = ref("");

const isVisibleSelect = shallowRef(false);
const onSelectClick = () => {
  isVisibleSelect.value = !isVisibleSelect.value;
};

const itemsArr = [
  { name: "Instagram", id: 1 },
  { name: "Twitter", id: 2 },
  { name: "Vkontakte", id: 3 },
  { name: "Facebook", id: 4 }
];

const setSelect = (item: any) => {
  if (item.id === selectedValue.value.id) return
  selectedValue.value = item;
  isVisibleSelect.value = false;
};
</script>

<template>
  <div class="container dropdown relative m-8">
    <div @click="onSelectClick" :class="{'border-2 border-[#26489a] shadow': isVisibleSelect}"
         class="select hover:bg-[#323741] bg-[#2a2f3b] text-[#fff] flex justify-between
                items-center border-2 border-[#2a2f3b] rounded-2xl cursor-pointer p-4
                transition-all duration-300">
      <span class="selected">{{ selectedValue.name ?? selectedValue }}</span>
      <div :class="{'!rotate-180': isVisibleSelect}" class="caret w-0 h-0 border-l-[5px] border-l-transparent
                  border-r-[5px] border-r-transparent border-t-[6px]
                  transition duration-300"></div>
    </div>
    <ul @mouseleave="isVisibleSelect = false" :class="{'!block !opacity-100': isVisibleSelect}"
        class="menu list-none p-2 bg-[#000] border
               border-[#363a43] rounded-xl shadow text-[#9fa5b5] absolute
               top-full left-1/2 -translate-x-1/2 transition duration-200
                w-full z-[1] opacity-0 hidden">
      <li
        v-for="(item, index) in itemsArr"
        :key="index"
        @click="setSelect(item)"
        :class="{'bg-[#2a2d35]':item.id === selectedValue.id}"
        class="p-4 my-1 cursor-pointer hover:bg-[#2a2d35]">{{ item.name }}
      </li>
    </ul>
  </div>

</template>

<style scoped lang="postcss">

</style>