import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import InputText from '../formControl/inputText';
import InputDate from '../formControl/inputDate';
import InputLabel from '../formControl/inputLabel';
import TextArea from '../formControl/textArea';
import SelectSingle from '../formControl/selectSingle';
import SelectMultiple from '../formControl/selectMultiple';
import $ from 'jquery';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

class FormZ extends Component {
	componentWillMount(){
  	this.setState ({
  		form:{
  			formId : 0,
	  		name : 'dataForm',
	  		isMain : '0',
	  		formControl:[
		  		{	id : 'inputText1',
		  			inputType : 1,
			  		name : 'inputText',
			  		title:'文本1，默认值：文本，无限制',
			  		value : '文本 有title'
			  	},{	id : 'inputText2',
		  			inputType : 1,
			  		name : 'inputText2',
			  		value : '文本2，不可编辑',
			  		readonly:1
			  	},{	id : 'inputText3',
		  			inputType : 1,
			  		name : 'inputText3',
			  		value : '文本3，仅数字',
			  		reg:"/[^\\d]/g",
			  		readonly:0
			  	},{ id : 'inputArea1',
		  			inputType : 2,
			  		name : 'inputArea',
			  		value : '文本域',
			  		colNo : 1
		  		},{ id : 'selectSingle1',
		  			inputType : 3,
			  		name : 'selectSingle',
			  		value : '下拉单选',
		  		},{ id : 'selectMultiple1',
		  			inputType : 4,
			  		name : 'selectMultiple',
			  		value : '多选',
		  		},{ id : 'inputDate1',
		  			inputType : 5,
			  		name : 'inputDate',
			  		value : '日期',
		  		},{ id : 'inputDate2',
				  inputType : 5,
				  name : 'inputDate2',
				  value : '日期',
			  }
	  		]
  		}
	  	})
 
	}
	sureSubmit(id,that){
			 var id=id==undefined?'thisform':id; 
			 var data = $("#"+id).serialize();
			 console.log(data);
			//  $.ajax({
			// 	//几个参数需要注意一下
			// 		type: "POST",//方法类型
			// 		dataType: "json",//预期服务器返回的数据类型
			// 		url: "/users/login" ,//url
			// 		data: data,
			// 		success: function (result) {
			// 			console.log(result);//打印服务端返回的数据(调试用)
			// 			if (result.resultCode == 200) {
			// 				alert("SUCCESS");
			// 			}
			// 			;
			// 		},
			// 		error : function() {
			// 			alert("异常！");
			// 		}
			// 	});
		
			;
		}
	render() {
		return (
			<div>
				<form 
				id={this.props.id==undefined?"thisform":this.props.id}
				name={this.props.name==undefined?"":this.props.name}
				className="form-group"
				action={this.props.url==undefined?"":this.props.url}
				method={this.props.method==undefined?"":this.props.method}
				>
				<table className="table">
				<tbody>
					
				</tbody>
				</table>
				<input type="date" id="date" class="ant-calendar-picker-input"/>123
				</form>
				<hr/>
				<div><button onClick={this.sureSubmit.bind(this,this.props.id)}>提交</button><button>取消</button></div>
			</div>
		)
	}
	componentDidMount(){
		//console.log(this.state.form)
		let formControl = this.state.form.formControl;
		let tableHtml = "";
		let colNo = 0;
		for(let i=0;i<formControl.length;i++){
			if(formControl[i].colNo!=1&&colNo==0){
				tableHtml+="<tr>";
				tableHtml+="<td class='tdMiddleRight'><label for='"+formControl[i].id+"'>"
				tableHtml+=formControl[i].name+"</label></td><td id='td"+formControl[i].id+"' class='tdMiddle'></td>";
				colNo = 1;
			}else if(formControl[i].colNo!=1&&colNo==1){
				tableHtml+="<td class='tdMiddleRight'><label for='"+formControl[i].id+"'>"
				tableHtml+=formControl[i].name+"</label></td><td id='td"+formControl[i].id+"' class='tdMiddle'></td>";
				colNo = 0;
			}else{
				tableHtml+="<tr>";
				tableHtml+="<td class='tdMiddleRight'><label for='"+formControl[i].id+"'>"
				tableHtml+=formControl[i].name+"</label></td><td id='td"+formControl[i].id+"' class='tdMiddle' colspan='3'></td>";
				colNo = 0;
			}
		} 
		$("#thisform tbody").html(tableHtml);
		for(let i=0;i<formControl.length;i++){
			switch(formControl[i].inputType){
				case 1: if(document.getElementById('td'+formControl[i].id)!=undefined)
				ReactDOM.render(<InputText 
					id={formControl[i].id} 
					value={formControl[i].value} 
					name={formControl[i].name} 
					title={formControl[i].title==undefined?"":formControl[i].title} 
					length={formControl[i].length==undefined?"":formControl[i].title} 
					reg={formControl[i].reg==undefined?"":formControl[i].reg} 
					readonly={formControl[i].readonly==0?undefined:formControl[i].readonly} />
					, document.getElementById('td'+formControl[i].id));
				break;
				case 2: if(document.getElementById('td'+formControl[i].id)!=undefined)
				ReactDOM.render(<TextArea
					name={formControl[i].name}  />
					, document.getElementById('td'+formControl[i].id));
				break;
				case 3: if(document.getElementById('td'+formControl[i].id)!=undefined)
				ReactDOM.render(<SelectSingle 
					name={formControl[i].name} />
					, document.getElementById('td'+formControl[i].id));
				break;
				case 4: if(document.getElementById('td'+formControl[i].id)!=undefined)
				ReactDOM.render(<SelectMultiple 
					name={formControl[i].name} />
					, document.getElementById('td'+formControl[i].id));
				break;
				case 5: if(document.getElementById('td'+formControl[i].id)!=undefined)
				ReactDOM.render(<InputDate 
					name={formControl[i].name} />
					, document.getElementById('td'+formControl[i].id));
				break;
			}
		}
	}
}
export default FormZ;
/*
 * 
 * 
 


 * <tr>
		<td className="tdMiddleRight"><InputLabel title="tdMiddleRight"/></td>
		<td><InputText name="name" length="100" value=""/></td>
		<td className="tdMiddleRight"><InputLabel title="tdMiddleRight"/></td>
		<td><InputText name="name" length="50" value=""/></td>
</tr>
<tr>
		<td><InputLabel title="标题"/></td>
		<td><InputText name="name" value=""/></td>
		<td className="tdMiddleCenter"><InputLabel title="tdMiddleCenter"/></td>
		<td><InputText name="name" length="10" value=""/></td>
</tr>
<tr>
		<td><InputLabel title="标题"/></td>
		<td colSpan="3"><InputText name="name" length="10" value=""/></td>
</tr>*/