import React from 'react';
import logo from './logo.svg';
import './App.css';

import Input from './components/Input';
import List from './components/List';


class App extends React{
  constructor() {
    super();
    
    this.state = {
      list: []
    }
  };

  addToList = () => {};

  removeFromList = () => {};
  
  render = () => {
    return <div>this is the app component</div>
  };

  
}

export default App;
