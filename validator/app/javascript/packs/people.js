import React,{Component} from 'react';
import Navigation from './navigation';
import Header from './header';
import Primary from './primary';
import Secondary from './secondary';


export default class People extends Component {

	constructor(props){
		super(props);
	}

	render(){
		return (
		<div className="application">
			<Navigation/>
			<Header/>
			<Primary/>
			<Secondary/>
		</div>
		);
	}	
}