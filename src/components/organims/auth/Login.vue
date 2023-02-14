<template>
  <div class="p-8 sm:w-96">
    <div class="mb-16 text-center">
      <TitlePrimary>Welcome!</TitlePrimary>
      <p>Glad to see you again</p>
    </div>
    <form @submit.prevent="login">
      <InputText
        v-model="username"
        title="Username"
        class="mb-6"
        :error="errors.username"
      />
      <InputText
        v-model="password"
        title="Password"
        type="password"
        class="mb-6"
        :error="errors.password"
      />
      <div class="flex justify-between">
        <router-link to="/auth/register" class="text-sm text-blue-700 mr-4">
          Don't have an account?<br />Sign up here
        </router-link>
        <ButtonPrimary type="submit">Login</ButtonPrimary>
      </div>
      <div class="flex justify-end text-xs text-red-400">
        {{ errorMessage }}
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useCookies } from 'vue3-cookies'
import InputText from '@/components/atoms/input/text.vue'
import TitlePrimary from '@/components/atoms/title/primary.vue'
import ButtonPrimary from '@/components/atoms/button/primary.vue'

const router = useRouter()
const { cookies } = useCookies()
const username = ref('')
const password = ref('')
const errorMessage = ref('')
let errors = reactive({
  username: '',
  password: '',
})

const clearValidation = () => {
  errors.username = ''
  errors.password = ''
  errorMessage.value = ''
}

const login = () => {
  clearValidation()
  const usernameValid = !!username.value
  const passwordValid = !!password.value
  if (!usernameValid) {
    errors.username = 'Provide a valid Username'
  }
  if (!passwordValid) {
    errors.password = 'Provide a valid Password'
  }

  if (usernameValid && passwordValid) {
    const userPassword = localStorage.getItem(username.value)
    if (userPassword && userPassword === password.value) {
      cookies.set('user_session', '25j_7Sl6xDq2Kc3ym0fmrSSk2xV2XkUkX', '10s')
      router.push('/dashboard')
    } else {
      errorMessage.value = 'Invalid Credentials'
    }
  }
}
</script>
