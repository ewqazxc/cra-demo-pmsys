import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import UserBar from './userBar';

class Header extends Component {
  
  render() {
    return (
      <header className="App-header">
          <h1 className="App-title">Welcome to React</h1> 
          <UserBar />
      </header>
    )
  }
}

export default Header;