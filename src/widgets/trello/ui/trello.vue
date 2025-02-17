<script setup lang="ts">
import { computed, ref, shallowRef } from "vue";
import { taskCard } from "@entities/trello/task";
import { customSubscribers } from "@shared/ui/customSubscribers";
import { actionsButton } from "@features/trello/actionsButton/ui";
import imgTask1 from "@assets/tasks/imgTask1.jpg";
import imgTask2 from "@assets/tasks/imgTask2.jpg";
import imgTask3 from "@assets/tasks/imgTask3.jpg";
import imgTask4 from "@assets/tasks/imgTask4.jpg";
import imgTask5 from "@assets/tasks/imgTask5.jpg";

import imgSub1 from "@assets/subs/sub1.png";
import imgSub2 from "@assets/subs/sub2.png";
import imgSub3 from "@assets/subs/sub3.png";
import imgSub4 from "@assets/subs/sub4.png";
import imgSub5 from "@assets/subs/sub5.png";
import imgSub6 from "@assets/subs/sub6.png";


const STATUS_TASK_TO_DO = 1;
const STATUS_TASK_IN_PROGRESS = 2;
const STATUS_TASK_DONE = 3;

const boards = computed(() => {
  return [
    {
      id: 1,
      title: "To do"
    },
    {
      id: 2,
      title: "In progress"
    },
    {
      id: 3,
      title: "Done"
    }
  ];
});

const tasks = ref(
  [
    {
      id: 1,
      title: "Old fashioned recipe for preventing allergies and chemical sensitivities",
      description: "Why read motivational sayings? For motivation! You might need a bit, if you can use last year’s list of goals this year because it’s as good as new.",
      statusId: 2,
      img: imgTask1,
      subscribers: [imgSub1, imgSub2],
      message: 111
    },
    {
      id: 2,
      title: "Таска 2",
      statusId: 2,
      img: imgTask2,
      subscribers: [imgSub3, imgSub4],
      pinned: 21
    },
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
    },
    {
      id: 6,
      title: "Таска 6",
      statusId: 3,
      message: 7
    }
  ]
);


const tasksIntoToDo = computed(() => tasks.value.filter(task => task.statusId === STATUS_TASK_TO_DO));
const tasksIntoInProgress = computed(() => tasks.value.filter(task => task.statusId === STATUS_TASK_IN_PROGRESS));
const tasksIntoInDone = computed(() => tasks.value.filter(task => task.statusId === STATUS_TASK_DONE));

const collectionTasks = computed<Record<string, ITask[]>>(() => {
  return {
    "1": tasksIntoToDo.value,
    "2": tasksIntoInProgress.value,
    "3": tasksIntoInDone.value
  };
});

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

const isDragging = shallowRef(false);
const onDragStart = (e: DragEvent, task: ITask) => {
  isDragging.value = true;
  if (e.dataTransfer) {
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", String(task.id));
  }
};

const onDrop = (e: DragEvent, statusId: number) => {
  isDragging.value = false;
  if (e.dataTransfer) {
    const id = Number(e.dataTransfer.getData("text/plain"));
    tasks.value = tasks.value.map((task) => {
      if (task.id === id) {
        return { ...task, statusId };
      }
      return task;
    });
  }
};

const onClickChat = () => {
  console.log("onClickChat click");
};
const onClickFavorite = () => {
  console.log("onClickFavorite click");
};
const onClickBolt = () => {
  console.log("onClickBolt click");
};
const onClickAddSub = () => {
  console.log("onClickAddSub click");
};


</script>

<template>
  <div class="board w-screen h-screen p-10 flex flex-row gap-10 bg-gray-200">
    <div v-for="board in boards"
         :key="board.id"
         @dragenter.prevent
         @dragover.prevent
         @drop="onDrop($event, board.id)"
         class="board w-full overflow-hidden text-center rounded-2xl bg-white"
    >
      <h1 class="select-none text-3xl font-bold p-4">
        {{ board.title }} - ({{ (collectionTasks[board.id] || []).length }})
      </h1>
      <div class="no-scrollbar flex flex-col overflow-auto h-[80%] items-center px-4 pb-10 gap-4">
        <task-card
          v-for="(task, _) in collectionTasks[board.id.toString()] || []"
          :key="task.id"
          :status-id="task.statusId"
          :text="task.title"
          :img="task.img"
          class="select-none"
          draggable="true"
          @dragstart="onDragStart($event, task)"
        >
          <template #subscribes>
            <custom-subscribers
              :imgs-src="task.subscribers || []"
              @click:add-sub="onClickAddSub"
            />
          </template>
          <template #actions>
            <actions-button
              :message-count="task.message || 0"
              :pinned-count="task.pinned || 0"
              :like-count="task.like || 0"
              @click:icon-chat="onClickChat"
              @click:icon-favorite="onClickFavorite"
              @click:icon-bolt="onClickBolt"
            />
          </template>
        </task-card>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>