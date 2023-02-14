<template>
  <div>
    <TitleSecondary class="mb-4">{{ title }}</TitleSecondary>
    <div>
      <table class="w-full">
        <tr class="capitalize">
          <th v-for="headerKey in tableHeaders" :key="headerKey" class="p-4">
            {{ headerKey }}
          </th>
        </tr>
        <tr
          v-for="(rowData, indexData) in data"
          :key="indexData"
          :class="[
            'cursor-pointer hover:bg-gray-400',
            { 'bg-gray-300': indexData % 2 === 0 },
          ]"
          @click="goToChart(rowData.name)"
        >
          <td
            v-for="headerKey in tableHeaders"
            :key="`${headerKey}-${indexData}`"
            :class="['p-2', getClassColor(headerKey, rowData[headerKey])]"
          >
            {{ rowData[headerKey] ? rowData[headerKey] : '--' }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import TitleSecondary from '@/components/atoms/title/secondary.vue'
import type { FinanceData } from '@/helpers/types'

const props = defineProps({
  title: String,
  data: { type: Array<FinanceData>, required: true },
  type: { tpe: String, required: true },
})

const router = useRouter()

const tableHeaders = computed(() => {
  if (props.data[0]) {
    return Object.keys(props.data[0])
  }
  return []
})

const goToChart = (name: String) => {
  router.push(`/dashboard/quote/${props.type}/${name}`)
}

const getClassColor = (key: String, value: Number) => {
  if (key === 'variation') {
    if (value === 0) {
      return 'font-bold'
    }
    return value > 0 ? 'font-bold text-indigo-900' : 'font-bold text-red-900'
  }
}
</script>
