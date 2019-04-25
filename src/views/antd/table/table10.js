import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import { Table } from 'antd';
import reqwest from 'reqwest';

const columns = [
//   {
//     title: 'Large picture',
//     dataIndex: 'picture',  
//     //render: picture => `<img src='${picture.large}'>`,//`${picture.large} ${picture.medium} ${picture.thumbnail}`,
//     render:(picture) => ( 
//         <span>
//           <img src={picture.large}/> 
//         </span>
//       ),
//     width: '10%',
//   },{
//     title: 'Medium picture',
//     dataIndex: 'picture', 
//     //render: picture => `<img src='${picture.large}'>`,//`${picture.large} ${picture.medium} ${picture.thumbnail}`,
//     render:(picture) => ( 
//         <span>
//           <img src={picture.medium}/> 
//         </span>
//       ),
//     width: '10%',
//   },{
//     title: 'Thumbnail picture',
//     dataIndex: 'picture', 
//     //render: picture => `<img src='${picture.large}'>`,//`${picture.large} ${picture.medium} ${picture.thumbnail}`,
//     render:(picture) => ( 
//         <span>
//           <img src={picture.thumbnail}/> 
//         </span>
//       ),
//     width: '10%',
//   },
  {
    title: 'picture',
    dataIndex: 'picture', 
    //render: picture => `<img src='${picture.large}'>`,//`${picture.large} ${picture.medium} ${picture.thumbnail}`,
    render:(picture) => ( 
        <span>
          <img src={picture.thumbnail}/> 
        </span>
      ),
    width: '10%',
  },{
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    render: name => `${name.first} ${name.last}`,
    width: '10%',
  }, {
    title: 'nat',
    dataIndex: 'nat',
    width: '80px',
  }, {
    title: 'birth',
    dataIndex: 'dob',
    render:dob => dob//.substring(0,10)
  }, {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ],
    width: '20%',
  }, {
    title: 'Email',
    dataIndex: 'email',
  }, {
    title: 'phone',
    dataIndex: 'phone',
  }, {
    title: 'registered',
    dataIndex: 'registered',
    render:registered => registered//.substring(0,10)
  }];

class Table10 extends Component{ 
    state = {
        data: [],
        pagination: {},
        loading: false,
      };
      handleTableChange = (pagination, filters, sorter) => {
        const pager = { ...this.state.pagination };
        console.log(pagination)
        pager.current = pagination.current;
        this.setState({
          pagination: pager,
        });
        this.fetch({
          results: pagination.pageSize,
          page: pagination.current,
          sortField: sorter.field,
          sortOrder: sorter.order,
          ...filters,
        });
      }
      fetch = (params = {}) => {
        console.log('params:', params);
        this.setState({ loading: true });
        reqwest({
          url:  'https://randomuser.me/api',
          method: 'get',
          data: {
            results: 10,
            ...params,
          },
          type: 'json',
        }).then((data) => {
          console.log(data);
          const pagination = { ...this.state.pagination };
          // Read total count from server
          // pagination.total = data.totalCount;
          pagination.total = 100;//data.results.length;
          this.setState({
            loading: false,
            data: data.results,
            pagination,
          });
        });
      } 
    render(){
        return(
            <Table columns={columns}
                rowKey={record => record.registered}
                dataSource={this.state.data}
                pagination={this.state.pagination}
                loading={this.state.loading}
                onChange={this.handleTableChange} 
            />
        )
    }

    componentDidMount() {
         this.fetch();
    }
}

export default Table10;