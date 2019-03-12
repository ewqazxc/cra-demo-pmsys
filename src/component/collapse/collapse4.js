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
const customPanelStyle = {
    background: '#f7f7f7',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden',
};
  
 
class Collapse4 extends Component{   
    render(){
        
        return(
            <Collapse bordered={false} defaultActiveKey={['1']}>
                <Panel header="自定义各个面板的背景色、圆角和边距。" key="1" style={customPanelStyle}>
                <p>const customPanelStyle = 
                        background: '#f7f7f7',
                        borderRadius: 4,
                        marginBottom: 24,
                        border: 0,
                        overflow: 'hidden',
                    ;
                </p>
                </Panel>
                <Panel header="This is panel header 2" key="2" style={customPanelStyle}>
                <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 3" key="3" style={customPanelStyle}>
                <p>{text}</p>
                </Panel>
            </Collapse>
        )
    }
}

export default Collapse4;