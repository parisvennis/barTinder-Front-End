import React from "react";
import "../../styles/home.scss";
import Cool from "../../img/cool.jpg";

export const Home = () => {
	return (
		<div className="jumbotron">
			<div>
				<img src={Cool} alt="backgroundImg" className="img-responsive" />
			</div>
			<div className="words">
				<h1 className="background display-4">Get Matched to Your Favorite Drink!</h1>
				<p className="lead col-6">
					We have designed a simple and fast quiz that will match you to the drink that best suits you! It
					takes into account your taste buds, allergies, and requests and creates your best match!
				</p>
				<a className="btn btn-outline-danger btn-lg" href="#" role="button">
					Quiz Me
				</a>
			</div>
		</div>
	);
};
