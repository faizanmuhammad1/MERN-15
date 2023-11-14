import React, { useState } from 'react'
import Swal from 'sweetalert2'
import './Calculator.css'

export default function Calculator() {
    
    const [num1,setNum1] = useState(0);
    const [num2,setNum2] = useState(0);
    const [result,setResult] = useState(0);

    const handleInput1 = (e) => {
        setNum1(e.target.value);
    } 

    const handleInput2 = (e) => {
        setNum2(e.target.value);
    }
    
    const handleAdd = () => {
        setResult(Number(num1) + Number(num2));
    }

    const handleSub = () => {
        setResult(Number(num1) - Number(num2));
    }

    const handleMul = () => {
        setResult(Number(num1) * Number(num2));
    }

    const handleDiv = () => {
        try {
            if(isNaN(Number(num1) / Number(num2)) || !isFinite(Number(num1) / Number(num2))){
                throw new Error("Invalid Division");
            }
           
            setResult((Number(num1) / Number(num2)).toFixed(2));
          } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'You cannot divide 1 by 0',
                icon: 'error',
                confirmButtonText: 'Conitnue'
              })
          }
    }

    const handlePer = () => {
        try {
            if(isNaN(Number(num1) / Number(num2)) || !isFinite(Number(num1) / Number(num2))){
                throw new Error("Invalid Percentage");
            }
           
            setResult(((Number(num1) / Number(num2)*100)).toFixed(1)+"%");
          } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'You cannot take percentage of 1 by 0',
                icon: 'error',
                confirmButtonText: 'Conitnue'
              })
          }
    }


    return (
        <React.Fragment>
            <div classNames="border border-solid border-gray-400 p-4">
                <div className='flex justify-center'><h1 className='text-4xl font-bold text-gray-800 mb-4'>Simple Calculator</h1></div>
                <hr className='m-4' />
                <div className='flex justify-evenly'>
                    <input onChange={handleInput1} value={num1} className="w-24 p-2 border rounded-md focus:outline-none outline-4  focus:border-blue-500" type="text" />
                    <input onChange={handleInput2} value={num2} className="w-24 p-2 border rounded-md  focus:outline-none outline-4  focus:border-blue-500" type="text" />
                    </div>
                <div className='flex justify-between m-4'>
                    <button onClick={handleAdd} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">+</button>
                    <button onClick={handleSub} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">-</button>
                    <button onClick={handleMul} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">*</button>
                    <button onClick={handleDiv} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">/</button>
                    <button onClick={handlePer} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">%</button>
                </div>
                <div className='flex justify-center'>
                    <h3 className='font-bold text-gray-800 m-2'>Result</h3>
                </div>
                <div className='flex justify-center'>
                    <input value={result} className='border rounded-md focus:outline-none focus:border-blue-500 w-24 m-4 p-2' type="text" />
                </div>
            </div>
        </React.Fragment>
    )
}
