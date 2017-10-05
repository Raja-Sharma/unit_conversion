import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import Rates from './components/Rates'
import reducers from './reducers'

const store = applyMiddleware()(createStore)

ReactDOM.render(
  <Provider store={store(reducers)}>
    <Rates />
  </Provider>,
  document.getElementById("root"))
