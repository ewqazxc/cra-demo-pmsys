import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

import "./css/notFound.css";

class NotFound extends Component {
 
    render() {
      return (
        <div id="box404">
           <div id="content404">
             <a id="back404" href="/">Back</a>
           </div>
           {/* <h2>404 NotFound</h2>
           <a href="/">Back</a> */}
        </div>
      )
    }
  }
  
  export default NotFound;