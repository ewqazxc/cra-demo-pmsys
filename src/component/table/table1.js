import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 

import { Table, Icon, Divider } from 'antd';

//指定表格的数据源 dataSource 为一个数组。
const dataSource = [{
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
  }, {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
  }, {
    key: '3',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
  }, {
    key: '4',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
  }, {
    key: '5',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
  }, {
    key: '6',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
  }, {
    key: '7',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
  }];
  
  const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  }];
class Table1 extends Component{
    render(){
        return(
            <div>
                <Table dataSource={dataSource} columns={columns} />
            </div>
        )
    }
}

export default Table1;

