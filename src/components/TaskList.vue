<script setup lang="ts">
const { Task, taskStore } = useTaskStore()

const tasks = [1, 2, 3, 4, 5].map(() => new Task().addToStore() as any as typeof Task)
</script>

<template>
  <DaisyCard class="bg-base-200 w-1/3">
    <DaisyCardBody>
      <DaisyFlex row items-center justify-between>
        <DaisyText primary size="4xl" bold>Reminders</DaisyText>
        <DaisyText primary size="4xl">5</DaisyText>
      </DaisyFlex>

      <DaisyFlex row items-center justify-between class="mt-3">
        <DaisyFlex row items-center>
          <DaisyText>173 Completed</DaisyText>
          <DaisyText class="block px-1">•</DaisyText>
          <DaisyLink hover primary class="font-medium">Clear</DaisyLink>
        </DaisyFlex>

        <DaisyLink hover primary class="font-medium">Show</DaisyLink>
      </DaisyFlex>

      <hr class="border-t border-base-content/20" />

      <DaisyFlex col class="gap-3 py-1">
        <TaskListItem v-for="task in tasks" :task="task" />
      </DaisyFlex>
    </DaisyCardBody>
  </DaisyCard>
</template>
