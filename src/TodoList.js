import React, { Component, Fragment } from 'react'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: 'asdf',
      list: []
    }
  }
  render() {
    return (
      <Fragment>
        <div>
          <input
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <button>submit</button>
        </div>
        <ul>
          <li>study</li>
          <li>gym</li>
        </ul>
      </Fragment>
    )
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
    // console.log(this)
    // console.log(e.target.value)
  }
}

export default TodoList
