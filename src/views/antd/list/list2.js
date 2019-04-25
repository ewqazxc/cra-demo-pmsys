import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 

import { List ,Avatar } from 'antd';

const data = [
    {
      title: 'Ant Design Title 1',
      description: 'description',
    },
    {
      title: 'Ant Design Title 2',
      description: 'description',
    },
    {
      title: 'Ant Design Title 3',
      description: 'description',
    },
    {
      title: 'Ant Design Title 4',
      description: 'description',
    },
  ];
  
class List2 extends Component{   
    render(){ 
        return(
            <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={<a href="https://ant.design">{item.title}</a>}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        )
    }
}

export default List2;