import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'
class TodoList extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = store.getState()
  // }

  render() {
    const { inputValue, changeInputValue, handleClick } = this.props
    return (
      <div style={{ marginTop: '10px', marginLeft: '10px' }}>
        <Input
          placeholder="todo info"
          style={{ width: '300px', marginRight: '10px' }}
          value={inputValue}
          onChange={changeInputValue}
        ></Input>
        <Button type="primary" onClick={handleClick}>
          submit
        </Button>
        <List
          style={{ marginTop: '10px', marginLeft: '10px', width: '300px' }}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.props.handleDelete.bind(this, index)}>
              {item}
            </List.Item>
          )}
        ></List>
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
