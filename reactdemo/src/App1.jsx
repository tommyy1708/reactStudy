import React from 'react'
//参照js根目录文件,index.js ,首先引入一个链接文件,connect
import {connect} from 'react-redux'

function App1(props) {
  return (
    <div>
      <h2>仓库的num值为:{props.num}</h2>
      <button onClick={()=>props.plus()}>+1</button>
    </div>
  )
}

//这里的state从仓库中的reducer里面来,从reducer找数据.
const mapStateToProps = (state) => {
  //返回的是状态 ,状态写在{}内
  return { 
    num:state.num
  }
}
//让reducer里面的action映射成props里面的方法
const mapDispatchToProps = (dispatch) =>{
  //{}写js语句,添加需要映射的方法函数,这里写高阶函数(函数返回函数)
return  {
  // 这里比例函数为plus()
   plus(){
    const action = {type:"addNum", value:2}
    dispatch(action)
  }
}
}

//export default connect(state映射,dispatch映射)(当前组件名称)
export default connect(mapStateToProps,mapDispatchToProps)(App1)