<template>
  <div class="p-8 sm:w-96">
    <div class="mb-16 text-center">
      <TitlePrimary>Register</TitlePrimary>
      <p>Provide a username and password to create your account</p>
    </div>
    <form @submit.prevent="register">
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
      <InputText
        v-model="passwordRepeat"
        title="Repeat Password"
        type="password"
        class="mb-6"
        :error="errors.passwordRepeat"
      />
      <div class="flex justify-between">
        <router-link to="/auth/login" class="text-sm text-blue-700 mr-4">
          Alredy have an account?<br />Login here
        </router-link>
        <ButtonPrimary type="submit">Create</ButtonPrimary>
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
const passwordRepeat = ref('')
const errors = reactive({
  username: null,
  password: null,
  passwordRepeat: null,
})

const register = () => {
  console.log(username.value, password.value, passwordRepeat.value)
}
</script>
