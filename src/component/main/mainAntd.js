import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router'
import {BrowserRouter as Router,Route} from 'react-router-dom';

import {RouterConfig} from '../../config/router/RouterConfig'; 

import SideMenuAntd from '../../component/side/sideMenuAntd';
import MyHeader from '../../component/header/Header';

import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
    state = {
      collapsed: false,
      layoutLeft: 200
    };
    toggle = () => {
      this.setState({
        collapsed: !this.state.collapsed,
        layoutLeft: this.state.layoutLeft==200?80:200,
      });
    }
    render() {
      return (
        <Layout style={{  height: '100%' }}>
          <Header style={{ height:'88px',background: 'aqua', padding: 0 ,position: 'fixed', width: '100%',zIndex:1}}> 
              <MyHeader />
          </Header>
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
            style={{ overflow: 'auto' , position: 'fixed', left: 0 ,top:'88px',bottom:0}}
          >
            <div className="logo" />
            {/* Menu */}
            <SideMenuAntd />
            <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
                style={{position:'fixed',zIndex:1,left:30,bottom:10,color:'aqua',fontSize:20,cursor: 'pointer'}}
              /> 
          </Sider>
          <Layout style={{ marginLeft: this.state.layoutLeft }}> 
            <Content style={{  overflow: 'auto',margin: '10px', padding: '10px', background: '#fff',  position: 'fixed',left:this.state.layoutLeft, right: 0 ,top:'88px',bottom:0}}>
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
            </Content>
          </Layout>
        </Layout>
      );
    }
  } 

class MainAntd extends Component {
    render() {
        return(
            <SiderDemo />
        )
    }
}

export default withRouter(MainAntd);