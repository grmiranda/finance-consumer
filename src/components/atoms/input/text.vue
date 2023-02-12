<template>
  <div class="relative">
    <div class="label--floating">
      <label for="input">{{ title }}</label>
    </div>
    <input name="input" :type="type" :class="['border border-indigo-300 focus:outline-indigo-300 py-3 px-6 w-full rounded-md', { 'border-red-400': error}]" :value="modelValue" @input="updateValue" />
    <span v-if="error" class="text-xs text-red-400">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  type: { type: String, default: "text" },
  title: String,
  modelValue: String,
  error: String || null || undefined,
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (event: Event) => {
  const target = <HTMLInputElement>event.target
  emit('update:modelValue', target.value)
}
</script>

<style>
.label--floating {
  position: absolute;
  background: white;
  font-size: 14px;
  top: -10px;
  left: 10px;
  padding: 0 5px;
}
</style>
