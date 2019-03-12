import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { Row, Col } from 'antd';

import InputText from './formControl/inputText';
import SelectSingle from './formControl/selectSingle';

class FormConfig extends Component {
    componentWillMount(){
      
    }
    logOut(){
      window.location.href = "/login";
    }
   
    render() {
      const enumData = [
        {id:1,name:'选项一'},
        {id:2,name:'选项2'},
        {id:3,name:'选项3'},
        {id:4,name:'选项4'},
        {id:5,name:'5'},
        {id:6,name:6}];
      return (
        <div>
            <Row>
              <h2>表单配置</h2>
            </Row>
            <Row>
              <Col span={24}>
                <div className="lineBlock">
                  <label>业务适用范围：</label>  
                </div>
                <div className="lineBlock">
                  <InputText />
                </div>
                <div className="lineBlock">
                  <label>状态：</label>  
                </div>
                <div className="lineBlock">
                  <SelectSingle id="state" width="120px" name="state" value_enum={enumData}/>
                </div>
              </Col> 
            </Row>
            <Row>
              <Col span={8}>col-8</Col>
              <Col span={8}>col-8</Col>
              <Col span={8}>col-8</Col>
            </Row>
            <Row>
              <Col span={6}>col-6</Col>
              <Col span={6}>col-6</Col>
              <Col span={6}>col-6</Col>
              <Col span={6}>col-6</Col>
            </Row>
        </div>
      )
    }
  }
  
  export default FormConfig;