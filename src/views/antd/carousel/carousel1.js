import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import { Carousel } from 'antd';
  
import './carousel.css'
  
function onChange(a, b, c) {
    console.log(a, b, c);
  }
class Carousel1 extends Component{  
    render(){ 
        return(
            <div style={{width:500,height:300,position: 'relative'}}> 
                <Carousel afterChange={onChange}>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>
                <pre>
                    .ant-carousel .slick-slide {`{`}
                        text-align: center;
                        height: 160px;
                        line-height: 160px;
                        background: #364d79;
                        overflow: hidden;
                    {`}`} 
                    .ant-carousel .slick-slide h3 {`{`}
                    color: #fff;
                    {`}`}
                </pre>
            </div>
        )
    }
}

export default Carousel1;