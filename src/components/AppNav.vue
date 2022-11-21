<script setup lang="ts">
import Logo from '~icons/logos/feathersjs'
import UserIcon from '~icons/feather/user'
import ChevronDownIcon from '~icons/feather/chevron-down'
import LoginIcon from '~icons/feather/log-in'

const authStore = useAuthStore()
const router = useRouter()

const logout = async () => {
  await authStore.logout()
  router.push('/')
}
</script>

<template>
  <DaisyNavbar class="bg-neutral/30">
    <DaisyNavbarStart>
      <RouterLink to="/" class="flex flex-row gap-2 items-center">
        <Logo class="text-2xl bg-white rounded-full" />
        <DaisyText size="xl">Feathers-Pinia + Vite</DaisyText>
      </RouterLink>
    </DaisyNavbarStart>

    <DaisyNavbarCenter></DaisyNavbarCenter>

    <DaisyNavbarEnd>
      <DaisyDropdown end v-if="authStore.user">
        <DaisyButton circle class="relative">
          <UserIcon class="text-xl" />
          <ChevronDownIcon class="absolute right-1 text-[9px]" />
        </DaisyButton>
        <DaisyDropdownContent>
          <DaisyMenu class="bg-base-300 shadow-lg rounded-lg whitespace-nowrap">
            <DaisyMenuItem>
              <RouterLink to="/app/me">My Account</RouterLink>
            </DaisyMenuItem>
            <DaisyMenuItem>
              <a href="javascript://" @click="logout">Logout</a>
            </DaisyMenuItem>
          </DaisyMenu>
        </DaisyDropdownContent>
      </DaisyDropdown>

      <RouterLink v-else to="/login">
        <DaisyTooltip bottom tip="Login">
          <DaisyButton circle>
            <LoginIcon />
          </DaisyButton>
        </DaisyTooltip>
      </RouterLink>
    </DaisyNavbarEnd>
  </DaisyNavbar>
</template>
