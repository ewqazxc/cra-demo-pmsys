import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 

import { List } from 'antd';

const data = [
    '列表拥有大、中、小三种尺寸。',
    '通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。',
    '可通过设置 header 和 footer，来自定义列表头部和尾部。',
    'data用数组形式', 
  ];
  
class List1 extends Component{   
    render(){ 
        return(
            <div>
            <h3 style={{ marginBottom: 16 }}>Default Size 默认大小</h3>
            <List
              header={<div>头部</div>}
              footer={<div>底部</div>}
              bordered
              dataSource={data}
              renderItem={item => (<List.Item>{item}</List.Item>)}
            />
            <h3 style={{ margin: '16px 0' }}>Small Size 小尺寸</h3>
            <List
              size="small"
              header={<div>Header</div>}
              footer={<div>Footer</div>}
              bordered
              dataSource={data}
              renderItem={item => (<List.Item>{item}</List.Item>)}
            />
            <h3 style={{ margin: '16px 0' }}>Large Size 大尺寸</h3>
            <List
              size="large"
              header={<div>Header</div>}
              footer={<div>Footer</div>}
              bordered
              dataSource={data}
              renderItem={item => (<List.Item>{item}</List.Item>)}
            />
          </div>
        )
    }
}

export default List1;