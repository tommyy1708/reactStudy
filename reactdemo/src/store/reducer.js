/* eslint-disable import/no-anonymous-default-export */
//创建初始状态 
const defaultState = {
  num: 1
}
//导出一个函数 , 避免state空指针异常 给他一个默认值
//export default (state = defaultState,action) 

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case "addNum":
      newState.num += action.value
      break;
    default:
      break;
  }
  return newState;
};   