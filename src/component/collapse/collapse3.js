import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Collapse } from 'antd';
const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}

const text = (
    <p style={{ paddingLeft: 24 }}>
      A dog is a type of domesticated animal.
      Known for its loyalty and faithfulness,
      it can be found as a welcome guest in many households across the world.
    </p>
  );
  
 
class Collapse3 extends Component{   
    render(){
        
        return(
            <Collapse bordered={false} defaultActiveKey={['1']}>
            <Panel header="一套没有边框的简洁样式。" key="1">
              {text}
            </Panel>
            <Panel header="This is panel header 2" key="2">
              {text}
            </Panel>
            <Panel header="This is panel header 3" key="3">
              {text}
            </Panel>
          </Collapse>
        )
    }
}

export default Collapse3;