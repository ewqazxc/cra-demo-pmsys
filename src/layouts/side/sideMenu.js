import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import $ from 'jquery';
import { Menu, Icon, Switch } from 'antd'; 
const SubMenu = Menu.SubMenu 
const MenuItemGroup = Menu.ItemGroup;

class SideMenu extends Component {
        constructor(props) {
                super(props)
                this.state = {
                        current: '',
                        username: '', 
                }
        }

        handleClick = (e) => {
                        this.setState({
                                        current: e.key
                        })
        } 
    render() {
        console.log(this.props.data==undefined?"":this.props.data);
        let menuList = this.props.data; 
        let subMenu = [];
        let item1 = [];
        let item2 = [];
        let item3 = [];
        let item4 = []; 
        let item9 = []; 
        for(let i=0;i<menuList.length;i++){
            switch (menuList[i].P_MENU_ID) {
                case 1:
                item1.push(<Menu.Item key={menuList[i].MENU_ID}><Link to={menuList[i].url}>{menuList[i].NAME}</Link></Menu.Item>);
                break;
                case 2:
                item2.push(<Menu.Item key={menuList[i].MENU_ID}><Link to={menuList[i].url}>{menuList[i].NAME}</Link></Menu.Item>);
                break;
                case 3:
                item3.push(<Menu.Item key={menuList[i].MENU_ID}><Link to={menuList[i].url}>{menuList[i].NAME}</Link></Menu.Item>);
                break;
                case 4:
                item4.push(<Menu.Item key={menuList[i].MENU_ID}><Link to={menuList[i].url}>{menuList[i].NAME}</Link></Menu.Item>);
                break;
                case 9:
                item9.push(<Menu.Item key={menuList[i].MENU_ID}><Link to={menuList[i].url}>{menuList[i].NAME}</Link></Menu.Item>);
                break;
            } 
        }
        for(let i=0;i<menuList.length;i++){
            switch (menuList[i].MENU_ID) {
                case 1:
                subMenu.push(<SubMenu key={menuList[i].MENU_ID} title={<span><Icon type="profile" style={{fontSize:'20px',color: 'aqua'}} /><span>{menuList[i].NAME}</span></span>}>
                     {item1}
                     </SubMenu>);
                break;
                case 2:
                subMenu.push(<SubMenu key={menuList[i].MENU_ID} title={<span><Icon type="form" style={{fontSize:'20px',color: 'aqua'}} /><span>{menuList[i].NAME}</span></span>}>
                     {item2}
                     </SubMenu>);
                break;
                case 3:
                subMenu.push(<SubMenu key={menuList[i].MENU_ID} title={<span><Icon type="api" style={{fontSize:'20px',color: 'aqua'}} /><span>{menuList[i].NAME}</span></span>}>
                     {item3}
                     </SubMenu>);
                break;
                case 4:
                subMenu.push(<SubMenu key={menuList[i].MENU_ID} title={<span><Icon type="mail" style={{fontSize:'20px',color: 'aqua'}} /><span>{menuList[i].NAME}</span></span>}>
                     {item4}
                </SubMenu>);
                break;
                case 9:
                subMenu.push(<SubMenu key={menuList[i].MENU_ID} title={<span><Icon type="mail" style={{fontSize:'20px',color: 'aqua'}} /><span>{menuList[i].NAME}</span></span>}>
                     {item9}
                </SubMenu>);
                break;
            }
        }
        return(
                <div> 
                    <Menu theme="dark"
                    onClick={this.handleClick}
                    style={{ width: 'auto' }}
                    defaultOpenKeys={['sub1', 'sub2']}
                    defaultSelectedKeys={[this.state.current]}
                    mode="inline"
                    >
                        {subMenu}
                    </Menu> 
                </div>
            )

    }
}


export default SideMenu;