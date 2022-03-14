import React , {useState}from 'react'


export default function Soukong() {
    const [value,setValue] =  useState('')
  return (
    <div>
        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
        <button onClick={()=>console.log(value)}>获取input的值</button>
    </div> 
  )
}
