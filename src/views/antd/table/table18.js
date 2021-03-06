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
    width: '120px', 
    fixed: 'left'
  },{
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    render: name => `${name.first} ${name.last}`,
    width: '120px', 
  }, {
    title: 'nat',
    dataIndex: 'nat',
    width: '80px',
  }, {
    title: 'birth',
    dataIndex: 'dob',
    width: '120px',
    render:dob => dob.substring(0,10)
  }, {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ],
    width: '220px',
  }, {
    title: 'Email',
    dataIndex: 'email',
  }, {
    title: 'phone',
    dataIndex: 'phone',
    width: '150px', 
  }, {
    title: 'registered',
    dataIndex: 'registered', 
    width: '120px',
    // height: '73px', 
    render:registered => registered.substring(0,10), 
    fixed: 'right',
  }];

class Table18 extends Component{ 
    state = {
        data: [],
        pagination: {},
        loading: false,
        bordered: false
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
          setTimeout(() => {
            this.setState({
              bordered:true
            })
          }, 10); 
        });
      } 
    render(){
        return(
            <div>
            <h2>Normal table</h2>
            <Table columns={columns}
                rowKey={record => record.registered}
                dataSource={this.state.data}
                pagination={this.state.pagination}
                loading={this.state.loading}
                onChange={this.handleTableChange} 
            />
            <h2>固定头和列</h2>
            <Table
                id='fixTabel'
                columns={columns}
                rowKey={record => record.registered}
                dataSource={this.state.data}
                pagination={this.state.pagination}
                loading={this.state.loading}
                onChange={this.handleTableChange} 
                size="middel"
                bordered={this.state.bordered} //右对齐
                scroll={{ x:1500 , y: 400 }}
            />  
            </div>
        )
    }

    componentDidMount() {
         this.fetch();
    }
}

export default Table18;