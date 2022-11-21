<script setup lang="ts">
useHead({
  title: 'Feathers-Pinia + Vite',
  meta: [
    {
      name: 'description',
      content: 'Feathers-Pinia + Vue + Vite for the perfect Single Page App experience',
    },
  ],
  link: [],
})

const authStore = useAuthStore()
</script>

<template>
  <Loading v-if="!authStore.isInitDone"> Loading </Loading>
  <RouterView v-else />
</template>
