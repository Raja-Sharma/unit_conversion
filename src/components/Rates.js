import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRates } from '../actions'

class Rates extends Component {

  componentDidMount() {
    this.props.fetchRates()
  }

  render() {
    console.log(this.props);
    return (
      <h1>Rates</h1>
    )
  }
}

function mapStateToProps(state) {
  return {rates: state.rates}
}

export default connect(mapStateToProps, { fetchRates })(Rates)
