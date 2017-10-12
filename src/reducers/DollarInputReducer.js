export default function(state={usdInput:1}, action) {
  switch (action.type) {
    case "DOLLAR_INPUT":
      return Object.assign({}, state, {
        usdInput: action.payload
      })
    default:
      return state
  }
}
