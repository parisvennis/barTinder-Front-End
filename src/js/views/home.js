import React from "react";
import "../../styles/home.scss";

export const Home = () => {
	return (
		<div className="jumbotron">
			<h1 className="display-4">Get Matched to Your Favorite Drink!</h1>
			<p className="lead">
				We have designed a simple and fast quiz that will match you to the drink that best suits you! It takes
				into account your taste buds, allergies, and requests and creates your best match!
			</p>
			<hr className="my-4" />
			<p>
				It uses utility classNamees for typography and spacing to space content out within the larger container.
			</p>
			<a className="btn btn-primary btn-lg" href="#" role="button">
				Learn more
			</a>
		</div>
	);
};
