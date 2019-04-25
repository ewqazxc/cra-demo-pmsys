import React,{ Component} from 'react';
import { Select } from 'antd';
const Option = Select.Option;
const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
 
class SelectMultiple extends Component {
	componentWillMount(){ 
			this.setState ({
					inputNode:this.props.id===undefined?"":this.props.id,
					a:"a"
				}) 
				console.log(this.state)
	 }
	 handleChange (value) {
		console.log(`selected ${value}`); 
		console.log(this.state)
	}
	
	render() {
		return(
			<div>
				<Select
						name={this.props.name===undefined?"":this.props.name}
				    mode="multiple"
				    style={{ width: '100%' }}
				    placeholder="请选择"
				    defaultValue={this.props.value===undefined?[]:this.props.value}
				    onChange={this.handleChange}
				  >
				    {children}
				  </Select>
					<input type="text" id={this.props.id===undefined?"":this.props.id}/>
			</div>
		)
	}
}
export default SelectMultiple;