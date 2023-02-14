import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { FinanceHistory, FinanceData } from '@/helpers/types'

export const useFinanceStore = defineStore('finance', () => {
  const currenciesHistory = ref<Array<FinanceHistory>>([])
  const stocksHistory = ref<Array<FinanceHistory>>([])
  const currencies = ref<Array<FinanceData>>([])
  const stocks = ref<Array<FinanceData>>([])

  function setCurrencies(currenciesResponse: Array<Object>) {
    delete currenciesResponse.source
    currencies.value = []
    Object.values(currenciesResponse).forEach((currency) => {
      currencies.value.push(currency)
    })
    currenciesHistory.value.push({
      time: new Date(),
      history: currencies.value,
    })
  }
  function setStocks(stocksResponse: Array<Object>) {
    delete stocksResponse.source
    stocks.value = []
    Object.values(stocksResponse).forEach((currency) => {
      stocks.value.push(currency)
    })
    stocksHistory.value.push({
      time: new Date(),
      history: stocks.value,
    })
  }

  return {
    currencies,
    stocks,
    currenciesHistory,
    stocksHistory,
    setCurrencies,
    setStocks,
  }
})
