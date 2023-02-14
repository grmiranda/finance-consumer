<template>
  <section class="bg-white m-4 md:m-8 w-full rounded-2xl">
    <QuoteChart :id="id" :type="type" />
  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import QuoteChart from '@/components/molecules/quoteChart.vue'
const route = useRoute()

const id = route.params.id
const type = route.params.type
</script>
