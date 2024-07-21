<script setup lang="ts">
import draggable from "vuedraggable";
import { computed, onMounted, ref, shallowRef } from "vue";
import imgTask1 from "@assets/tasks/imgTask1.jpg";
import imgSub1 from "@assets/subs/sub1.png";
import imgSub2 from "@assets/subs/sub2.png";
import imgTask2 from "@assets/tasks/imgTask2.jpg";
import imgSub3 from "@assets/subs/sub3.png";
import imgSub4 from "@assets/subs/sub4.png";
import imgTask3 from "@assets/tasks/imgTask3.jpg";
import imgSub5 from "@assets/subs/sub5.png";
import imgSub6 from "@assets/subs/sub6.png";
import imgTask4 from "@assets/tasks/imgTask4.jpg";
import imgTask5 from "@assets/tasks/imgTask5.jpg";

import { taskCard } from "@entities/trello/task";
import { customSubscribers } from "@shared/ui/customSubscribers";
import { actionsButton } from "@features/trello/actionsButton/ui";

interface ITask {
  id: number,
  title: string,
  description?: string,
  statusId: number,
  img?: string,
  subscribers?: string[],
  message?: number,
  pinned?: number,
  like?: number
}

const taskTodo = ref<ITask[] | null>(null);
const taskProgress = ref<ITask[] | null>(null);
const taskDone = ref<ITask[] | null>(null);
const isLoading = shallowRef(true);

const iniTasks = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Запрос");
    }, 2000);
  });
};

onMounted(async () => {
  const response = await iniTasks();
  console.log(1);
  if (response) {
    taskTodo.value = [
      {
        id: 3,
        title: "Таска 3",
        statusId: 1,
        img: imgTask3,
        subscribers: [imgSub5, imgSub6],
        message: 11,
        pinned: 21,
        like: 7
      },
      {
        id: 4,
        title: "Таска 4",
        statusId: 1,
        img: imgTask4,
        subscribers: [imgSub1, imgSub2, imgSub3, imgSub4, imgSub5, imgSub6]
      },
      {
        id: 5,
        title: "Таска 5",
        statusId: 1,
        img: imgTask5,
        subscribers: [imgSub5],
        message: 111,
        pinned: 211,
        like: 71
      }
    ];
    taskProgress.value = [
      {
        id: 2,
        title: "Таска 2",
        statusId: 2,
        img: imgTask2,
        subscribers: [imgSub3, imgSub4],
        pinned: 21
      }

    ],
      taskDone.value = [
        {
          id: 6,
          title: "Таска 6",
          statusId: 3,
          message: 7
        }

      ];
  }
  isLoading.value = false;
});


const dragOptions = computed(() => {
  return {
    animation: 200,
    disabled: false,
    group: "task",
    ghostClass: "ghost",
    itemKey: "id"
  };
});
</script>

<template>
  <div class="board w-screen h-screen p-10 flex flex-row gap-10 bg-gray-200">
    <div v-if="!isLoading" class="flex flex-row justify-center gap-10">
      <div class="board w-full overflow-hidden text-center rounded-2xl bg-white">
        <draggable
          class="no-scrollbar flex flex-col overflow-auto h-[80%] items-center px-4 pb-10 gap-4"
          v-bind="dragOptions"
          :list="taskTodo">
          <template #item="{ element, index }">
            <task-card
              :status-id="element.statusId"
              :text="element.title"
              :img="element.img"
              class="mb-7">
              <template #subscribes>
                <custom-subscribers
                  :imgs-src="element?.subscribers" />
              </template>
              <template #actions>
                <actions-button
                  :message-count="element.message || 0"
                  :pinned-count="element.pinned || 0"
                  :like-count="element.like || 0"
                />
              </template>
            </task-card>
          </template>
        </draggable>
      </div>

      <div class="board w-full overflow-hidden text-center rounded-2xl bg-white">
        <draggable
          v-bind="dragOptions"
          :list="taskProgress">
          <template #item="{ element }">
            <task-card
              :status-id="element.statusId"
              :text="element.title"
              :img="element.img"
              class="mb-7">
              <template #subscribes>
                <custom-subscribers
                  :imgs-src="element.subscribers" />
              </template>
              <template #actions>
                <actions-button
                  :message-count="element.message || 0"
                  :pinned-count="element.pinned || 0"
                  :like-count="element.like || 0"
                />
              </template>
            </task-card>

          </template>
        </draggable>
      </div>

      <div class="board w-full overflow-hidden text-center rounded-2xl bg-white">
        <draggable
          v-bind="dragOptions"
          :list="taskDone">
          <template #item="{ element }">
            <task-card
              :status-id="element.statusId"
              :text="element.title"
              :img="element.img"
              class="mb-7">
              <template #subscribes>
                <custom-subscribers
                  :imgs-src="element.subscribers" />
              </template>
              <template #actions>
                <actions-button
                  :message-count="element.message || 0"
                  :pinned-count="element.pinned || 0"
                  :like-count="element.like || 0"
                />
              </template>
            </task-card>

          </template>
        </draggable>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>