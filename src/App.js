import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Components/Commons/Header'
import Main from './Components/Commons/Main'
import Footer from './Components/Commons/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header/>
          <Main/>
          <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
