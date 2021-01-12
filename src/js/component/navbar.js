import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import Logo from "../../img/logo.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<div className="search">
						<input
							id="nav-search-input"
							name="q"
							type="text"
							placeholder="Search Drinks"
							spellCheck="false"
							autoCorrect="off"
							autoCapitalize="on"
							autoComplete="off"
						/>
					</div>
					<div className="social">
						<span className="navbar-brand mb-0 mr-0 h1">
							<i className="fab fa-facebook-square" aria-hidden="true" />
							<i className="fab fa-instagram" aria-hidden="true" />
							<i className="fab fa-tumblr" aria-hidden="true" />
							<i className="fab fa-twitter" aria-hidden="true" />
							<i className="fab fa-youtube" aria-hidden="true" />
						</span>
					</div>
				</Link>

				<div className="logo" style={{ margin: "0 auto" }}>
					<img src={Logo} height="75" />
				</div>

				<div className="login">
					{store.token == null ? (
						<>
							<Link to="/login" className="signup">
								<span className="gradient" />
								Login
							</Link>
							<Link to="/signup" className="signup">
								<span className="gradient" />
								Sign Up
							</Link>
						</>
					) : (
						<Link to="/" className="signup" onClick={() => actions.logout()}>
							<span className="gradient" />
							Logout
						</Link>
					)}
				</div>
			</nav>
			{/* top navbar  */}

			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="#" />
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<Link className="nav-link" to="/">
								HOME
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/questions">
								TAKE THE QUIZ
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/random-cocktails">
								RANDOM COCKTAILS
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/popular-cocktails">
								POPULAR COCKTAILS
							</Link>
						</li>
						{store.token != null && (
							<li className="nav-item">
								<Link className="nav-link" to="/favorites">
									MY FAVORITES
								</Link>
							</li>
						)}
					</ul>
				</div>
			</nav>
		</>
	);
};
