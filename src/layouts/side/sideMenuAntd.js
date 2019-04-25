import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import $ from 'jquery';
import { Menu, Icon, Switch } from 'antd'; 
const SubMenu = Menu.SubMenu 
const MenuItemGroup = Menu.ItemGroup;
const menuData = [{MENU_ID:1,NAME:"信息管理",url:"/12",P_MENU_ID:0},
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
			{MENU_ID:92,NAME:"formZ",url:"/formZ",P_MENU_ID:9},
			{MENU_ID:93,NAME:"简单的表格",url:"/table1",P_MENU_ID:9},
			{MENU_ID:94,NAME:"简单的表格，最后一列是各种操作",url:"/table2",P_MENU_ID:9},
			{MENU_ID:95,NAME:"JSX 风格的 API",url:"/table3",P_MENU_ID:9},
			{MENU_ID:96,NAME:"第一列是联动的选择框",url:"/table4",P_MENU_ID:9},
			{MENU_ID:97,NAME:"选择后进行操作，完成后清空选择，通过 rowSelection.selectedRowKeys 来控制选中项",url:"/table5",P_MENU_ID:9},
			{MENU_ID:98,NAME:"通过 rowSelection.selections 自定义选择项，默认不显示下拉选项，设为 true 时显示默认选择项。",url:"/table6",P_MENU_ID:9},
			{MENU_ID:99,NAME:"筛选和排序",url:"/table7",P_MENU_ID:9},
			// 对某一列数据进行筛选，使用列的 filters 属性来指定需要筛选菜单的列，onFilter 用于筛选当前数据，filterMultiple 用于指定多选和单选。
			// 对某一列数据进行排序，通过指定列的 sorter 函数即可启动排序按钮。sorter: function(a, b) { ... }， a、b 为比较的两个列数据。
			// 使用 defaultSortOrder 属性，设置列的默认排序顺序。
			{MENU_ID:910,NAME:"可控的筛选和排序",url:"/table8",P_MENU_ID:9},
			//使用受控属性对筛选和排序状态进行控制。
			// 1 columns 中定义了 filteredValue 和 sortOrder 属性即视为受控模式。
			// 2 只支持同时对一列进行排序，请保证只有一列的 sortOrder 属性是生效的。
			// 3 务必指定 column.key。 
			{MENU_ID:911,NAME:"自定义筛选菜单",url:"/table9",P_MENU_ID:9},
			{MENU_ID:912,NAME:"远程加载数据",url:"/table10",P_MENU_ID:9},
			{MENU_ID:913,NAME:"紧凑型",url:"/table11",P_MENU_ID:9},
			// 两种紧凑型的列表，小型列表只用于对话框内。
			{MENU_ID:914,NAME:"带边框",url:"/table12",P_MENU_ID:9},
			// 添加表格边框线，页头和页脚。
			{MENU_ID:915,NAME:"可展开",url:"/table13",P_MENU_ID:9},
			//当表格内容较多不能一次性完全展示时。
			{MENU_ID:916,NAME:"表格行/列合并",url:"/table14",P_MENU_ID:9},
			// 表头只支持列合并，使用 column 里的 colSpan 进行设置。
			// 表格支持行/列合并，使用 render 里的单元格属性 colSpan 或者 rowSpan 设值为 0 时，设置的表格不会渲染。
			{MENU_ID:917,NAME:"树形数据展示",url:"/table15",P_MENU_ID:9},
			// 表格支持树形数据的展示，可以通过设置 indentSize 以控制每一层的缩进宽度。
			// 注：暂不支持父子数据递归关联选择。
			{MENU_ID:918,NAME:"固定表头",url:"/table16",P_MENU_ID:9},
			// 方便一页内展示大量数据。
			// 需要指定 column 的 width 属性，否则列头和内容可能不对齐。
			{MENU_ID:919,NAME:"固定列",url:"/table17",P_MENU_ID:9},
			// 对于列数很多的数据，可以固定前后的列，横向滚动查看其它数据，需要和 scroll.x 配合使用。
			// 若列头与内容不对齐或出现列重复，请指定列的宽度 width。
			// 建议指定 scroll.x 为大于表格宽度的固定值或百分比。注意，且非固定列宽度之和不要超过 scroll.x。
			{MENU_ID:920,NAME:"固定头和列",url:"/table18",P_MENU_ID:9},
			// 适合同时展示有大量数据和数据列。
			// 若列头与内容不对齐或出现列重复，请指定列的宽度 width。
			// 建议指定 scroll.x 为大于表格宽度的固定值或百分比。注意，且非固定列宽度之和不要超过 scroll.x。
			{MENU_ID:921,NAME:"表头分组",url:"/table19",P_MENU_ID:9},
			// columns[n] 可以内嵌 children，以渲染分组表头。
			{MENU_ID:922,NAME:"可编辑单元格",url:"/table20",P_MENU_ID:9},
			// 带单元格编辑功能的表格。
			{MENU_ID:923,NAME:"可编辑行",url:"/table21",P_MENU_ID:9},
			//带行编辑功能的表格
			{MENU_ID:924,NAME:"嵌套子表格",url:"/table22",P_MENU_ID:9},
			//展示每行数据更详细的信息。
			{MENU_ID:925,NAME:"动态控制表格属性",url:"/table23",P_MENU_ID:9},
			//使用自定义元素，我们可以集成 react-dnd 来实现拖拽排序。
			{MENU_ID:926,NAME:"选择不同配置组合查看效果。",url:"/table24",P_MENU_ID:9},
            //选择不同配置组合查看效果。
            {MENU_ID:927,NAME:"Carousel走马灯",url:"/mainAntd/carousel",P_MENU_ID:9},
            {MENU_ID:928,NAME:"Collapse折叠面板",url:"/mainAntd/collapse",P_MENU_ID:9},
            {MENU_ID:929,NAME:"List列表",url:"/mainAntd/list",P_MENU_ID:9}

        ]; 
