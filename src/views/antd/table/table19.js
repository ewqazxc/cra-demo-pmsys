import React, {  Component} from 'react';
import ReactDOM from 'react-dom';
import { Table } from 'antd'; 

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 100,
    fixed: 'left',
    filters: [{
      text: 'Joe',
      value: 'Joe',
    }, {
      text: 'John',
      value: 'John',
    }],
    onFilter: (value, record) => record.name.indexOf(value) === 0,
  }, {
    title: 'Other',
    children: [{
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: 200,
      sorter: (a, b) => a.age - b.age,
    }, {
      title: 'Address',
      children: [{
        title: 'Street',
        dataIndex: 'street',
        key: 'street',
        width: 200,
      }, {
        title: 'Block',
        children: [{
          title: 'Building',
          dataIndex: 'building',
          key: 'building',
          width: 100,
        }, {
          title: 'Door No.',
          dataIndex: 'number',
          key: 'number',
          width: 100,
        }],
      }],
    }],
  }, {
    title: 'Company',
    children: [{
      title: 'Company Address',
      dataIndex: 'companyAddress',
      key: 'companyAddress',
    //   width: 100,
    }, {
      title: 'Company Name',
      dataIndex: 'companyName',
      key: 'companyName', 
    }],
  }, {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
    width: 80,
    fixed: 'right',
  }];
  
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: 'John Brown',
      age: i + 1,
      street: 'Lake Park',
      building: 'C',
      number: 2035,
      companyAddress: 'Lake Street 42',
      companyName: 'SoftLake Co',
      gender: 'M',
    });
  }
  

class Table19 extends Component{
    render(){
        return(
            <Table
            columns={columns}
            dataSource={data}
            bordered
            size="middle"
            pagination={{pageSize:20}}
            scroll={{ x: '120%', y: 400 }}
          />
        )
    }
}

export default Table19;