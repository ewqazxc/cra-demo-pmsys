import React, {Component} from 'react';

class InputText extends Component {
	handleKeyUp(that){
			//console.log(that.target.value)
			var reg = this.props.reg;
			//console.log(reg)
			if(reg!=undefined){
				that.target.value=that.target.value.replace(eval(reg),'')
			}
	}
	render(){
	  return(
		<div>
			<input
			    type="text"
			    id={this.props.id===undefined?"":this.props.id}
			    className="form-control" 
			    name={this.props.name===undefined?"":this.props.name}
			    maxLength={this.props.length===undefined?"":this.props.length} 
			    defaultValue={this.props.value===undefined?"":this.props.value}
			    title={this.props.title===undefined?"":this.props.title}
			    placeholder={this.props.placeholder===undefined?"":this.props.placeholder}
			    required={this.props.required===undefined?"":this.props.required}
			    onKeyUp={this.handleKeyUp.bind(this)}
			    disabled={this.props.readonly===undefined?false:true}
			/>
		</div>
	)
	}
}
export default InputText;