<template>
  <div class="p-4 md:p-8">
    <div class="flex justify-between mb-6">
      <TitlePrimary>Dashboard</TitlePrimary>
      <ButtonPrimary @click="updateData">
        <IconRefresh class="text-white" width="20px" height="20px" />
      </ButtonPrimary>
    </div>
    <div class="grid lg:grid-cols-2 gap-12">
      <InfoTable
        v-if="financeStore.currencies"
        title="Currencies:"
        :data="financeStore.currencies"
        type="currencies"
      />
      <InfoTable
        v-if="financeStore.stocks"
        title="Stocks:"
        :data="financeStore.stocks"
        type="stocks"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, onMounted } from 'vue'
import { useFinanceStore } from '@/stores/finance'
import TitlePrimary from '@/components/atoms/title/primary.vue'
import InfoTable from '@/components/molecules/infoTable.vue'
import ButtonPrimary from '@/components/atoms/button/primary.vue'
import IconRefresh from '@/components/atoms/icon/refresh.vue'

const axios: any = inject('axios')
const financeStore = useFinanceStore()

onMounted(() => {
  updateData()
})

const updateData = () => {
  axios
    .get('finance')
    .then((response) => {
      financeStore.setCurrencies(response.data.results.currencies)
      financeStore.setStocks(response.data.results.stocks)
    })
    .catch((e: Error) => {
      console.log(e)
    })
}
</script>
