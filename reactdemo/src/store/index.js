//仓库入口文件 
//引入
import { createStore } from "redux"
import reducer from "./reducer";
// 创建仓库

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__())

export default store