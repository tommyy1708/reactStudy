import ReactDOM from "react-dom";
import 'antd/dist/antd.css';
import AddIterm from "./AddIterms"
import { Provider } from "react-redux"
import store from "./store2"

const app = (
<Provider store={store}>
    <AddIterm />
</Provider>
)


ReactDOM.render(
    app
    ,
    document.getElementById('root')
)