import React, {  Component} from 'react';

class TextArea extends Component {
	handleKeyUp(that){
			//console.log(that.target.value)
			var reg = this.props.reg;
			if(reg!==undefined){
				that.target.value=that.target.value.replace(eval(reg),'')
			}
	}
	render(){
	  return(
		<div>
			<textarea 
			className="form-control"
				id={this.props.id===undefined?"":this.props.id}
				name={this.props.name} 
				rows={this.props.rows===undefined?"3":this.props.rows}
				maxLength={this.props.length} defaultValue={this.props.value}
				defaultValue={this.props.value===undefined?"":this.props.value}
				title={this.props.title===undefined?"":this.props.title}
			    onKeyUp={this.handleKeyUp.bind(this)}>
			</textarea>
		</div>
	)
	}
}
export default TextArea;