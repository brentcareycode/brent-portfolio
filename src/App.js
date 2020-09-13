import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';

function App() {
  const [showForm, setShowForm] = useState(false)

  const handleLinkClick = () => {
    setShowForm(true)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        I would love to continue to learn React professionally. 
      
        </p>
        {showForm ? 
        <Form/> 
        :
          <p
          className="App-link"
          onClick={handleLinkClick}
        >
         Hire Me
        </p> }
       
       
      </header>
    </div>
  );
}

export default App;
