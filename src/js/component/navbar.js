import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<i className="fa fa-facebook-square" aria-hidden="true" />
						<i className="fa fa-instagram" aria-hidden="true" />
					</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div>
			</nav>

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
							<a className="nav-link" href="#">
								NEWS + BLOG <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								VIDEO
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								FILMS
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled" href="#">
								SERIES
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled" href="#">
								INTERACTIVE
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled" href="#">
								COMMUNITY
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled" href="#">
								DATABANK
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};
