import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './Components/Login';
import { Register } from './Components/Register';
import { Dashboard } from './Components/Dashboard';
import { Home } from './Components/Home';
import { SideNavBar }  from './Components/SideNavBar'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './Redux/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <div className="App">
            <SideNavBar/>
              
                <Routes>
                  <Route index element={<Home />}/>
                  <Route path='/login' element={<Login />}/>
                  <Route path='register' element={<Register />}/>
                  <Route path='/dashboard' element={<Dashboard />}/>
                </Routes>
              
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;