import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const Favorites = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			{store.favorites.length > 1 &&
				store.favorites.map((favorite, i) => {
					console.log(favorite);
					return (
						<>
							<div key={i} id="favorites" className="card" style={{ width: "18rem" }}>
								<img src={favorite.drink_img} className="card-img-top" alt="..." />
								<div className="card-body">
									<Link to={`/single-cocktail`}>
										<button
											type="button"
											className="btn btn-basic"
											// onClick={() => actions.getCocktail(cocktail.idDrink)}
										>
											{favorite.drink_name}
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

// favorites.propTypes = { history: PropTypes.object };

export default Favorites;
