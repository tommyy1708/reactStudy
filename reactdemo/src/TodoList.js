import React, { Component } from 'react'
import { Button , Input,List} from 'antd';
import store from './store';

export default class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()
    }

    handleChange(e){
    //    this.setState = {
    //        iptval :  e.target.value
    //     }
    const action = {
        type:"change_input_val",
        value:e.target.value
    }
    //store派发action
    store.dispatch(action)
    }
  render() {
      
    return (
      <div>
          <Input placeholder="please input" style={{width:'200px'}} value={this.state.iptval} onChange={this.handleChange.bind(this)}/>
          <Button type="primary">Button</Button>
          <List style={{width:'200px'}}
      bordered
      dataSource={this.state.data}
      renderItem={item => (
        <List.Item style={{marginTop:'10px'}}>
          {item}
        </List.Item>
      )}
    />
        
      </div>
    )
  }
}
