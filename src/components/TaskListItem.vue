<script setup lang="ts">
import type { Task } from '../models/task'
import InfoIcon from '~icons/feather/info'
import { useClone } from 'feathers-pinia'

interface Props {
  task: Task
}
const props = defineProps<Props>()

const _task = useClone(props, 'task')
</script>

<template>
  <DaisyFlex row items-center class="group gap-1">
    <DaisyCheckbox v-model="task.isCompleted" class="rounded-full" />
    <DaisyTextInput sm v-model="task.description" ghost class="w-full text-lg" />
    <!-- <DaisyButton circle ghost class="opacity-20 group-hover:opacity-100">
        <InfoIcon class="text-xl" />
      </DaisyButton> -->
  </DaisyFlex>
</template>
