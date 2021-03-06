export default function(state={}, action) {
  switch (action.type) {
    case "FETCH_RATES":
      return Object.assign({}, state, {
        rates: action.payload.data.rates
      })
    default:
      return state
  }
}
