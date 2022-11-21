<template>
  <DaisyFlex col items-center justify-center class="h-full gap-2 text-center">
    <DaisyText size="7xl">Not Found</DaisyText>
    <DaisyText size="4xl">Yo, that's a 404!</DaisyText>
    <DaisyText class="mt-5">We couldn't find that page. <br /></DaisyText>
    <RouterLink to="/">
      <DaisyButton primary>Return to Home</DaisyButton>
    </RouterLink>
  </DaisyFlex>
</template>
