import React,{Component} from 'react';

export default class Header extends Component {
	
	render(){
			return(
				<header className="header">
					<div className="header__elements">
						<a className="menu toggle open" href="#nav"><span className="menu__copy">Menu</span></a>
						<h1 className="screen-title">People</h1>
					</div>
				</header>
			);
		}

}