class SideMenuAntd extends Component {
    constructor(props) {
            super(props)
            this.state = {
                    current: '',
                    username: '', 
                    openKeys: []
            }
    } 
    handleClick = (e) => { 
            this.setState({
                current: e.key,
                // openKeys: e.key
            }) 
    } 
    onOpenChange = (e) => { 
        this.setState({
             openKeys: [ e[e.length-1] ]
        })
    }
    render() {
        console.log(this.props.data==undefined?"":this.props.data);
        let menuList = this.props.data; 
        if(menuList==undefined){
            menuList = menuData;
        }
        let subMenu = [];
        let item1 = [];
        let item2 = [];
        let item3 = [];
        let item4 = []; 
        let item9 = []; 
        menuList.map((list,index) => {
            if(list.MENU_ID<10){
                let item = [];
                let MENU_ID = list.MENU_ID;
                menuList.map((list,index) => {
                    if(list.P_MENU_ID==MENU_ID){
                        item.push(<Menu.Item key={list.MENU_ID}><Link to={list.url}>{list.NAME}</Link></Menu.Item>);
                    }
                })
                subMenu.push(<SubMenu key={list.MENU_ID} title={<span><Icon type="api" style={{fontSize:'20px',color: 'aqua'}} /><span>{list.NAME}</span></span>}>
                     {item}
                     </SubMenu>);
            }else{ 
                //subMenu.push(<Menu.Item key={menuList[i].MENU_ID}><Link to={menuList[i].url}>{menuList[i].NAME}</Link></Menu.Item>);
            }
        })
        // for(let i=0;i<menuList.length;i++){
        //     switch (menuList[i].P_MENU_ID) {
        //         case 1:
        //         item1.push(<Menu.Item key={menuList[i].MENU_ID}><Link to={menuList[i].url}>{menuList[i].NAME}</Link></Menu.Item>);
        //         break;
        //         case 2:
        //         item2.push(<Menu.Item key={menuList[i].MENU_ID}><Link to={menuList[i].url}>{menuList[i].NAME}</Link></Menu.Item>);
        //         break;
        //         case 3:
        //         item3.push(<Menu.Item key={menuList[i].MENU_ID}><Link to={menuList[i].url}>{menuList[i].NAME}</Link></Menu.Item>);
        //         break;
        //         case 4:
        //         item4.push(<Menu.Item key={menuList[i].MENU_ID}><Link to={menuList[i].url}>{menuList[i].NAME}</Link></Menu.Item>);
        //         break;
        //         case 9:
        //         item9.push(<Menu.Item key={menuList[i].MENU_ID}><Link to={menuList[i].url}>{menuList[i].NAME}</Link></Menu.Item>);
        //         break;
        //     } 
        // }
        // for(let i=0;i<menuList.length;i++){
        //     switch (menuList[i].MENU_ID) {
        //         case 1:
        //         subMenu.push(<SubMenu key={menuList[i].MENU_ID} title={<span><Icon type="profile" style={{fontSize:'20px',color: 'aqua'}} /><span>{menuList[i].NAME}</span></span>}>
        //              {item1}
        //              </SubMenu>);
        //         break;
        //         case 2:
        //         subMenu.push(<SubMenu key={menuList[i].MENU_ID} title={<span><Icon type="form" style={{fontSize:'20px',color: 'aqua'}} /><span>{menuList[i].NAME}</span></span>}>
        //              {item2}
        //              </SubMenu>);
        //         break;
        //         case 3:
        //         subMenu.push(<SubMenu key={menuList[i].MENU_ID} title={<span><Icon type="api" style={{fontSize:'20px',color: 'aqua'}} /><span>{menuList[i].NAME}</span></span>}>
        //              {item3}
        //              </SubMenu>);
        //         break;
        //         case 4:
        //         subMenu.push(<SubMenu key={menuList[i].MENU_ID} title={<span><Icon type="mail" style={{fontSize:'20px',color: 'aqua'}} /><span>{menuList[i].NAME}</span></span>}>
        //              {item4}
        //         </SubMenu>);
        //         break;
        //         case 9:
        //         subMenu.push(<SubMenu key={menuList[i].MENU_ID} title={<span><Icon type="mail" style={{fontSize:'20px',color: 'aqua'}} /><span>{menuList[i].NAME}</span></span>}>
        //              {item9}
        //         </SubMenu>);
        //         break;
        //     }
        // }
        return(
                <div> 
                    <Menu theme="dark"
                    onClick={this.handleClick}
                    onOpenChange={this.onOpenChange}
                    style={{ width: 'auto' }}
                    defaultOpenKeys={['sub1', 'sub2']}
                    defaultSelectedKeys={[this.state.current]}
                    openKeys={this.state.openKeys}
                    mode="inline"
                    >
                        {subMenu}
                    </Menu> 
                </div>
            )

    }
}


export default SideMenuAntd;