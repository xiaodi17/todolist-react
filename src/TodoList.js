import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input, Button } from 'antd'
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
        <Input
          size="large"
          value={inputValue}
          onChange={changeInputValue}
        ></Input>
        <Button onClick={handleClick}>submit</Button>
        <ul>
          {this.props.list.map((item, index) => {
            return (
              <li
                key={index}
                onClick={this.props.handleDelete.bind(this, index)}
              >
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

    handleDelete(index) {
      // console.log('123', index)
      const action = {
        type: 'delete_item',
        index
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
