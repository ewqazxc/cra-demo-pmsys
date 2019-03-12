import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 

import { Table, Input, Button, Icon } from 'antd';
import "./css/table9.css"
const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  }, {
    key: '2',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park',
  }, {
    key: '3',
    name: 'Jim Green',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  }, {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  }];
  
  
class Table9 extends Component{ 
    state = {
        data,
        
        filterDropdownVisible: false,
        searchText: '',
        filtered: false,

        searchAddressV:false,
        filteredAdr: false,
        addressSearchText: '',
      };
      onInputChange = (e) => {
        // console.log(this.state.data)
        this.setState({ searchText: e.target.value.trim()===""?"": e.target.value});
      }
      addressInputChange = (e) => {
        // console.log(this.state.data)
        this.setState({ addressSearchText: e.target.value });
      }
      onSearchAddress = () => {
        const { addressSearchText } = this.state;
        const reg = new RegExp(addressSearchText, 'gi');
        this.setState({
            searchAddressV: false,
            filteredAdr: !!addressSearchText,
            data: data.map((record) => {
              const match = record.address.match(reg);
              console.log(reg);console.log(match);console.log(!match);
              if (!match) {
                return null;
              }
              return {
                ...record, 
              };
            }).filter(record => !!record),
          });
      }
      onSearch = () => {
        const { searchText } = this.state;
        const reg = new RegExp(searchText, 'gi');
        // console.log(searchText)// "" !true !!false "1" !false !!true
        // console.log(!searchText)
        // console.log(!!searchText)
        this.setState({
          filterDropdownVisible: false,
          filtered: !!searchText,
          data: data.map((record) => {
            const match = record.name.match(reg);
            console.log(reg);console.log(match);console.log(!match);
            if (!match) {
              return null;
            }
            return {
              ...record,
            //   name: (
            //     <span>
            //       {record.name.split(new RegExp('${searchText}', 'i')).map((text, i) => (  
            //           //record.name.split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i')).map((text, i) => (
            //         text.toLowerCase() === searchText.toLowerCase() ?
            //           <span key={i} className="highlight">{text}</span> : text // eslint-disable-line
            //       ))}
            //     </span>
            //   ),
            };
          }).filter(record => !!record),
        });
      }
    render(){
        const columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            filterDropdown: (
              <div className="custom-filter-dropdown">
                <Input
                  ref={ele => this.searchInput = ele}
                  placeholder="查找姓名"
                  value={this.state.searchText}
                  onChange={this.onInputChange}
                  onPressEnter={this.onSearch}
                />
                <Button type="primary" onClick={this.onSearch}>Search</Button>
              </div>
            ),
            filterIcon: <Icon type="smile-o" style={{ color: this.state.filtered ? '#108ee9' : '#aaa' }} />,
            filterDropdownVisible: this.state.filterDropdownVisible,
            onFilterDropdownVisibleChange: (visible) => {
              this.setState({
                filterDropdownVisible: visible,
              }, () => this.searchInput && this.searchInput.focus());
            },
          }, {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
          }, {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            filters: [{
              text: 'London',
              value: 'London',
            }, {
              text: 'New York',
              value: 'New York',
            }],
            onFilter: (value, record) => record.address.indexOf(value) === 0,
            filterDropdown: (
                <div className="custom-filter-dropdown">
                  <Input
                    ref={ele => this.searchAddressI = ele}
                    placeholder="查找地址"
                    value={this.state.addressSearchText}
                    onChange={this.addressInputChange}
                    onPressEnter={this.onSearchAddress}
                  />
                  <Button type="primary" onClick={this.onSearchAddress}>搜索</Button>
                </div>
              ),
              filterIcon: <Icon type="smile-o" style={{ color: this.state.filteredAdr ? 'red' : '#aaa' }} />,
              filterDropdownVisible: this.state.searchAddressV,
              onFilterDropdownVisibleChange: (visible) => {
                this.setState({
                    searchAddressV: visible,
                }, () => this.searchAddressI && this.searchAddressI.focus());
              },
          }];
        return( 
            <Table columns={columns} dataSource={this.state.data} />
        )
    }
}

export default Table9;
 