import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './Pages/Login';
import { Register } from './Pages/Register';
import { Dashboard } from './Pages/Dashboard';
import { Transactions } from './Pages/Transactions';
import { Contact } from './Pages/Contact';
import { Home } from './Pages/Home';
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
                  <Route path='/contact' element={<Contact />}/>
                  <Route path='/transactions' element={<Transactions />}/>

                </Routes>
              
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;