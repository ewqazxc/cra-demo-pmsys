import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 

import { Table, Button, Modal } from 'antd';
 
const columns = [{
    title: 'Name',
    dataIndex: 'name',
    //字符串过滤
    filters: [{
      text: 'Joe',
      value: 'Joe',
    }, {
      text: 'Jim',
      value: 'Jim',
    }, {
      text: 'Submenu',
      value: 'Submenu',
      children: [{
        text: 'Green',
        value: 'Green',
      }, {
        text: 'Black',
        value: 'Black',
      }],
    }], 
    onFilter: (value, record) => record.name.indexOf(value) === 0,//value 在字符中首位
    //排序
    sorter: (a, b) => a.name.length - b.name.length,
  }, {
    title: 'Age',
    dataIndex: 'age', 
    //defaultSortOrder: 'Ascending',//默认升序 //'descend',//默认降序
    sorter: (a, b) => a.age - b.age, 
  }, {
    title: 'Address',
    dataIndex: 'address',
    filters: [{
      text: 'London',
      value: 'London',
    }, {
      text: 'New York',
      value: 'New York',
    }],
    filterMultiple: false,//单选过滤
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
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
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  }];
  
  function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }
  
class Table7 extends Component{  
    render(){ 
        return( 
            <Table columns={columns} dataSource={data} onChange={onChange} />
        )
    }
}

export default Table7;

