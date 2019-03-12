import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Collapse } from 'antd';
const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
 
class Collapse2 extends Component{   
    render(){
        
        return(
        <Collapse onChange={callback}>
            <Panel header="嵌套折叠面板。" key="1">
              <Collapse defaultActiveKey="1">
                <Panel header="This is panel nest panel" key="1">
                  <p>{text}</p>
                </Panel>
              </Collapse>
            </Panel>
            <Panel header="This is panel header 2" key="2">
              <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 3" key="3">
              <p>{text}</p>
            </Panel>
        </Collapse>
        )
    }
}

export default Collapse2;