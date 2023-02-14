<template>
  <div class="p-4 md:p-8">
    <div class="flex justify-between mb-6">
      <TitlePrimary>Dashboard</TitlePrimary>
      <ButtonPrimary>
        <IconRefresh class="text-white" width="20px" height="20px" />
      </ButtonPrimary>
    </div>
    <div class="flex">
      <div class="flex-1">
        <InfoTable title="Currencies:" :data="currencies" />
      </div>
      <div class="flex-1">List 2</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TitlePrimary from '@/components/atoms/title/primary.vue'
import InfoTable from '@/components/molecules/infoTable.vue'
import ButtonPrimary from '@/components/atoms/button/primary.vue'
import IconRefresh from '@/components/atoms/icon/refresh.vue'

const currencies = [
  {
    name: 'Dollar',
    buy: 5.2106,
    sell: 5.2106,
    variation: -0.061,
  },
  {
    name: 'Euro',
    buy: 5.5923,
    sell: 5.5907,
    variation: 0.014,
  },
  {
    name: 'Pound Sterling',
    buy: 6.2779,
    sell: null,
    variation: 0.006,
  },
  {
    name: 'Argentine Peso',
    buy: 0.0275,
    sell: null,
    variation: -0.021,
  },
  {
    name: 'Canadian Dollar',
    buy: 3.8904,
    sell: null,
    variation: -0.03,
  },
  {
    name: 'Australian Dollar',
    buy: 3.6291,
    sell: null,
    variation: 0.11,
  },
  {
    name: 'Japanese Yen',
    buy: 0.0398,
    sell: null,
    variation: -0.118,
  },
  {
    name: 'Renminbi',
    buy: 0.7671,
    sell: null,
    variation: -0.067,
  },
  {
    name: 'Bitcoin',
    buy: 128898.354,
    sell: 128898.354,
    variation: 0.388,
  },
]
</script>
