import React,{Component} from 'react';
import People from './people';

export default class App extends Component {



	render(){
		console.log(this.props.data)
		return(
  			<div>
  				Hello React!
  			<People/>
  			</div>
		);
	}
}