import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }
  render() {
    return (
      <Fragment>
        <div style={{ marginTop: '10px', marginLeft: '10px' }}>
          <Input
            placeholder="todo info"
            style={{ width: '300px', marginRight: '10px' }}
            id="insertArea"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <Button type="primary" onClick={this.handleBtnClick}>
            submit
          </Button>
        </div>
        <List
          style={{ marginTop: '10px', marginLeft: '10px', width: '300px' }}
          bordered
          dataSource={this.getTodoItem()}
          renderItem={item => <List.Item>{item}</List.Item>}
        ></List>
      </Fragment>
    )
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          content={item}
          index={index}
          deleteItem={this.handleItemDelete}
        />
      )
    })
  }
  handleInputChange(e) {
    const value = e.target.value
    this.setState(() => ({
      inputValue: value
    }))
    //old way
    // this.setState({
    //   inputValue: e.target.value
    // })
  }
  handleBtnClick() {
    this.setState(prevState => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
    //old way
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })
  }
  handleItemDelete(index) {
    // const list = [...this.state.list]
    // list.splice(index, 1)
    this.setState(prevState => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return {
        list
      }
    })
    //old way
    // this.setState({
    //   list: list
    // })
  }
}

export default TodoList
