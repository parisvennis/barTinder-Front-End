import React, { Component, useContext } from "react";
import { Button } from "react-bootstrap";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const FaveButton = drink => {
	const { store, actions } = useContext(Context);
	console.log(drink);
	return (
		<Button
			onClick={
				(async () => actions.addFavorites(drink.drink.idDrink, drink.drink.strDrink),
				actions.checkFavorites(drink.drink.strDrink))
			}
			variant="outline-light">
			<i className="far fa-heart" />
		</Button>
	);
};

FaveButton.propTypes = { drink: PropTypes.object };
