 import React, { Component } from 'react';
import './App.css';

import VehiclesWrapper from './components/VehiclesWrapper'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 className='hdr'>My Wishlist!<i class="far fa-life-ring fa-spin fa-1x"></i></h1>
          
        </header>
        
          
    
      <div className='body'>
        
        <VehiclesWrapper />
        <footer>Copywright 2019</footer>
      </div>
      </div>
      
    );
  }
}

export default App;
