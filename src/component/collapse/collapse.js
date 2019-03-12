import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Collapse } from 'antd';

import Collapse1 from './collapse1.js';
import Collapse2 from './collapse2.js';
import Collapse3 from './collapse3.js';
import Collapse4 from './collapse4.js';
import Collapse5 from './collapse5.js';
const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
 
class MyCollapse extends Component{   
    render(){
        
        return(
            <Collapse defaultActiveKey={['1']} onChange={callback}>
                <Panel header="折叠面板" key="1">
                <p>可以同时展开多个面板，这个例子默认展开了第一个。defaultActiveKey</p>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                     <p>{text}</p>
                </Panel>
                <Panel header="手风琴" key="3">
                    <Collapse1 />
                </Panel>
                <Panel header="面板嵌套" key="4">
                    <Collapse2 />
                </Panel>
                <Panel header="简洁风格" key="5">
                    <Collapse3 />
                </Panel>
                <Panel header="自定义面板" key="6">
                    <Collapse4 />
                </Panel>
                <Panel header="隐藏箭头" key="7">
                    <Collapse5 />
                </Panel>
                <Panel header="disabled" key="9" disabled>
                <p>{text}</p>
                </Panel>
            </Collapse>
        )
    }
}

export default MyCollapse;