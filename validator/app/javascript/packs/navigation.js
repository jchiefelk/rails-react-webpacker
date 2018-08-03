import React,{Component} from 'react';


export default class Navigation extends Component {
	

	render(){
			return(
				<nav className="nav" id="nav">
					<span className="logo" href="#">
					<img className="logo__img" src="logo_glyph_sd.svg" alt="Logo"/>
					<span className="logo__self">Self<span className="logo__determine">Determine</span></span></span>
					<a className="nav__item nav__item--active" href="#"><i className="fas fa-user nav__icn"></i> People</a>
					<a className="nav__item" href="#"><i className="fas fa-boxes nav__icn"></i> Things</a>
					<a className="nav__item" href="#"><i className="fas fa-box-open nav__icn"></i> Stuff</a>
					<a className="nav__item" href="#"><i className="fas fa-cog nav__icn"></i> Settings</a>
					<a className="nav__item" href="#"><i className="fas fa-sign-out-alt nav__icn"></i> Logout</a>
				</nav>
			);
		}
}