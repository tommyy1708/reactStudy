import ReactDOM from "react-dom";
import AddIterm from "./AddIterms"
import { Provider } from "react-redux"
import store from "./store2"
import TodoList from "./TodoList"
import 'antd/dist/antd.css';


const app = (
<Provider store={store}>
    <AddIterm />
    <TodoList />
</Provider>
)


ReactDOM.render(
    app
    ,
    document.getElementById('root')
)