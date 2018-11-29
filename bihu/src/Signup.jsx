import React from 'react';
import './Signup.css';

import bihulogo from './images/bihulogo.jpg';

const Signup = () => {

return(
  <div className="root">
		<div className="SignContainer" >
			<img className="bihulogo" src={bihulogo} alt="bihulogo"/>
			<div className="slogan">Welcome to bihu to see another world!</div>
			<form className="Register-form" action="post">
				<div className="inputs">
					<input id="username" type="text" placeholder="username"/>
					<input id="password" type="text" placeholder="password"/>
					<button id="signup-button">Signup</button>
				</div>
			</form>
		</div>
	</div>
);
};


export default Signup;