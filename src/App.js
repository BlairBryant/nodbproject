import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Body from './Components/Body'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Body />
        <Footer />

      </div>
    );
  }
}

export default App;
