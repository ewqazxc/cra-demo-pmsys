import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 

import { Table, Icon, Divider } from 'antd';
 
const columns = [{
    title: 'Name',
    dataIndex: 'name',
    render: text => <a href="javascript:;">{text}</a>,
  }, {
    title: 'Age',
    dataIndex: 'age',
  }, {
    title: 'Address',
    dataIndex: 'address',
  }];

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
    }, {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
}];
  
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.key === '1'||record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };
  
  
class Table4 extends Component{ 
    render(){
        return( 
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        )
    }
}

export default Table4;

