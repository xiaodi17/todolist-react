import React, { Component, Fragment } from 'react'
// import TodoItem from './TodoItem'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'
// import { ADD_TODO_ITEM, DELETE_TODO_ITEM } from './store/actionTypes'
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction
} from './store/actionCreators'
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    store.subscribe(this.handleStoreChange)
    this.handleBtnClick = this.handleBtnClick.bind(this)
  }
  render() {
    return (
      <Fragment>
        <div style={{ marginTop: '10px', marginLeft: '10px' }}>
          <Input
            value={this.state.inputValue}
            placeholder="todo info"
            style={{ width: '300px', marginRight: '10px' }}
            onChange={this.handleInputChange}
          />
          <Button type="primary" onClick={this.handleBtnClick}>
            submit
          </Button>
        </div>
        <List
          style={{ marginTop: '10px', marginLeft: '10px', width: '300px' }}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.handleItemDelete.bind(this, index)}>
              {item}
            </List.Item>
          )}
        ></List>
      </Fragment>
    )
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  handleStoreChange() {
    this.setState(store.getState())
  }

  handleBtnClick() {
    const action = getAddItemAction()
    store.dispatch(action)
  }

  handleItemDelete(index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
}

export default TodoList
