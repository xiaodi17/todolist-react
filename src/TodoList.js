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
        <button onClick={this.props.handleClick}>submit</button>
        <ul>
          {this.props.list.map((item, index) => {
            return (
              <li onClick={this.props.handleDelete} key={index}>
                {item}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list
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
    },

    handleClick() {
      const action = {
        type: 'add_item'
      }
      dispatch(action)
    },

    handleDelete() {
      const action = {
        type: 'delete_item'
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
