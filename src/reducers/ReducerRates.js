export default function(state={}, action) {
  switch (action.type) {
    case "FETCH_RATES":
      return action.payload.data.rates
    default:
      return state
  }
}
