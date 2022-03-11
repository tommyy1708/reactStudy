import ReactDOM from 'react-dom'
import App from './App1.jsx'
import store from './store'
import { Provider } from 'react-redux'

//引入仓库store 引入provider从react-redux中
//provider里面写入根组件,provider添加仓库为store对象
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'))

// setTimeout(()=>{
//     ReactDOM.render(<input type="text"/>,document.getElementById('root'))
// },3000)