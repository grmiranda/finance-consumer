export interface FinanceData {
  name: String
  variation: Number
  buy?: Number
  sell?: Number
  location?: String
  points?: Number
}

export interface FinanceHistory {
  time: Date
  history: Array<FinanceData>
}