import React, { Component } from 'react'
// import { Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './App.css'

class App extends Component {
  static propTypes = {
    apikey: PropTypes.string.isRequired
  }

  state = {
    data: {}
  }

  componentWillMount = () => {
    let headers = new Headers()
    headers.append("TRN-API-KEY", this.props.apikey)
    fetch(`/api/profile/pc/millidavids`, {headers: headers})
      .then(res => res.json())
      .then(data => this.setState({data: data}))
  }

  render() {
    console.log(this.state.data)
    return (
      <div className="App">
      </div>
    )
  }
}

export default App
