import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 

import { Table, Icon, Divider } from 'antd';

//指定表格的数据源 dataSource 为一个数组。
const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  }, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  }, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  }];
  
  const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>,
  }, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: 'Action',
    key: 'action',
    render: (text, record) => ( 
      <span>
        <a href="javascript:;">Action 一 {record.name}</a>
        <Divider type="vertical" />
        <a href="javascript:alert();">Delete {record.name}</a>
        <Divider type="vertical" />
        <a href="javascript:alert('xx');" className="ant-dropdown-link">
          More actions <Icon type="down" />
        </a>
      </span>
    ),
  }]; 
class Table2 extends Component{
    action(data){
      console.log(data)
    }
    render(){
        return(
            <div>
                <Table dataSource={data} columns={columns} />
            </div>
        )
    }
}

export default Table2;

