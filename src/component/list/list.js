import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 

import { Row, Col } from 'antd';//栅格
import { Card } from 'antd';//卡片 

import List1 from './list1.js';
import List2 from './list2.js';
import List3 from './list3.js';
import List4 from './list4.js';

const tabList = [{
    key: 'tab1',
    tab: '简单列表',
  }, {
    key: 'tab2',
    tab: '基础列表',
  }, {
    key: 'tab3',
    tab: '加载更多',
  }, {
    key: 'tab4',
    tab: '竖排列表样式+分页',
  }];
  
  const contentList = {
    tab1:  <List1 /> ,
    tab2:  <List2 /> ,
    tab3:  <List3 /> ,
    tab4:  <List4 /> ,
  };
   
  
class MyList extends Component{ 
    state = {
        key: 'tab1',
        noTitleKey: 'app',
      }
      onTabChange = (key, type) => {
        console.log(key, type);
        this.setState({ [type]: key });
      }
    render(){
        
        return(
            <div>
                <Row> 
                    <Col>
                        <Card
                            style={{ width: '100%' }}
                            title="List  列表 _最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。" 
                            tabList={tabList}
                            onTabChange={(key) => { this.onTabChange(key, 'key'); }}
                        >
                            <Row>{contentList[this.state.key]}</Row>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default MyList;