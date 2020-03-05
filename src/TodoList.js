import React, { Component, Fragment } from 'react'

class TodoList extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <input />
          <button>submit</button>
        </div>
        <ul>
          <li>study</li>
          <li>gym</li>
        </ul>
      </Fragment>
    )
  }
}

export default TodoList
