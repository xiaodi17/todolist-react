import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'antd/dist/antd.css'
class TodoList extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = store.getState()
  // }

  render() {
    return (
      <div>
        <input
          value={this.props.inputValue}
          onChange={this.props.changeInputValue}
        ></input>
        <button onClick={this.hand}>submit</button>
        <ul>
          <li>bell</li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    inputValue: state.inputValue
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeInputValue(e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
