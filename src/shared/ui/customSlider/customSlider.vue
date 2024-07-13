<script setup lang="ts">
import { onMounted, ref, shallowRef } from "vue";
import CustomIcon from "@shared/ui/customIcon/customIcon.vue";

type TSlide = {
  id: number,
  route: string,
  img: string,
}

interface IPropsCustomSlider {
  items: TSlide[],
  autoplay?: boolean,
  duration?: number,
}

const props = defineProps<IPropsCustomSlider>();

const carouselRef = ref<null | HTMLElement>(null);
const isDragStart = shallowRef(false);

const dragging = (e: MouseEvent) => {
  if (!isDragStart.value) return;
  let positionDiff = e.pageX - (prevPageX.value as number);
  carouselRef.value!.scrollLeft = (prevScrollLeft.value as number) - positionDiff;
};

const prevPageX = ref<null | number>(null);
const prevScrollLeft = ref<null | number>(null);

const dragStart = (e: MouseEvent) => {
  isDragStart.value = true;
  prevPageX.value = e.pageX;
  prevScrollLeft.value = carouselRef.value!.scrollLeft;
};

const dragEnd = (e: MouseEvent) => {
  isDragStart.value = false;
};

const slideClick = (e: MouseEvent) => {

};

const clickOnPrev = (e) => {
  carouselRef.value!.scrollLeft -= firstSlideWidth.value as number;
};
const clickOnNext = (e) => {
  carouselRef.value!.scrollLeft += firstSlideWidth.value as number;
};

const slidesRef = ref<HTMLInputElement[] | null>(null);
const firstSlideWidth = shallowRef<number | null>(null);
const searchElWidth = () => {
  const interval = setInterval(() => {
    firstSlideWidth.value = slidesRef.value![0].offsetWidth;
    if (firstSlideWidth.value) {
      firstSlideWidth.value += 1;
      clearInterval(interval);
    }
  });
};
onMounted(() => {
  searchElWidth();
});


</script>

<template>
  <div class="relative wrapper border mx-6 max-w-[600px]" @mouseleave="dragEnd">
    <div
      ref="carouselRef"
      @mousemove.prevent="dragging"
      @mousedown.stop.prevent="dragStart"
      @mouseup.stop.prevent="dragEnd"
      class="carousel  select-none flex flex-row overflow-hidden" :class="{'scroll-smooth': !isDragStart}">
      <img ref="slidesRef" v-for="item in items" :key="item.id" :src="item.img"
           class="slide cursor-pointer w-[calc(100%)] h-[340px] object-cover " />
      <div
        @mouseup.stop
        @mousedown.stop
        @click="clickOnPrev"
        class="shadow cursor-pointer absolute top-1/2 -left-5 -translate-y-1/2
                flex justify-center items-center p-2
                  bg-gray-200 rounded-full w-min">
        <custom-icon size="small" name="arrow_back_ios" />
      </div>
      <div
        @mouseup.stop
        @mousedown.stop
        @click="clickOnNext"
        class="shadow cursor-pointer absolute top-1/2 -right-5 -translate-y-1/2
                flex justify-center items-center p-2
                  bg-gray-200 rounded-full w-min">
        <custom-icon name="arrow_forward_ios" size="small" />
      </div>
    </div>


  </div>
</template>

<style scoped>

</style>