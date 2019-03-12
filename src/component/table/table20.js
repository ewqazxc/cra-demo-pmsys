import React, {  Component} from 'react';
import ReactDOM from 'react-dom';
import { Table, Input, Icon, Button, Popconfirm  } from 'antd';

import "./css/table20.css"


class EditableCell extends Component {
    state = {
      value: this.props.value,
      editable: false,
      backValue:this.props.value
    }
    handleChange = (e) => {
      const value = e.target.value;
      console.log(value)
      this.setState({ value }); 
    }
    check = () => {
      this.setState({ editable: false });
      if (this.props.onChange) {
        this.props.onChange(this.state.value);
        let backValue = this.state.value;
        this.setState({backValue});
      }
    }
    checkFalse = () => {
        this.setState({ editable: false });
        const value = this.state.backValue;
        this.setState({ value });
    }
    edit = () => {
      this.setState({ editable: true });
    }
    render() {
      const { value, editable } = this.state;
      return (
        <div className="editable-cell">
          {
            editable ?
              <div className="editable-cell-input-wrapper">
                <Input
                  value={value}
                  onChange={this.handleChange}
                  onPressEnter={this.check}
                />
                <Icon
                  type="check"
                  className="editable-cell-icon-check"
                  onClick={this.check}
                />
                <Icon
                  type="close"
                  className="editable-cell-icon-check2"
                  onClick={this.checkFalse}
                />
              </div>
              :
              <div className="editable-cell-text-wrapper">
                {value || ' '}
                <Icon
                  type="edit"
                  className="editable-cell-icon"
                  onClick={this.edit}
                />
              </div>
          }
        </div>
      );
    }
  }
  
  class EditableTable extends Component {
    constructor(props) {
      super(props);
      this.columns = [{
        title: 'name',
        dataIndex: 'name',
        width: '30%',
        render: (text, record) => (
          <EditableCell
            value={text}
            onChange={this.onCellChange(record.key, 'name')}
          />
        ),
      }, {
        title: 'age',
        dataIndex: 'age',
        render: (text, record) => (
            <EditableCell
              value={text}
              onChange={this.onCellChange(record.key, 'age')}
            />
          ),
      }, {
        title: 'address',
        dataIndex: 'address',
        render: (text, record) => (
            <EditableCell
              value={text}
              onChange={this.onCellChange(record.key, 'address')}
            />
          ),
      }, {
        title: 'operation',
        dataIndex: 'operation',
        render: (text, record) => {
          return (
            this.state.dataSource.length > 1 ?
            (
              <Popconfirm title="确认删除?" onConfirm={() => this.onDelete(record.key)}>
                <a href="javascript:;">Delete</a>
              </Popconfirm>
            ) : null
          );
        },
      }];
  
      this.state = {
        dataSource: [{
          key: '0',
          name: 'Edward King 0',
          age: '32',
          address: 'London, Park Lane no. 0',
        }, {
          key: '1',
          name: 'Edward King 1',
          age: '32',
          address: 'London, Park Lane no. 1',
        }],
        count: 2,
      };
    }
    onCellChange = (key, dataIndex) => {
      return (value) => {
        const dataSource = [...this.state.dataSource];
        const target = dataSource.find(item => item.key === key);
        console.log(target)
        if (target) {
          target[dataIndex] = value;
          this.setState({ dataSource });
        }
      };
    }
    onDelete = (key) => {
      const dataSource = [...this.state.dataSource];
      this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
    }
    handleAdd = () => {
      const { count, dataSource } = this.state;
      const newData = {
        key: count,
        name: `Edward King ${count}`,
        age: 32+Number(`${count}`),
        address: `London, Park Lane no. ${count}`,
      };
      this.setState({
        dataSource: [...dataSource, newData],
        count: count + 1,
      });
    }
    render() {
      const { dataSource } = this.state;
      const columns = this.columns;
      return (
        <div>
          <Button className="editable-add-btn" onClick={this.handleAdd}>Add</Button>
          <Table bordered dataSource={dataSource} columns={columns} />
        </div>
      );
    }
  }

class Table20 extends Component{ 
    render(){
        return(
            <EditableTable />
        )
    }
}

export default Table20;