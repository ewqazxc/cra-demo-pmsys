import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import { Table } from 'antd'; 

    const renderContent = (value, row, index) => {
        const obj = {
        children: value,
        props: {},  //设置colspan rowspan
        };
        if (index === 4) {
        obj.props.colSpan = 0;
        }
        return obj;
    };
  const columns = [{
    title: 'Name',
    dataIndex: 'name',
    render: (text, row, index) => {
      if (index < 4) {
        return <a href="javascript:;">{text}</a>;
      }
      return {
        children: <a href="javascript:;">{text}</a>,
        props: {
          colSpan: 5,
        },
      };
    },
    //render: renderContent,
  }, {
    title: 'Age',
    dataIndex: 'age',
    render: renderContent,
  }, {
    title: 'Home phone',
    colSpan: 2,
    dataIndex: 'tel',
    render: (value, row, index) => {
      const obj = {
        children: value,
        props: {},
      };
      if (index === 2) {  //第三行 合并下一行
        obj.props.rowSpan = 2;
      }
      // These two are merged into above cell
      if (index === 3) { //第四行 空
        obj.props.rowSpan = 0;
      }
      if (index === 4) { //第五行 空
        obj.props.colSpan = 0;
      }
      return obj;
    },
  }, {
    title: 'Phone',
    colSpan: 0,
    dataIndex: 'phone',
    render: renderContent,
  }, {
    title: 'Address',
    dataIndex: 'address',
    render: renderContent,
  }];

  const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    tel: '0571-22098909',
    phone: 18889898989,
    address: 'New York No. 1 Lake Park',
  }, {
    key: '2',
    name: 'Jim Green',
    tel: '0571-22098333',
    phone: 18889898888,
    age: 42,
    address: 'London No. 1 Lake Park',
  }, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Sidney No. 1 Lake Park',
  }, {
    key: '4',
    name: 'Jim Red',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'London No. 2 Lake Park',
  }, {
    key: '5',
    name: 'Jake White',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Dublin No. 2 Lake Park',
  }];
class Table14 extends Component{ 
     
    render(){
        return(
            <Table columns={columns} dataSource={data} bordered />
        )
    }
 
}

export default Table14;