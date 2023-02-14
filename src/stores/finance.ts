import { ref } from 'vue'
import { defineStore } from 'pinia'
import type {
  FinanceHistory,
  FinanceData,
  FinanceResponce,
} from '@/helpers/types'

export const useFinanceStore = defineStore('finance', () => {
  const currenciesHistory = ref<Array<FinanceHistory>>([])
  const stocksHistory = ref<Array<FinanceHistory>>([])
  const currencies = ref<Array<FinanceData>>([])
  const stocks = ref<Array<FinanceData>>([])

  function setCurrencies(currenciesResponse: FinanceResponce) {
    delete currenciesResponse.source
    currencies.value = []
    Object.values(currenciesResponse).forEach((currency: FinanceData) => {
      currencies.value.push(currency)
    })
    currenciesHistory.value.push({
      time: new Date(),
      history: currencies.value,
    })
  }
  function setStocks(stocksResponse: FinanceResponce) {
    delete stocksResponse.source
    stocks.value = []
    Object.values(stocksResponse).forEach((currency: FinanceData) => {
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
