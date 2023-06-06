import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './CSS/SideNavBar.css';
import { Login } from './Components/Login';
import { Register } from './Components/Register';
import { Dashboard } from './Components/Dashboard';
import { Home } from './Components/Home';
import { SideNavBar }  from './Components/SideNavBar'

function App() {
  const[currentForm, setCurrentform] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleForm = (formName) => {
    setCurrentform(formName);
  }

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentform('customer');
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentform('login');
  }

  return (
    <div className="App">
      <SideNavBar/>
      <div className="Card">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='register' element={<Register />}/>
            <Route path='/dashboard' element={<Dashboard />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;



// import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Login } from './Components/Login';
// import { Register } from './Components/Register';
// import { Customer } from './Components/Customer';
// import './App.css';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   }

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//   }

//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={ isLoggedIn ?
//               (
//                 <Customer onLogout={handleLogout} />
//               ) : (
//                 <Login onLogin={handleLogin} />
//               )
//             }
//           />
//           <Route path="/register" element={<Register onLogin={handleLogin} />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;