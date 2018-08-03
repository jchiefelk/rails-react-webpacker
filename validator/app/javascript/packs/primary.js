import React, {Component} from 'react';

export default class Primary extends Component {

	constructor(props){
		super(props);
	}

	getListItem(){
		let list=[];
		list.push((
					<a href="#" className="list__item" key={0}>
						<div className="list__table">
							<div className="list__cell">
									<i className="fas fa-user list__icn"></i>	
							</div>
							<div className="list__cell">
									<span className="list__line1">First Last</span>
									<span className="list__line2">555 Five Road, Plummer ID, 83851</span>
							</div>
						</div>
					</a>
		));

		return list;
	}

	
	render(){
		return(
		<div className="primary">
			<div className="content content--primary">
				<div className="list">
					{this.getListItem()}
					<span className="end-of-list">end of list</span>
				</div>
			</div>
		</div>
		);
	}
}