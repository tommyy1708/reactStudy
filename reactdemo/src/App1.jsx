import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'


export default function App1() {
  //  const location = useLocation()
  //  console.log(location.pathname);
  const navigate = useNavigate()

  const goDetail = () => {
    //当携带数据较多的时候用事件来代替
    navigate('/detail',{
      state:{username:'zhangsan'}
    });
  }
  return (
    <div>
      <ul>
        <li><Link to="/home?id=456">Home</Link>
        </li>
        <li><Link to="/list/123">List</Link>
        </li>
        <li><Link to="/detail">Detail</Link>
        </li>
      </ul>
      <hr />
      <button onClick={goDetail}>go detail</button>
      <h2>这里是路由入口</h2>
      <Outlet />
    </div>
  )
}
