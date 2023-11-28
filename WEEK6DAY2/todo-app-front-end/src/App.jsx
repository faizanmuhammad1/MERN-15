import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import React from "react";
import axios from "axios";


function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/form", {
      name: name,
      email: email,
      message: message,
    });
    alert("You clicked the button!");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <React.Fragment>
      <div>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Message:
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default App;
