// 页面解构 App > Home + List + Detail
//react-router-dom 两种模式 BrowserRouter (History)模式  HashRouter(Hash模式)
import App1 from "../App1";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import List from "../pages/List";
import Error from "../pages/Error"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const BaseRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App1 />}>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/detail" element={<Detail />}></Route>
                    {/* :id代表从父级路由跳转到该路由之后获取到数据中的其中一个字段,:id这里是个范型 */}
                    <Route path="/list/:id" element={<List />}></Route>
                </Route>
                <Route path="*" element={<Error />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default BaseRouter
