import React, { Component } from 'react'
// import { Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import AddPlayer from './AddPlayer'
import debounce from 'lodash.debounce'
import './App.css'

class App extends Component {
  static propTypes = {
    apikey: PropTypes.string.isRequired
  }

  state = {
    players: []
  }

  handleAddPlayer = (value) => {
    if (value !== '') {
      let headers = new Headers()
      headers.append("TRN-API-KEY", this.props.apikey)
      fetch(`/api/profile/pc/${value}`, {headers: headers})
      .then(res => res.json())
      .then(data => console.log(data))
    }
  }

  // componentWillMount = () => {
  //   let headers = new Headers()
  //   headers.append("TRN-API-KEY", this.props.apikey)
  //   fetch(`/api/profile/pc/millidavids`, {headers: headers})
  //     .then(res => res.json())
  //     .then(data => this.setState({data: data}))
  // }

  render = () => {
    return (
      <div className="App">
        <AddPlayer handleAddPlayer={debounce(this.handleAddPlayer, 500)} />
        <div className="players">

        </div>
      </div>
    )
  }
}

export default App
