<script setup lang="ts">
const colorMode = useColorMode()
const themes = useThemes()
const authStore = useAuthStore()
</script>

<template>
  <div class="transition-colors duration-300">
    <DaisyHero class="h-[32rem] bg-base-300">
      <DaisyHeroContent>
        <DaisyFlex col center class="max-w-xl text-center gap-5">
          <DaisyText is="h1" size="5xl" bold> Feathers-Pinia + Vite </DaisyText>
          <DaisyText xl> Welcome to the Perfect Single Page App Stack. </DaisyText>
          <div>
            <RouterLink v-if="authStore.user" to="/app">
              <DaisyButton primary> Open App </DaisyButton>
            </RouterLink>
            <RouterLink v-else to="/login">
              <DaisyButton primary> Get Started </DaisyButton>
            </RouterLink>
          </div>
        </DaisyFlex>
      </DaisyHeroContent>
    </DaisyHero>

    <DaisyFlex v-if="!authStore.user" items-center col class="py-8 gap-4">
      <DaisyText>Try the login redirect while not logged in</DaisyText>
      <RouterLink to="/app/me">
        <DaisyButton>Open the Profile Page</DaisyButton>
      </RouterLink>
    </DaisyFlex>

    <DaisyCard class="bg-base-200 mx-auto max-w-md text-center my-12">
      <DaisyCardBody class="gap-4">
        <DaisyText size="3xl"> Set The Mood </DaisyText>
        <DaisyText size="lg">
          With
          <DaisyLink primary href="https://daisyui.com" target="blank" class="font-bold"> DaisyUI </DaisyLink>
          under the hood, you can <br />pick your favorite theme.
        </DaisyText>

        <DaisyFormControl class="mx-auto w-60">
          <DaisySelect
            v-model="colorMode.preference"
            :options="themes"
            class="select select-bordered w-full max-w-xs"
          />
        </DaisyFormControl>
      </DaisyCardBody>
    </DaisyCard>
  </div>
</template>
