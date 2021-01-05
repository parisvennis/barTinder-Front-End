import React from "react";
import "../../styles/home.scss";

export const Home = () => {
	return (
		<div className="words">
			<h1 className="background display-4">Get Matched to Your Favorite Drink!</h1>
			<p>
				We have designed a simple and fast quiz that will match you to the drink that best suits you! It takes
				into account your taste buds, allergies, and requests and creates your best match!
			</p>
			<a className="btn btn-outline-danger btn-lg" href="#" role="button">
				Quiz Me
			</a>
		</div>
	);
};
