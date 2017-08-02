import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AddPlayer extends Component {
  static propTypes = {
    handleAddPlayer: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }

  updateQuery = (value) => {
    this.setState({
      query: value
    })
    this.props.handleAddPlayer(value)
  }

  render = () => {
    return (
      <div className='add-player'>
        <div className='add-player-bar'>
          <div className="add-player-input-wrapper">
            <input
              type="text"
              placeholder="Search by player id"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default AddPlayer
