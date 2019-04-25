import React, {  Component} from 'react';
import { DatePicker } from 'antd';
 import moment from 'moment';

class InputDate extends Component {
	
	render(){
	  return(
		<div>
			<DatePicker  
			id={this.props.id===undefined?"":this.props.id}
			name={this.props.name===undefined?"":this.props.name}
			placeholder="请选择日期"
			showToday="false"
			title={this.props.title===undefined?"":this.props.title}
			format={this.props.format===undefined?"YYYY-MM-DD":this.props.format}
			defaultValue={this.props.value===undefined?"":moment(this.props.value, this.props.format===undefined?"YYYY-MM-DD":this.props.format)}
			/>
		</div>
	)
	}
}
export default InputDate;