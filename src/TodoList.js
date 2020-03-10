import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
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
        <div>
          <label htmlFor="insertArea">Enter</label>
          <input
            id="insertArea"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>submit</button>
        </div>
        <ul>{this.getTodoItem()}</ul>
      </Fragment>
    )
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <div>
          <TodoItem
            key={index}
            content={item}
            index={index}
            deleteItem={this.handleItemDelete}
          ></TodoItem>
        </div>
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
