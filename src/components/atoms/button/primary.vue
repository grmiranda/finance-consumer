<template>
  <button
    class="border bg-indigo-600 hover:bg-indigo-800 text-white py-2 px-6 rounded-md"
    :type="type"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import type { PropType, ButtonHTMLAttributes } from 'vue'

defineProps({
  type: {
    type: (String as PropType<ButtonHTMLAttributes['type']>) || undefined,
    default: 'button',
  },
  title: String,
  modelValue: String,
  error: String,
})
</script>
