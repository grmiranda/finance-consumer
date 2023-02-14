<template>
  <section class="bg-white m-4 md:m-8 w-full rounded-2xl">
    <QuotesDashboard />
  </section>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { useCookies } from 'vue3-cookies'
import QuotesDashboard from '@/components/organims/quotesDashboard.vue'

const router = useRouter()
const { cookies } = useCookies()

onBeforeMount(() => {
  if (!cookies.get('user_session')) {
    router.replace('/auth/login')
  }
})
</script>
