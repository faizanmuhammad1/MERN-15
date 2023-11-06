import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [name,setName]=useState("");
  const [list,setList]=useState([]);

  return (
    <>
      <input type="text" value={name} onChange={function(event){setName(event.target.value)}}/>
      <button onClick={()=>{
        setList([...list,name]);
        setName("");
      }}>Enter</button>
      <div>{list.map((listItem)=>{
          return <div>{listItem}</div>
        
      })}</div>
    </>
  )
}

export default App
