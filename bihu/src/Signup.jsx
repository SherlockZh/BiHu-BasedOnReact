import React from 'react';
import './Signup.css';

import bihulogo from './images/bihulogo.jpg';

const Signup = ({
	username,
	updateTempUsername,
	password,
	updateTempPassword,
	executeSignup,
	executeLogin,
	loginDirectly,
	changeBtnText
}) => {

	return(
		<div className="root">
			<div className="SignContainer" >
				<img className="bihulogo" src={bihulogo} alt="bihulogo"/>
				<div className="slogan">Welcome to bihu to see another world!</div>
				{<div className="tip">Invalid Username or Password! Please Try Again.</div>}
					<div className="inputs">
						<input 
							className='input'
							onChange={updateTempUsername}
							id="username" 
							type="text" 
							placeholder="username"
							value={username}
						/>
						<input 
							className='input'
							onChange={updateTempPassword}
							id="password" 
							type="text" 
							placeholder="password"
							value={password}
						/>
						{loginDirectly || <button 
							id="signup-button" 
							onClick={executeSignup}
						>Signup</button>}
						{loginDirectly && <button 
							id="login-button" 
							onClick={executeLogin}
						>login</button>}
					</div>
					{loginDirectly || <div className="login-directly">
						If you've already an account, please
						<button className="loginBtn-onSignup" onClick={changeBtnText}>
						login
						</button>directly.
					</div>}
			</div>
		</div>
	);
};


export default Signup;