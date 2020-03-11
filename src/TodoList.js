import React, { Component, Fragment } from 'react'
// import TodoItem from './TodoItem'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    console.log(store.getState())
    // this.handleInputChange = this.handleInputChange.bind(this)
    // this.handleBtnClick = this.handleBtnClick.bind(this)
    // this.handleItemDelete = this.handleItemDelete.bind(this)
  }
  render() {
    return (
      <Fragment>
        <div style={{ marginTop: '10px', marginLeft: '10px' }}>
          <Input
            value={this.state.inputValue}
            placeholder="todo info"
            style={{ width: '300px', marginRight: '10px' }}
          />
          <Button type="primary">submit</Button>
        </div>
        <List
          style={{ marginTop: '10px', marginLeft: '10px', width: '300px' }}
          bordered
          dataSource={this.state.list}
          renderItem={item => <List.Item>{item}</List.Item>}
        ></List>
      </Fragment>
    )
  }
}

export default TodoList
