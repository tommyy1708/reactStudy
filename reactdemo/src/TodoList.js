import React, { Component } from 'react'
import { Button, Input, List } from 'antd';
import store from './store';

export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState();
        store.subscribe(this.storeChange.bind(this))
    }

    render() {
        return (
            <div>
                <Input placeholder="please input"
                    value={this.state.iptval}
                    style={{ width: '200px' }}
                    onChange={this.handleChange.bind(this)} />
                <Button type="primary" onClick={this.handleClick.bind(this)}>Button</Button>
                <List style={{ width: '200px' }}
                    bordered 
                    dataSource={this.state.arr}
                    renderItem={(item,index) => (
                        <List.Item key={item} onDoubleClick={this.doubleClick.bind(this,index)} style={{userSelect:'none', marginTop: '10px' }}>
                            {item}
                        </List.Item>
                    )}
                />

            </div>
        )
    }
    handleChange(e) {
        const action = {
            type: "change_input_val",
            value: e.target.value
        }
        store.dispatch(action)
    }
    storeChange() {
        this.setState(store.getState())
    }
    handleClick(){
        const action = {
            type:'add_to_arr',
        }
        store.dispatch(action)
    }
    doubleClick(index){
        console.log(index);
        const action ={
            type : "delete_arr",
            value:index
        }
        store.dispatch(action)
    }
}