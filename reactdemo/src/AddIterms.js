import React, { Component } from 'react'
import store from "./store2"
import { connect } from 'react-redux'

// eslint-disable-next-line import/no-anonymous-default-export
 class AddIterm extends Component {

  render() {
    return (
      <div>
          <div style={{width:'200px', height:'300px', border:'1px solide red'}}>
          <h2>When you click button the number will upgread {this.props.num}</h2>
          <button onClick={this.props.add_one.bind(this)}>print to consolelog</button>
          </div>
      </div>
    )
  }
}

const mapStateToProps  = (state)=>{
 return { 
     num : state.num
 }   
}

const mapDispatchToProps = (dispatch) => {
    return {
        add_one(){
            const action = {
                type:"add_one",
                num:1
            }
            dispatch(action)
          }
    }

}


export default connect(mapStateToProps,mapDispatchToProps)(AddIterm)