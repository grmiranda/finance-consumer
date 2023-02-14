<template>
  <section class="bg-white m-4 md:m-8 w-full rounded-2xl">
    <QuoteChart :id="id" :type="type" />
  </section>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCookies } from 'vue3-cookies'
import QuoteChart from '@/components/molecules/quoteChart.vue'

const route = useRoute()
const router = useRouter()
const { cookies } = useCookies()
const id = route.params.id
const type = route.params.type

onBeforeMount(() => {
  if (!cookies.get('user_session')) {
    router.replace('/auth/login')
  }
})
</script>
