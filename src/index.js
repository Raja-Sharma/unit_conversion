import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import App from './components/App'
import CurrencyRates from './containers/CurrencyRates'
import reducers from './reducers'
import ReduxPromise from 'redux-promise'

require("./css/application.css")

import { BrowserRouter, Route, Switch } from 'react-router-dom'

const store = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
  <Provider store={store(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/rates" component={CurrencyRates} />
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root"))
