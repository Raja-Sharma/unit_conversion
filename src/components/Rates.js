import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRates } from '../actions'

class Rates extends Component {

  componentDidMount() {
    this.props.fetchRates()
  }

  renderRates() {
    return Object.keys(this.props.rates).map(k => {
      return <li key={k}>{k}: {this.props.rates[k]}</li>
    })
  }

  render() {
    return (
      <div>
        <h1>Rates</h1>
        <ul>
          {this.renderRates()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {rates: state.rates}
}

export default connect(mapStateToProps, { fetchRates })(Rates)
