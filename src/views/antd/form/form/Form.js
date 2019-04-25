import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import InputText from '../formControl/inputText';
import InputDate from '../formControl/inputDate';
import TextArea from '../formControl/textArea';
import SelectSingle from '../formControl/selectSingle';
import SelectMultiple from '../formControl/selectMultiple';
import FormZ from './FormZ';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');


//import '../../css/form.css';

class Form extends Component {
  componentWillMount(){
  	this.setState ({
  		input1:{
  			inputType : 2,
	  		name : 'test',
	  		value : '默认值'
  		}
  	})
  	console.log(this.state)
  	console.log(document.getElementById('table'))
  }
  render() {
    return (
      <div>
          <form style={{width:"100%",minHeight:"400px",backgroundColor:"ghostwhite"}} action="" method="post">
          	<table id="table" className="table table-bordered table-hover">
				<tbody>
				<tr>
					<td>1</td><td>2</td><td>3</td>
				</tr>
				<tr>
					<td>1</td><td>2</td><td>3</td>
				</tr>
				<tr>
					<td><input className="form-control" type="text" name="wenben" title="文本框" defaultValue="默认值" /></td>
					<td><input className="form-control" type="date" name="riqi" title="日期"/></td>
					<td><input type="checkbox" name="checkbox" title="复选"/></td><td></td>
				</tr>
				<tr>
					<td><textarea className="form-control" name="wenbenyu"></textarea></td>
					<td><input className="form-control" type="file" name="file" title="文件上传"/></td>
					<td><input type="radio" name="radio" title="单选"/></td><td></td>
				</tr>
				<tr>
					<td><input className="form-control" type="tel" name="tel" title="手机"/></td>
					<td><input className="form-control" type="number" name="number" title="数字"/></td>
					<td><input className="form-control" type="email" name="email" title="邮箱"/></td>
					<td><input className="form-control" type="email" name="email" title="邮箱"/></td>
				</tr>
				<tr>
					<td id="td1"></td><td id="td2"></td><td id="text0"></td><td></td>
				</tr>
				<tr id="input1"></tr>
				<tr>
					<td id="td3"></td><td id="td4"></td><td></td><td></td>
				</tr>
				<tr>
					<td>单选</td><td id="radio1"></td><td id="radio2"></td><td id="radio3"></td>
				</tr>
				<tr>
				<td><SelectSingle name="selectDead"/></td>
					<td><InputDate name="日期" format="YYYY-MM-DD HH:mm"/></td>
					<td><InputDate type="month" name="日期2" format="YYYY-MM"/></td>
					<td><InputDate type="week" name="日期3" format="YYYY"/></td>
				</tr>
				<tr>
					<td><InputDate name="日期" format="YYYY-MM-DD HH"/></td>
					<td><InputDate name="日期" format="YYYY-MM-DD" value="2011-11-11"/></td>
					<td><InputDate type="month" name="日期2"  value="2011-11-11"/></td>
					<td><InputDate type="week" name="日期3"   value="2011-11-11"/></td>
				</tr>
				<tr>
					<td><SelectMultiple value_enum="[{id:1,name:'选项一'},{id:2,name:'选项2'},{id:3,name:'选项3'},{id:4,name:'选项4'},{id:5,name:'5'},{id:6,name:6}]" /></td>
					<td><SelectMultiple /></td>
					<td><SelectMultiple /></td>
					<td><SelectMultiple /></td>
				</tr>
				</tbody>
			</table>
          </form>
          <hr/>
          <FormZ/>
    
          	
      </div>
      
    )
  }
  componentDidMount(){
  	this.state.input1.inputType =0;
  	console.log(this.state.input1);
  	if(this.state.input1.inputType==0){
  		let html = "<input type='text' class='form-control' name='"+this.state.input1.name+"' value='"+this.state.input1.value+"'/>"
  		document.getElementById('input1').innerHTML = html;
  		console.log(document.getElementById('input1'))
  	}
  	switch(this.state.input1.inputType){
  		case 0:
	  		var html = "<input type='text' class='form-control' name='"+this.state.input1.name+"' value='"+this.state.input1.value+"'/>"
	  		document.getElementById('input1').innerHTML = html;
	  		break;
	  	case 1:
	  		var html = "<textarea class='form-control' name='"+this.state.input1.name+"' value='"+this.state.input1.value+"'></textarea>"
	  		document.getElementById('input1').innerHTML = html;
	  		break;
  	}
  	console.log(this.state.input1);
  	ReactDOM.render(<InputText readonly="1"/>, document.getElementById('text0'));
  	ReactDOM.render(<InputText name="name" length="10" value=""/>, document.getElementById('td1'));
  	ReactDOM.render(<InputText name="name2" length="20" value="No.2" reg="/[^\d]/g"/>, document.getElementById('td2'));
  	ReactDOM.render(<TextArea name="textArea1" length="10" value="textArea1textArea1"/>, document.getElementById('td3'));
  	ReactDOM.render(<TextArea name="textArea2" length="20" value="textArea12" rows="10"/>, document.getElementById('td4'));
 
    var enumData = [{id:1,name:'选项一'},{id:2,name:'选项2'},{id:3,name:'选项3'},{id:4,name:'选项4'},{id:5,name:'5'},{id:6,name:6}];
    ReactDOM.render(<SelectSingle/>, document.getElementById('radio1'));
    ReactDOM.render(<SelectSingle name="单选1" value_enum={enumData} value="3"/>, document.getElementById('radio2'));
    ReactDOM.render(<SelectSingle name="单选2" value_enum="[{id:1,name:'选项一'},{id:2,name:'选项2'}]" value="2"/>, document.getElementById('radio3'));
  }
  
}

export default Form;