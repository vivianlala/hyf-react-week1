import React, { Component } from 'react';


import './App.css';
import getHNStories from './components/navigation/getHNStories'
/* import TopNavigation from './components/navigation/TopNavigation'; */


class App extends Component {
  constructor(){
    super();
    this.state= {
      getHNStories:[]
    }
    
  }
  
  render() {
    setTimeout(() =>{
 this.setState({});
    }, 1000)
    return (
      <div>

      </div>

    );
  }
}

export default App;

