import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './Components/Login';
import { Register } from './Components/Register';
import { Customer } from './Components/Customer';

function App() {
  const[currentForm, setCurrentform] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleForm = (formName) => {
    setCurrentform(formName);
  }

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentform('login');
  }

  return (
    <div className="App">
      {isLoggedIn ? (
        <Customer onLogout={handleLogout} />
      ) : (
        <>
          {currentForm === 'login' ? (
            <Login onFormSwitch={toggleForm} onLogin={handleLogin} />
          ) : (
            <Register onFormSwitch={toggleForm} onLogin={handleLogin} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
