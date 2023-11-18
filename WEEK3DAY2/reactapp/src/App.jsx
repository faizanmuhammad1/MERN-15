import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Data, setData] = useState("");
  const [count,setCount] = useState(0);
  return (
    <>
      <div className='container'>
        <button onClick={()=>{
          if(count%2==0){
            setData("Jhal Dab");
          }
          else{
            setData("Na Jhal Dab");
          }
          setCount(count+1);
        }}>Mujhe Dabao</button>
      </div>
      <div>{Data}</div>
    </>
  )
}

export default App
