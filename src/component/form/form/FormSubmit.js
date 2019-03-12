import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import $ from 'jquery';
import jquery from 'jquery';
import {toastIt} from '../../assets/toastIt/toastit';
import InputText from '../formControl/inputText';
import InputDate from '../formControl/inputDate';
import TextArea from '../formControl/textArea';
import SelectSingle from '../formControl/selectSingle';
import SelectMultiple from '../formControl/selectMultiple';
import FormZ from './FormZ';
import moment from 'moment';

import 'moment/locale/zh-cn';
moment.locale('zh-cn');

class FormSubmit extends Component {
	unSubmit(that) {
		alert(false)
		that.preventDefault();
		return false; 
	}
	sureSubmit(that) {
		if($("#userName").val()==""){
			alert("用户名不得为空")
			toastIt("用户名不得为空用户名不得为空用户名不得为空用户名不得为空");
			return false;
		}else{
			var options = {   
				type: 'POST',  
				url: '提交路径',  
				success:function(responseText, statusText, xhr, $form) {
					if(responseText.status == "0"){  
						/** 
						* 请求成功后的操作 
						*/  
						alert(responseText.msg);  
					} else {  
						alert(responseText.msg);  
					}     
				},    
				dataType: 'json',  
				error : function(xhr, status, err) {              
					alert("操作失败");  
				}  
			};
			  
			$("#myForm").submit(function(){  
				console.log("???")  
				$(this).ajaxSubmit(options);   
				
				return false;   //防止表单自动提交  
			});  
			//$("#myForm").submit();
		}
	}
	handelSubmit(e){
		console.log("handelSubmit")
		e.preventDefault();
		return false;
	}
	render() {
		
		return(
			<div>
				<form 
				id="myForm"
				name="myForm"
				className="form-group"
				action="formSubmit"
				method="GET"
				onSubmit={this.handelSubmit}
				>
				<table className="table" style={{width:"50%",margin:"0 auto"}}>
				<tbody>
					<tr>
						<td className="tdMiddleRight">用户名</td>
						<td><InputText id="userName" name="userName" length="10" placeholder="0~10个字符"/></td>
					</tr>
					<tr>
						<td className="tdMiddleRight">性别</td>
						<td><SelectSingle id="userSex" name="userSex"value_enum="[{id:0,name:'女'},{id:1,name:'男'}]" placeholder="0~10个字符"/></td>
					</tr>
				</tbody>
				<input type="submit" value="提交"/>
				<button onClick={this.unSubmit.bind(this)}>取消</button>	
				</table>
				
				</form>
				<button onClick={this.sureSubmit.bind(this)}>确认</button>	
			</div>
		)
	}
}
export default FormSubmit;