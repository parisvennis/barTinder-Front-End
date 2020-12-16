import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Signup = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState();
	// #first value to read the state the second is to set the state
	const [password, setPassword] = useState();
	const [first, setFirst] = useState();
	const [last, setLast] = useState();
	const [birth, setBirth] = useState();
	return (
		<form className="form-signin">
			<img className="mb-4" src="/docs/4.5/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
			<h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
			<label htmlFor="inputEmail" className="sr-only">
				Email address
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
			<div className="checkbox mb-3">
				<label>
					<input type="checkbox" value="remember-me" /> Remember me
				</label>
			</div>
			<button
				className="btn btn-lg btn-primary btn-block"
				onClick={() => actions.signup(email, password, birth, first, last)}
				type="button">
				Sign in
			</button>
			<p className="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
		</form>
	);
};
