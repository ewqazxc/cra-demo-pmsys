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
 
class Collapse1 extends Component{   
    render(){
        
        return(
            <Collapse defaultActiveKey={['0']} accordion>
                <Panel header="手风琴，每次只打开一个tab。默认打开第一个。" key="0">
                    <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 1" key="1">
                <p>{text}</p>
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

export default Collapse1;