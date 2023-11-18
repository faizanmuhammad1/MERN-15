import React from 'react'
import './App.css'

function App() {
  return(
  <>
    <div className='p-4 border-2 border-gray-300 shadow-lg rounded-lg w-80 m-4'>
      <div className='flex justify-center'>
        <h1 className='text-4xl font-bold text-indigo-700 m-4'>Stopwatch</h1>
      </div>
      <div className='flex justify-center m-4 text-lg font-semibold text-gray-700'>
        <label>00:00:00</label>
      </div>
      <div className='flex justify-center gap-4'>
        <button className='px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out'>Start</button>
        <button className='px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out'>Stop</button>
        <button className='px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out'>Reset</button>
      </div>
    </div>
  </>
  )
}

export default App
