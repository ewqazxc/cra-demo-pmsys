import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router'
import {BrowserRouter as Router,Route} from 'react-router-dom';

import Sidebar from '../../component/side/Sidebar';
import Header from '../../component/header/Header';
import Login from '../../component/login/login';
import {RouterConfig} from '../../config/router/RouterConfig'; 

class Main extends Component {
    render() {
      return( 
          <div style={{height:"100%"}}>
             <div id="loading" className="fullBlock loading"></div>
              <div style={{width:"100%",height:"100%",position:"relative"}}>
              <div id="sidebar"><Sidebar /></div>
              <div id="content"> 
                <div id="header"><Header /></div>
                <div id="rightContent"> 
                    {RouterConfig.map((route, index) => (
                          // Render more <Route>s with the same paths as
                          // above, but different components this time. 
                          <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            strict={route.strict}
                            component={route.component}
                          />
                          
                    ))
                    
                  }
                    {console.log(RouterConfig)}  
                </div>
              </div>
               </div>
               
          </div> 
      )
    }
    componentDidMount(){
      
    }
  }
  export default withRouter(Main);