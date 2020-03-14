import React, { Fragment } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

const TodoListUI = props => {
  return (
    <Fragment>
      <div style={{ marginTop: '10px', marginLeft: '10px' }}>
        <Input
          value={props.inputValue}
          placeholder="todo info"
          style={{ width: '300px', marginRight: '10px' }}
          onChange={props.handleInputChange}
        />
        <Button type="primary" onClick={props.handleBtnClick}>
          submit
        </Button>
      </div>
      <List
        style={{ marginTop: '10px', marginLeft: '10px', width: '300px' }}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item
            onClick={index => {
              props.handleItemDelete(index)
            }}
          >
            {item}
          </List.Item>
        )}
      ></List>
    </Fragment>
  )
}

// class TodoListUI extends Component {
//   render() {
//     return (
//       <Fragment>
//         <div style={{ marginTop: '10px', marginLeft: '10px' }}>
//           <Input
//             value={this.props.inputValue}
//             placeholder="todo info"
//             style={{ width: '300px', marginRight: '10px' }}
//             onChange={this.props.handleInputChange}
//           />
//           <Button type="primary" onClick={this.props.handleBtnClick}>
//             submit
//           </Button>
//         </div>
//         <List
//           style={{ marginTop: '10px', marginLeft: '10px', width: '300px' }}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => (
//             <List.Item
//               onClick={index => {
//                 this.props.handleItemDelete(index)
//               }}
//             >
//               {item}
//             </List.Item>
//           )}
//         ></List>
//       </Fragment>
//     )
//   }
// }

export default TodoListUI
