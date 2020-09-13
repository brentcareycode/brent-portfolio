import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import NavBar from './NavBar';

function App() {
  const [showForm, setShowForm] = useState(false)

  const handleLinkClick = () => {
    setShowForm(true)
  }

  const cancelForm = () => {
    setShowForm(false)
  }

  return (
    <div className="App">
      <NavBar/>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
        I would love to continue to learn React professionally. 
      
        </h1>
        {showForm ? 
        <Form cancel={cancelForm}/> 
        :
          <h2
          className="hireMe"
          onClick={handleLinkClick}
        >
         Hire Me!
        </h2> }
       
       

    </div>
  );
}

export default App;
