import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 

import { Row, Col } from 'antd';//栅格
import { Card } from 'antd';//卡片

import Carousl1 from './carousel1.js';
import Carousl2 from './carousel2.js';
import Carousl3 from './carousel3.js';
import Carousl4 from './carousel4.js';


const tabList = [{
    key: 'tab1',
    tab: '基本',
  }, {
    key: 'tab2',
    tab: '垂直',
  }, {
    key: 'tab3',
    tab: '渐显',
  }, {
    key: 'tab4',
    tab: '自动切换',
  }];
  
  const contentList = {
    tab1:  <Carousl1 /> ,
    tab2:  <Carousl2 /> ,
    tab3:  <Carousl3 /> ,
    tab4:  <Carousl4 /> ,
  };
   
  
class Carousel extends Component{ 
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
                            title="Carousel 走马灯" 
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

export default Carousel;