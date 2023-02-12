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
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import InputText from '@/components/atoms/input/text.vue'
import TitlePrimary from '@/components/atoms/title/primary.vue'
import ButtonPrimary from '@/components/atoms/button/primary.vue'
const username = ref('')
const password = ref('')
const errors = reactive({
  username: null,
  password: null,
})

const login = () => {
  console.log(username.value, password.value)
}
</script>
