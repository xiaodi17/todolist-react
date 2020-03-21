import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'antd/dist/antd.css'
class TodoList extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = store.getState()
  // }

  render() {
    const { inputValue, changeInputValue, handleClick } = this.props
    return (
      <div>
        <input value={inputValue} onChange={changeInputValue}></input>
        <button onClick={handleClick}>submit</button>
        <ul>
          {this.props.list.map((item, index) => {
            return (
              <li onClick={this.props.handledelete} key={index}>
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
      console.log('123')
      const action = {
        type: 'add_item'
      }
      dispatch(action)
    },

    handleDelete() {
      console.log('123')
      const action = {
        type: 'delete_item'
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
