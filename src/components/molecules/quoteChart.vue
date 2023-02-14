<template>
  <div class="p-4 md:p-8">
    <div class="flex justify-between mb-6">
      <TitlePrimary>Variation Chart for: {{ id }}</TitlePrimary>
      <ButtonPrimary @click="goBack">
        <IconArrowBack class="text-white" width="20px" height="20px" />
      </ButtonPrimary>
    </div>
    <div>
      <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useFinanceStore } from '@/stores/finance'
import TitlePrimary from '@/components/atoms/title/primary.vue'
import IconArrowBack from '@/components/atoms/icon/arrowBack.vue'
import ButtonPrimary from '@/components/atoms/button/primary.vue'
import type { FinanceHistory } from '@/helpers/types'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const props = defineProps({
  id: { tpe: String, required: true },
  type: { tpe: String, required: true },
})

const router = useRouter()
const financeStore = useFinanceStore()
const chartOptions = {
  responsive: true,
}

const chartData = computed(() => {
  const history: Array<FinanceHistory> =
    props.type === 'currencies'
      ? financeStore.currenciesHistory
      : financeStore.stocksHistory
  const labels: Array<String> = []
  const datasetsData: Array<Number> = []
  history.forEach((financeData) => {
    labels.push(
      `${addZero(financeData.time.getHours())}:${addZero(
        financeData.time.getMinutes()
      )}:${addZero(financeData.time.getSeconds())}`
    )
    const variation = financeData.history.find((quote) => {
      return quote.name === props.id
    })
    datasetsData.push(variation ? variation.variation : 0)
  })
  return {
    labels,
    datasets: [
      {
        label: 'Variation',
        data: datasetsData,
        backgroundColor: 'rgba(79, 70, 229, 0.7)',
      },
    ],
  }
})

const goBack = () => {
  router.go(-1)
}

const addZero = (number: number) => {
  return number < 10 ? '0' + number : number
}
</script>
