import React, { Component } from 'react';

import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homepage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />

        <Homepage/>

        <Footer/>

      </div>

    );
  }
}

export default App;

