import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages'
import SignInPage from './pages/signIn';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' index element={<Home />}  />
        <Route path='/signin' element={<SignInPage />} />
      </Routes>
    </Router>
  );
}

export default App;
