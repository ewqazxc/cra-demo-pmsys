import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 

import { Table, Button, Modal } from 'antd';
 
const data = [{
    key: '1',
    name: 'John Brown',
    age: '32',
    address: 'New York No. 1 Lake Park',
  }, {
    key: '2',
    name: 'Jim Green',
    age: '42',
    address: 'London No. 1 Lake Park1',
  }, {
    key: '3',
    name: 'Joe Black',
    age: '32',
    address: 'Sidney No. 1 Lake Park22',
  }, {
    key: '4',
    name: 'Jim Red',
    age: '32',//filters 仅支持字符串
    address: 'London No. 2 Lake Park333',
  }];
  
  
  
class Table8 extends Component{ 
    state = {
        filteredInfo: null,
        sortedInfo: null,
      };
      handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        this.setState({
          filteredInfo: filters,
          sortedInfo: sorter,
        });
      }
      clearFilters = () => {
        this.setState({ filteredInfo: null });
      }
      clearAll = () => {
        this.setState({
          filteredInfo: null,
          sortedInfo: null,
        });
      }
      setAgeSort = () => {
        this.setState({
          sortedInfo: {
            order: 'descend',
            columnKey: 'age',
          },
        });
      }
    render(){
        let { sortedInfo, filteredInfo } = this.state;
        sortedInfo = sortedInfo || {};
        filteredInfo = filteredInfo || {};
        const columns = [{
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          filters: [
            { text: 'Joe', value: 'Joe' },
            { text: 'Jim', value: 'Jim' },
          ],
          filteredValue: filteredInfo.name || null,
          onFilter: (value, record) => record.name.includes(value),
          sorter: (a, b) => a.name.length - b.name.length,//字符串长度排序
          sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
        }, {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
          //字符串过滤
          filters: [
            { text:  '3' , value: '3' },
            { text: '2', value: '2' },
          ],//仅支持字符串
          filteredValue: filteredInfo.age || null,
          onFilter: (value, record) => record.age.includes(value) ,
          //排序
          sorter: (a, b) => a.age - b.age, //a-b 保证降、升序
          sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,//columnKey = dataIndex && 存在排序规则
        }, {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
          filters: [
            { text: 'London', value: 'London' },
            { text: 'New York', value: 'New York' },
          ],
          filteredValue: filteredInfo.address || null,
          onFilter: (value, record) => record.address.includes(value),
          sorter: (a, b) => a.address.length - b.address.length,
          sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
        }];
        return( 
            <div>
                <div className="table-operations">
                    {/* filteredInfo sortedInfo 状态 */}
                    <Button onClick={this.setAgeSort}>Sort age</Button>
                    <Button onClick={this.clearFilters}>Clear filters</Button>
                    <Button onClick={this.clearAll}>Clear filters and sorters</Button>
                </div>
                <Table columns={columns} dataSource={data} onChange={this.handleChange} />
            </div>
        )
    }
}

export default Table8;

