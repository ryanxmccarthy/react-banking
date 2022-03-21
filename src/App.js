import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages'
import SignInPage from './pages/signIn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' index element={<Home />}  />
        <Route path='/signin' element={<SignInPage />} />
      </Routes>
    </Router>
  );
}

export default App;
