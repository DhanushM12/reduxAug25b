import React, { Component } from 'react'

class Task extends Component {
  render() {
    return (
      <div>
        <td>{this.props.task}</td>
      </div>
    )
  }
}

export default Task