import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 

import { List, Avatar, Button, Spin } from 'antd';
import reqwest from 'reqwest';

const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';
  
class List3 extends Component{   
    state = {
        loading: true,
        loadingMore: false,
        showLoadingMore: true,
        data: [],
      }
      componentDidMount() {
        this.getData((res) => {
          this.setState({
            loading: false,
            data: res.results,
          });
        });
      }
      getData = (callback) => {
        reqwest({
          url: fakeDataUrl,
          type: 'json',
          method: 'get',
          contentType: 'application/json',
          success: (res) => {
            callback(res);
          },
        });
      }
      onLoadMore = () => {
        this.setState({
          loadingMore: true,
        });
        this.getData((res) => {
          const data = this.state.data.concat(res.results);
          console.log(res);
          console.log('res');
          this.setState({
            data,
            loadingMore: false,
          }, () => {
            // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
            // In real scene, you can using public method of react-virtualized:
            // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
            window.dispatchEvent(new Event('resize'));
          });
        });
      }
      render() {
        const { loading, loadingMore, showLoadingMore, data } = this.state;
        const loadMore = showLoadingMore ? (
          <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
            {loadingMore && <Spin />}
            {!loadingMore && <Button onClick={this.onLoadMore}>加载更多。。。</Button>}
          </div>
        ) : null;
        return (
          <List
            className="demo-loadmore-list"
            loading={loading}
            itemLayout="horizontal"
            loadMore={loadMore}
            dataSource={data}
            renderItem={item => (
              <List.Item actions={[<a>edit</a>, <a>more</a>]}>
                <List.Item.Meta
                  avatar={
                  <div>
                  <Avatar size="small" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  <Avatar size="default" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  <Avatar size="large" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  </div>}
                  title={<a href="https://ant.design">{item.name.last}</a>}
                  description={<p>email：{item.email}</p>}
                />
                <div>content content content content content content content content content content content
                content content content content content content content content content content content content content content
                content content content content content content content content content content content content content content
                content content content content content content content content content content content content content content
                content content content content content content content content content content content content content content
                content content content content content content content content content content content content content content
                content content content content content content content content content content content content content content
                content content content content content content content content content content content content content content
                content content content content content content content content content content content content content content
                content content content content content content content content content content content content content content
                </div>
              </List.Item>
            )}
          />
        );
      }
}

export default List3;