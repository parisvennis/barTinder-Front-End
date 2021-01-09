import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const Results = () => {
	const { store, actions } = useContext(Context);

	console.log(store.currentMod);
	return (
		<>
			{store.currentMod.drinks.length > 0 &&
				store.currentMod.drinks.map((cocktail, i) => {
					return (
						<>
							<div key={i} id="singCocktail" className="card" style={{ width: "18rem" }}>
								<img src={cocktail.strDrinkThumb} className="card-img-top" alt="..." />
								<div className="card-body">
									<Link to={`/single-cocktail`}>
										<button
											type="button"
											className="btn btn-basic"
											onClick={() => actions.getCocktail(cocktail.idDrink)}>
											{cocktail.strDrink}
										</button>
									</Link>
								</div>
							</div>
						</>
					);
				})}
		</>
	);
};

// RandomCocktails.propTypes = { history: PropTypes.object };

export default Results;
