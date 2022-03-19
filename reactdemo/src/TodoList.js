import React, { Component } from 'react'
import { Layout, Button, Input, List } from 'antd';
import { connect } from 'react-redux';
import { CHANGE_INPUT_VAL_ACTION, ADD_TO_ARR_ACTION, DELETE_ARR_ACTION } from "./store2/actionCreators"
const { Header, Footer, Sider, Content } = Layout;
 class TodoList extends Component {

    render() {
        return (
            <div>
                <Header />
                <Content>
                    <Input placeholder="please input"
                        value={this.props.iptval}
                        style={{ width: '200px' }}
                        onChange={this.props.handleChange.bind(this)} />
                    <Button type="primary" onClick={this.props.handleClick.bind(this)}>Button</Button>
                    <List bordered
                        dataSource={this.props.arr}
                        renderItem={(item, index) => (
                            <List.Item key={item} onDoubleClick={this.props.doubleClick.bind(this, index)} >
                                {item}
                            </List.Item>
                        )}/>
                </Content>

                <Footer></Footer>
            </div>
        )
    }
}

const mapStateToProps = (state)  => {

    return { 
        iptval : state.iptval,
        arr: state.arr,
        num:state.num
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
        handleChange(e) {
            const action = CHANGE_INPUT_VAL_ACTION(dispatch.target.value)
            dispatch(action)
        },
    
        handleClick() {
            const action = ADD_TO_ARR_ACTION()
            dispatch(action)
        },
        doubleClick(index) {
            const action = DELETE_ARR_ACTION(index)
            dispatch(action)
        }
    }
}


  export default connect(mapStateToProps, mapDispatchToProps)(TodoList)