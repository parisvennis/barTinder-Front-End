import React from "react";
import "../../styles/home.scss";
import { Button } from "bootstrap";

export const Home = () => {
	return (
		<div className="words">
			<bold>
				<h1 className="homeTitle background display-4">Get Matched to Your Favorite Drink!</h1>
			</bold>
			<p className="homeMid">
				We have designed a simple and fast quiz that will match you to the drink that best suits you! It takes
				into account your taste buds, allergies, and requests and creates your best match!
			</p>
			<a className="homeTitle btn btn-outline-light btn-lg" href="/questions" role="button">
				Quiz Me
			</a>
		</div>
	);
};
