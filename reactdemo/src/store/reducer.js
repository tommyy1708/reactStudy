/* eslint-disable import/no-anonymous-default-export */
//创建初始状态 
const defaultState = {
  iptval: "",
  arr: [
    'First data of list',
    'Second data of list',
  ]
}
//导出一个函数 , 避免state空指针异常 给他一个默认值
//export default (state = defaultState,action) 
// eslint-disable-next-line
export default (state=defaultState, action) => {
  //深拷贝,reducer只能接受和返回新的state,不能直接更改state,因此,我们可以对state做一层深拷贝.
  let newState = JSON.parse(JSON.stringify(state))

  //reducer接收到事件需要先判断类型,派发action
  switch(action.type) {
    case "change_input_val":
      newState.iptval = action.value
      break;
      case "add_to_arr":
        newState.arr.push(newState.iptval)
        newState.iptval = ""
        break;
        case "delete_arr":
          newState.arr.splice(action.value,1)
          break;
    default:
      break;
  }
//始终返回的是深拷贝的state  == newState
  return newState;
};   