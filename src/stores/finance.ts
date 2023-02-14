import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFinanceStore = defineStore('finance', () => {
  const currencies = ref<Array<Object>>([])
  const stocks = ref<Array<Object>>([])

  function setCurrencies(currenciesResponse: Array<Object>) {
    delete currenciesResponse.source
    currencies.value = []
    Object.values(currenciesResponse).forEach((currency) => {
      currencies.value.push(currency)
    })
  }
  function setStocks(stocksResponse: Array<Object>) {
    delete stocksResponse.source
    stocks.value = []
    Object.values(stocksResponse).forEach((currency) => {
      stocks.value.push(currency)
    })
  }

  return { currencies, stocks, setCurrencies, setStocks }
})
