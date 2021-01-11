import React, { useState, useContext } from "react";
import { useHistory, Redirect } from "react-router-dom";

import { Context } from "../store/appContext";

export const Signup = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState();
	const history = useHistory();
	// #first value to read the state the second is to set the state
	const [password, setPassword] = useState();
	const [first, setFirst] = useState();
	const [last, setLast] = useState();
	const [birth, setBirth] = useState();
	return (
		<>
			{store.token ? <Redirect to="/" /> : ""}
			<form className="form-signin">
				<h1 className="loginTitle h3 mb-3 font-weight-normal">Please Sign Up</h1>
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
				<label htmlFor="inputFirst" className="sr-only">
					First Name
				</label>
				<input
					type="text"
					id="inputFirst"
					className="form-control"
					placeholder="First Name"
					required
					onChange={e => setFirst(e.target.value)}
				/>
				<label htmlFor="inputLast" className="sr-only">
					Last Name
				</label>
				<input
					type="text"
					id="inputLast"
					className="form-control"
					placeholder="Last Name"
					required
					onChange={e => setLast(e.target.value)}
				/>
				<label htmlFor="inputBirth" className="sr-only">
					Birth Date
				</label>
				<input
					type="text"
					id="inputBirth"
					className="form-control"
					placeholder="Birth Date"
					required
					onChange={e => setBirth(e.target.value)}
				/>
				{/* <div className="checkbox mb-3">
					<label>
						<input type="checkbox" value="remember-me" /> Remember me
					</label>
				</div> */}
				<button
					className="loginButton btn btn-lg btn-light btn-block"
					type="button"
					onClick={async () => {
						let success = await actions.signup(email, password, birth, first, last);
						if (success) {
							history.push("/");
						} else {
							alert("something went wrong, please try again");
						}
					}}>
					Sign Up
				</button>
				{/* <button
				className="btn btn-lg btn-primary btn-block"
				onClick={() => actions.signup(email, password, birth, first, last)}
				type="button">
				Sign Up
			</button> */}
			</form>
		</>
	);
};
