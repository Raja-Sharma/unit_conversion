import axios from 'axios'


const RATES_URL = "https://api.fixer.io/latest?base=USD"

export function fetchRates() {
  const request = axios.get(RATES_URL)
  return {
    type: "FETCH_RATES",
    payload: Promise.resolve(request)
  }
}
