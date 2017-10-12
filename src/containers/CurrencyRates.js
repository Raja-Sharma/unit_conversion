import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchRates, dollarInput } from '../actions'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

class CurrencyRates extends Component {

  componentDidMount() {
    this.props.fetchRates()
  }

  renderRates() {
    return Object.keys(this.props.rates).map(k => {
      return <li key={k}>{k}: { (this.props.rates[k] * this.props.usdInput).toFixed(2) }</li>
    })
  }

  handleUSDEntry(e) {
    this.props.dollarInput(e.target.value)
  }

  render() {
    if (!this.props.rates) {
      return('loading...')
    }
    return (
      <div>
        <h1>Currency Conversion</h1>
        <form>
          <div>
            <label>USD base</label>
            <div>
              <Field
                onKeyUp={this.handleUSDEntry.bind(this)}
                name="amount"
                component="input"
                type="text"
                placeholder="enter amount in USD"
              />
            </div>
          </div>
        </form>
        <ul>
          {this.renderRates()}
        </ul>
        <Link to="/">back</Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { rates: state.rates.rates, usdInput: state.usd.usdInput }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRates: fetchRates, dollarInput: dollarInput }, dispatch)
}

CurrencyRates = connect(mapStateToProps, mapDispatchToProps)(CurrencyRates)

export default reduxForm({
  form: 'usd'
})(CurrencyRates)
