import React, {  Component} from 'react';

class InputLabel extends Component {
	render(){
	  return(
	  	<div>
	  		<label
	  		htmlFor={this.props.id===undefined?"":"#"+this.props.id}
	  		>{this.props.title===undefined?"":this.props.title}</label>
	  	</div>
	  )
	}
}
export default InputLabel;