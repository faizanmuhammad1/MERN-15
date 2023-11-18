import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {



  return (
    <>
       <h1>Project Information</h1>
    <form action="submit_form.php" method="POST">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required/><br/><br/>
        
        <label for="deadline">Deadline:</label>
        <input type="date" id="deadline" name="deadline" required/><br/><br/>

        <label for="description">Description:</label><br/>
        <textarea id="description" name="description" rows="4" cols="50" required></textarea><br/><br/>

        <label for="item">Item:</label>
        <input type="text" id="item" name="item" required/><br/><br/>

        <label for="payment">Payment:</label>
        <input type="text" id="payment" name="payment" required/><br/><br/>

        <label for="status">Status:</label>
        <select id="status" name="status" required>
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
        </select><br/><br/>

        <input className="btn btn-primary" type="submit" value="Submit"/>

    </form>
    </>
  )
}

export default App
