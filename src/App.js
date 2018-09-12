import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './routes';
import { Navbar, Home, Services, Footer } from './components';

const App = () => {
    return (
      <div className="App">
        <Navbar />
        <Home />
        <Services />
        <Footer />
      </div>
    );
  }

export default App;
