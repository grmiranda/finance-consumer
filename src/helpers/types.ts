export interface FinanceData {
  name: string
  variation: number
  buy?: number
  sell?: number
  location?: string
  points?: number
}

export interface FinanceHistory {
  time: Date
  history: Array<FinanceData>
}

export interface FinanceResponce {
  source?: string
}
