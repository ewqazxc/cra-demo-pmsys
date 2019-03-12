import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

class Home extends Component {
 
    render() {
      return (
        <header className="">
            <h1 className="App-title">Home</h1>
            <Link to="/123">123</Link>
            <a href="/321">321</a>
        </header>
      )
    }
  }
  
  export default Home;