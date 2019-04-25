import React, {  Component} from 'react'; 
import $ from 'jquery';
class SelectSingle extends Component {
	componentWillMount(){
		if(this.props.value_enum!==undefined){
			this.setState ({
		  		value_enum:this.props.value_enum
		  	})
		}
   }
	handleKeyUp(that){
			//console.log(that.target.value)
			var reg = this.props.reg;
			if(reg!==undefined){
				that.target.value=that.target.value.replace(reg,'')
			}
	}
	handleChange(that){
		console.log($(that.target));
		console.log(that.target.value);
		console.log(that.target.selectedOptions);
	}
	render(){
	  return(
		<div>
			<select 
			    className="form-control"
			    id={this.props.id===undefined?"":this.props.id}
				name={this.props.name} 
			    title={this.props.title===undefined?"":this.props.title} 
				required={this.props.required===undefined?"":this.props.required}
				style={{'width':this.props.width===undefined?"":this.props.width}}
				onChange={this.handleChange.bind(this)}
			>
				
			</select>
		</div>
	)
	}
	componentDidMount(){
		console.log(this.state)
		if(this.state!==null){
			var value_enum = this.state.value_enum;
			var value_arr;
			if(typeof(value_enum)==='object'){
				value_arr= value_enum;
			}else{
				value_arr= eval('(' + value_enum + ')');
			}
			console.log(value_arr)
			var opt = "<option value=''>请选择</option>";
			for(var i=0;i<value_arr.length;i++){
				opt += "<option value='"+value_arr[i].id+"'>"+value_arr[i].name+"</option>";
			}
			var thisName = this.props.name;
			document.getElementsByName(thisName)[0].innerHTML = opt;
			if(this.props.value!==undefined){
				document.getElementsByName(thisName)[0].value = this.props.value;
			}
		}
	}
}
export default SelectSingle;