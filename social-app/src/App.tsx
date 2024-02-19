import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './app/components/context/UserContex';
import Signup from './app/components/partials/registration/Signup';

import './App.css';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <UserContextProvider>

          <Routes>
            <Route path="/Signup" element={<Signup />} />
          </Routes>

        </UserContextProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
