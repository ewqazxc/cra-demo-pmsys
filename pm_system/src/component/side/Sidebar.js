import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import $ from 'jquery';
import SideMenu from './sideMenu';
import logo from '../../logo.svg';
// 引入Antd的导航组件
import { Menu, Icon } from 'antd'
const SubMenu = Menu.SubMenu 
const MenuItemGroup = Menu.ItemGroup;
 
class Sidebar extends Component {
	constructor(props) {
		super(props)
		this.state = {
				current: '',
				username: ''
		}
	}
	handleClick = (e) => {
			this.setState({
					current: e.key
			})
	}
	componentWillMount(){
		var islogin = sessionStorage.getItem("isLogin");
		var data = [{MENU_ID:1,NAME:"信息管理",url:"/12",P_MENU_ID:0},
			{MENU_ID:11,NAME:"表单配置",url:"/formConfig",P_MENU_ID:1},
			{MENU_ID:12,NAME:"项目资料管理",url:"/pmdataConfig",P_MENU_ID:1},
			{MENU_ID:13,NAME:"我的项目",url:"/mypm",P_MENU_ID:1},
			{MENU_ID:14,NAME:"项目申报",url:"/pmsb",P_MENU_ID:1},
			{MENU_ID:15,NAME:"项目审核",url:"/pmsh",P_MENU_ID:1},
			{MENU_ID:2,NAME:"统计分析",url:"/12",P_MENU_ID:0},
			{MENU_ID:21,NAME:"项目上报查询",url:"/12",P_MENU_ID:2},
			{MENU_ID:22,NAME:"项目综合查询",url:"/12",P_MENU_ID:2},
			{MENU_ID:23,NAME:"项目报表查询",url:"/12",P_MENU_ID:2},
			{MENU_ID:3,NAME:"系统管理",url:"/12",P_MENU_ID:0},
			{MENU_ID:31,NAME:"组织权限管理",url:"/12",P_MENU_ID:3},
			{MENU_ID:32,NAME:"用户管理",url:"/12",P_MENU_ID:3},
			{MENU_ID:4,NAME:"消息管理",url:"/12",P_MENU_ID:0},
			{MENU_ID:41,NAME:"我的消息",url:"/12",P_MENU_ID:4},
			{MENU_ID:42,NAME:"通讯录",url:"/12",P_MENU_ID:4},
			{MENU_ID:9,NAME:"TEST",url:"/12",P_MENU_ID:0},
			{MENU_ID:91,NAME:"FORM",url:"/form",P_MENU_ID:9},
			{MENU_ID:92,NAME:"formZ",url:"/formZ",P_MENU_ID:9}];
		if(islogin=='1'){
			this.setState ({
				menuData:data
			})
		}else{
			this.setState ({
				menuData:[]
			})
		}
		
	}
  	render() {
    return (
      <div>
        <div className="sidebar">
					<Link to="/">
						<img src={logo} className="App-logo" id="logo"/>
					</Link>
					<Menu theme="dark"
							onClick={this.handleClick}
							style={{ width: 185 }}
							defaultOpenKeys={['sub1']}
							defaultSelectedKeys={[this.state.current]}
							mode="inline"
					>
					
							{/* <SubMenu key="sub1" title={<span><Icon type="mail" /><span>信息管理</span></span>}>
									<Menu.Item key="11"><Link id="11" to="/form">form</Link></Menu.Item>
									<Menu.Item key="12"><Link to="/formZ">formZ</Link></Menu.Item>
									<Menu.Item key="13"><Link to="/formSub">formSub</Link></Menu.Item>
									<Menu.Item key="14"><Link to="/myCalendar">日历</Link></Menu.Item>
							</SubMenu>
							<SubMenu key="sub2" title={<span><Icon type="appstore" /><span>统计分析</span></span>}>
									<Menu.Item key="21"><Link to="/myCard">导航</Link></Menu.Item>
									<Menu.Item key="22"><Link to="/myAnimate">关注</Link></Menu.Item>
							</SubMenu>
							<SubMenu key="sub3" title={<span><Icon type="appstore" /><span>系统管理</span></span>}>
									<Menu.Item key="31"><Link to="/myCard">导航</Link></Menu.Item>
									<Menu.Item key="32"><Link to="/myAnimate">关注</Link></Menu.Item>
							</SubMenu>
							<SubMenu key="sub4" title={<span><Icon type="appstore" /><span>消息管理</span></span>}>
									<Menu.Item key="41"><Link to="/myCard">导航</Link></Menu.Item>
									<Menu.Item key="42"><Link to="/login">login</Link></Menu.Item>
							</SubMenu> */}
							
					</Menu>
					<div id="menu">
						<SideMenu data={this.state.menuData}/>
					</div>
     	  </div>
      </div>
    )
	}
	
	componentDidMount(){
		
	}
}

export default Sidebar;
