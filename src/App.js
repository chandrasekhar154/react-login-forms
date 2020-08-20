import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Header/Header';
import Header from './components/Header/Header';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <RegistrationForm /> */}
      <Login />
    </div>
  );
}

export default App;
