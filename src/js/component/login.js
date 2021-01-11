import React, { useState, useContext } from "react";
import { useHistory, Redirect } from "react-router-dom";
import Pretty from "../../img/pretty.jpg";

import { Context } from "../store/appContext";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState();

	// #first value to read the state the second is to set the state
	const [password, setPassword] = useState();
	return (
		<>
			{store.token != null ? <Redirect to="/" /> : ""}

			<form className="form-signin">
				<h1 className="loginTitle h3 mb-3 font-weight-normal">Please Sign In</h1>
				<label htmlFor="inputEmail" className="sr-only">
					Email Address
				</label>
				<input
					type="email"
					id="inputEmail"
					className="form-control"
					placeholder="Email address"
					required
					autoFocus
					onChange={e => setEmail(e.target.value)}
				/>
				<label htmlFor="inputPassword" className="sr-only">
					Password
				</label>
				<input
					type="password"
					id="inputPassword"
					className="form-control"
					placeholder="Password"
					required
					onChange={e => setPassword(e.target.value)}
				/>
				{/* <div className="checkbox mb-3">
					<label>
						<input type="checkbox" value="remember-me" /> Remember me
					</label>
				</div> */}
				<button
					className="loginButton btn btn-lg btn-light btn-block"
					onClick={async () => actions.login(email, password)}
					type="button">
					Login
				</button>
				<p className="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
			</form>
		</>
	);
};
