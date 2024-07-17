export enum StatusTask {
  TO_DO = 1,
  IN_PROGRESS = 2,
  DONE = 3
}

export const TaskStyle: Record<number, {class: string}> = {
  [StatusTask.TO_DO]: {
    class: 'bg-[#F8BD1C]'
  },
  [StatusTask.IN_PROGRESS]: {
    class: 'bg-[#1AD698]'
  },
  [StatusTask.DONE]: {
    class: 'bg-[#4339F2]'
  }
}

