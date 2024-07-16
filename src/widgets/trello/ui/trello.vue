<script setup lang="ts">
import { computed, ref, shallowRef } from "vue";

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
      title: "Таска 1",
      statusId: 2
    },
    {
      id: 2,
      title: "Таска 2",
      statusId: 2
    },
    {
      id: 3,
      title: "Таска 3",
      statusId: 1
    },
    {
      id: 4,
      title: "Таска 4",
      statusId: 1
    },
    {
      id: 5,
      title: "Таска 5",
      statusId: 1
    },
    {
      id: 6,
      title: "Таска 6",
      statusId: 3
    }
  ]
);


const tasksIntoToDo = computed(() => tasks.value.filter(task => task.statusId === STATUS_TASK_TO_DO));
const tasksIntoInProgress = computed(() => tasks.value.filter(task => task.statusId === STATUS_TASK_IN_PROGRESS));
const tasksIntoInDone = computed(() => tasks.value.filter(task => task.statusId === STATUS_TASK_DONE));

const collectionTasks = computed<Record<string, ITask[]>>(() => {
  return {
    "1": (tasksIntoToDo.value),
    "2": (tasksIntoInProgress.value),
    "3": (tasksIntoInDone.value)
  };
});

interface ITask {
  id: number,
  title: string;
  statusId: number;
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

</script>

<template>
  <div class="board w-screen h-screen p-10 flex flex-row gap-6 bg-gray-200">
    <div v-for="board in boards"
         :key="board.id"
         @dragenter.prevent
         @dragover.prevent
         @drop="onDrop($event, board.id)"
         class="board w-full text-center rounded-2xl bg-white"
    >
      <h1 class="select-none text-3xl font-bold p-4">{{ board.title }}</h1>
      <div class="content flex flex-col items-center p-4 gap-4">
        <div
          v-for="task in collectionTasks[board.id.toString()] || []"
          :key="task.id"
          class="card select-none border rounded w-full p-2 bg-blue-200"
          draggable="true"
          @dragstart="onDragStart($event, task)"
        >
          {{ task.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.placeholder {
  @apply bg-white
}
</style>