<template>
  <div>
    <TitleSecondary class="mb-4">{{ title }}</TitleSecondary>
    <div>
      <table class="w-full">
        <tr>
          <th
            v-for="headerRow in tableHeaders"
            :key="headerRow"
            class="capitalize"
          >
            {{ headerRow }}
          </th>
        </tr>
        <tr v-for="(rowData, indexData) in data" :key="indexData">
          <td
            v-for="headerRow in tableHeaders"
            :key="`${headerRow}-${indexData}`"
          >
            {{ rowData[headerRow] ? rowData[headerRow] : '--' }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import TitleSecondary from '@/components/atoms/title/secondary.vue'

const props = defineProps({
  title: String,
  data: { type: Array<Object>, required: true },
})

const tableHeaders = computed(() => {
  if (props.data[0]) {
    return Object.keys(props.data[0])
  }
  return []
})
</script>
