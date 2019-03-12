import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

import { Row, Col } from 'antd';//栅格
import { Card,Button,Icon, Avatar} from 'antd';//卡片
const { Meta } = Card;
const gridStyle = {
  width: '25%',
  textAlign: 'center',
};
class Home extends Component {
    state = {
      loading: true,
    }

    handleClick = () => {
      this.setState({ loading: !this.state.loading });
    }
    render() {
      
      return (
        <header>
            <h1>Home</h1>
            <Row gutter={16}>
              <Col span={6}>
                <Card title="典型卡片" extra={<a href="#">More</a>} style={{ width: '100%' }}>
                  <p>包含标题、内容、操作区域。</p> 
                </Card>
              </Col>
              <Col span={6}>
                <Card title="无边框卡片" bordered={false} extra={<a href="#">More</a>} style={{ width: '100%' }}>
                  <p>bordered={`{false}`}</p> 
                </Card>
              </Col>
              <Col span={6}>
                <Card   style={{ width: '100%' }}>
                  <p>简洁卡片</p> 
                  <p>只包含内容区域。</p> 
                </Card>
              </Col>
              <Col span={6}>
                <Card title="基础栅格" extra={<a href="#">More</a>} style={{ width: '100%' }}>
                  <p>col-6</p>
                  <p>gutter-16</p>
                  <p>col-6</p>
                </Card>
              </Col>
            </Row>
            <br/>
            <Row gutter={10}> 
              <Col span={6}>
              <Card
                  hoverable 
                  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                  <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                  />
                </Card>
              </Col>
              <Col span={6}>
                <Card title="Card title" >
                  <p>title="Europe Street beat"</p>
                  <p>description="www.instagram.com"</p>
                  <p>hoverable cover=img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"</p>
                </Card>
              </Col>
              <Col span={6}>
                <Card title="Card title" >
                  <p>col-6</p>
                  <p>gutter-10</p>
                </Card>
              </Col>
              <Col span={6}>
                <Card title="栅格卡片" >Card content</Card>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col span={12}>
                <Card loading={this.state.loading} title="预加载的卡片">
                  Whatever content
                </Card>
                <Button onClick={this.handleClick} style={{ marginTop: 16 }}>
                  改变状态
                </Button>
              </Col>
              <Col span={12}>
                <Card title="预加载的卡片">
                  数据读入前会有文本块样式。
                </Card> 
              </Col>
            </Row>
            <br/>
            <Row>
              <Col>
                <Card title="网格型内嵌卡片">
                  <Card.Grid style={gridStyle}>一种</Card.Grid>
                  <Card.Grid style={gridStyle}>常见的</Card.Grid>
                  <Card.Grid style={gridStyle}>卡片</Card.Grid>
                  <Card.Grid style={gridStyle}>内容</Card.Grid>
                  <Card.Grid style={gridStyle}>区隔</Card.Grid>
                  <Card.Grid style={gridStyle}>模式</Card.Grid>
                  <Card.Grid style={gridStyle}>。</Card.Grid>
                </Card>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col>
                <Card title="内部卡片">
                  <p
                    style={{
                      fontSize: 14,
                      color: 'rgba(0, 0, 0, 0.85)',
                      marginBottom: 16,
                      fontWeight: 500,
                    }}
                  >
                    Group title
                  </p>
                  <Card
                    type="inner"
                    title="内部卡片"
                    extra={<a href="#">More</a>}
                  >
                    可以放在普通卡片内部，展示多层级结构的信息。
                  </Card>
                  <Card
                    style={{ marginTop: 16 }}
                    type="inner"
                    title="内部卡片"
                    extra={<a href="#">More</a>}
                  >
                    可以放在普通卡片内部，展示多层级结构的信息。
                     <Card
                        style={{ marginTop: 16 }}
                        type="inner"
                        title="内部卡片"
                        extra={<a href="#">More</a>}
                      >
                        可以放在普通卡片内部，展示多层级结构的信息。
                    </Card>
                  </Card>
                </Card>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col>
                    <TabsCard />
              </Col>
            </Row>
            <br/>
            <Row gutter={10}>
              <Col span={6}>
                <Card 
                  cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                  actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                >
                  <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="Card title"
                    description="This is the description"
                  />
                </Card>
              </Col>
              <Col span={6}>
                <Card 
                  cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                  actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                >
                  <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="Card title"
                    description="This is the description"
                  />
                </Card>
              </Col>
              <Col span={12}>
                <Card 
                  cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                  actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                >
                  <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="支持更多内容配置"
                    description="一种支持封面、头像、标题和描述信息的卡片。"
                  />
                </Card>
              </Col>
            </Row>
        </header>
      )
    }
  }
  
  export default Home;

// 带页签的卡片 S
  const tabList = [{
    key: 'tab1',
    tab: '标签一',
  }, {
    key: 'tab2',
    tab: '标签二',
  }];
  
  const contentList = {
    tab1: <div><p>标签一</p> <p>内容</p></div>,
    tab2: <div><p>标签二</p> 
    <Button>按钮</Button></div>,
  };
  
  const tabListNoTitle = [{
    key: 'article',
    tab: 'article',
  }, {
    key: 'app',
    tab: 'app',
  }, {
    key: 'project',
    tab: 'project',
  }];
  
  const contentListNoTitle = {
    article: <p>article content</p>,
    app: <p>app content</p>,
    project: <p>project content</p>,
  };
  
  class TabsCard extends Component {
    state = {
      key: 'tab1',
      noTitleKey: 'app',
    }
    onTabChange = (key, type) => {
      console.log(key, type);
      this.setState({ [type]: key });
    }
    render() {
      return (
        <div>
          <Card
            style={{ width: '100%' }}
            title="带页签的卡片 标题"
            extra={<a href="#">More</a>}
            tabList={tabList}
            onTabChange={(key) => { this.onTabChange(key, 'key'); }}
          >
            {contentList[this.state.key]}
          </Card>
          <br /><br />
          <Card
            style={{ width: '100%' }}
            tabList={tabListNoTitle}
            activeTabKey={this.state.noTitleKey} 
            onTabChange={(key) => { this.onTabChange(key, 'noTitleKey'); }}
          >
            {contentListNoTitle[this.state.noTitleKey]}
          </Card>
        </div>
      );
    }
  }
  // 带页签的卡片 E
  