<template>
  <div class="p-4 md:p-8">
    <TitlePrimary>Variation Chart for: {{ id }}</TitlePrimary>
  </div>
</template>

<script setup lang="ts">
import TitlePrimary from '@/components/atoms/title/primary.vue'

const prop = defineProps({
  id: { tpe: String, required: true },
  type: { tpe: String, required: true },
})
</script>
