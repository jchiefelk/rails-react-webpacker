import React, {Component} from 'react';


export default class Secondary extends Component {

	constructor(props){
		super(props);
	}

	renderInitialView(){
		return null;
	}

	renderForm(){

		return(

		<form className="result__form" action="/user_sessions" accept-charset="UTF-8" method="post">
		<input name="utf8" type="hidden" value="✓"/>
						<input type="hidden" name="authenticity_token" value="Voa9w/5JAQnavBTMF5X6UTcz9TUKplh0wb7wA+huvfGgLoVy6q9oxSX2+Pre4LTN+WoEc0/vhucUYmrN5BX5oQ=="/>    
						
						<h2 className="result__heading">Identifying Information</h2>

						<div className="result__group--first-name">
							<label className="result__label" for="first_name">First Name</label>
							<input className="result__input" type="text" name="first_name" id="first_name"/>
						</div>
						
						<div className="result__group--middle-name">
							<label className="result__label" for="last_name">Middle Name</label>
							<input className="result__input" type="text" name="last_name" id="last_name"/>
						</div>

						<div className="result__group--last-name">
							<label className="result__label" for="last_name">Last Name</label>
							<input className="result__input" type="text" name="last_name" id="last_name"/>
						</div>

						<div className="result__group--birth-date">
							<label className="result__label" for="birth_date">Birth Date</label>
							<input className="result__input" type="date" name="birth_date" id="birth_date"/>
						</div>

						<div className="result__group--sex">
							<label className="result__label" for="sex">Sex</label>
							<input className="result__input" type="text" name="sex" id="sex"/>
						</div>

						<h2 className="result__heading">Contact Information</h2>

						<div className="result__group--phone">
							<label className="result__label" for="current__phone">Phone</label>
							<input className="result__input" type="text" name="current__phone" id="current__phone"/>
						</div>

						<div className="result__group--email">
							<label className="result__label" for="current__email">Email</label>
							<input className="result__input" type="text" name="current__email" id="current__email"/>
						</div>

						<h2 className="result__heading">Address</h2>

						<div className="result__group--street result-span-3">
							<label className="result__label" for="current_address">Street</label>
							<input className="result__input" type="text" name="current_address" id="current_address"/>
						</div>

						<div className="result__group--city">
							<label className="result__label" for="current_address">City</label>
							<input className="result__input" type="text" name="current_address" id="current_address"/>
						</div>

						<div className="result__group--state">
							<label className="result__label" for="current_address">State</label>
							<input className="result__input" type="text" name="current_address" id="current_address"/>
						</div>

						<div className="result__group--zip">
								<label className="result__label" for="current_address">Zip</label>
								<input className="result__input" type="text" name="current_address" id="current_address"/>
							</div>
										
						<input className="result__submit btn" type="submit" name="commit" value="Save Changes" data-disable-with="Login"/>
		</form>
		);
	}
	
	render(){
			return(
				<div className="secondary">
					<div className="content content--secondary">
						<div className="result">


						</div>
					</div>
				</div>
			);
	}
}