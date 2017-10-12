import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchRates, dollarInput } from '../actions'
import { Field, reduxForm } from 'redux-form'

class Rates extends Component {

  componentDidMount() {
    this.props.fetchRates()
  }

  renderRates() {
    return Object.keys(this.props.rates).map(k => {
      return <li key={k}>{k}: {this.props.rates[k] * this.props.usdInput }</li>
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
        <h1>Rates</h1>
        <form>
          <div>
            <label>USD</label>
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

Rates = connect(mapStateToProps, mapDispatchToProps)(Rates)

export default reduxForm({
  form: 'usd'
})(Rates)
