import PropTypes from 'prop-types'; 
import React,{Component} from 'react'; 
import ReactDOM from 'react-dom'; 

// Component 
class ComponentExample extends Component{ 
	render(){ 
		return( 
				<div> 
					{/* printing all props */} 
					<h1> 
						{this.props.arrayProp} 
						<br /> 

						{this.props.stringProp} 
						<br /> 

						{this.props.numberProp} 
						<br /> 

						{this.props.boolProp} 
						<br /> 
					</h1> 
				</div> 
			); 
	} 
} 

// validating prop types 
ComponentExample.propTypes = { 
	arrayProp: PropTypes.array, 
	stringProp: PropTypes.string, 
	numberProp: PropTypes.number, 
	boolProp: PropTypes.bool, 
} 

// creating default props 
ComponentExample.defaultProps = { 

	arrayProp: ['Ram', 'Shyam', 'Raghav'], 
	stringProp: "GeeksforGeeks", 
	numberProp: "10", 
	boolProp: true, 
} 

ReactDOM.render( 
	<ComponentExample />, 
	document.getElementById("root") 
); 
