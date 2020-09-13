import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg'
import Form from './Form';
import NavBar from './NavBar';
import Footer from './Footer';
import brentPeace from './brentPeace.png'

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
      <NavBar />
      <h1>Hi My Name is Brent!</h1>
      <img src={brentPeace} className="brent-logo" alt="logo" />
      <h2>
        I would love to continue to
        <br />
       learn React professionally.
        </h2>
      <img src={logo} className='App-logo' alt='react-logo' />
      {showForm ?
        <Form cancel={cancelForm} />
        :
        <div>

          <h2
            className="hireMe"
            onClick={handleLinkClick}
          >
            Hire Me!
        </h2> </div>
      }

      <Footer />

    </div>
  );
}

export default App;
