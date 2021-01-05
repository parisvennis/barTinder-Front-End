import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const SingleCocktail = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			{store.getCocktail.length > 0 && (
				<>
					<div className="singleRecipe">
						<div className="content">
							<div className="card" style={{ width: "18rem" }}>
								{/* <img src="..." className="card-img-top" alt="..." /> */}
								<div className="card-body bg-dark">
									<h5 className="card-title">{store.getCocktail[0].strDrink}</h5>
									<p className="card-text">
										Ingredients:
										{store.getCocktail[0].strIngredient1 != null && (
											<div>{store.getCocktail[0].strIngredient1}</div>
										)}
										{store.getCocktail[0].strIngredient2 != null && (
											<div>{store.getCocktail[0].strIngredient2}</div>
										)}
										{store.getCocktail[0].strIngredient3 != null && (
											<div>{store.getCocktail[0].strIngredient3}</div>
										)}
										{store.getCocktail[0].strIngredient4 != null && (
											<div>{store.getCocktail[0].strIngredient4}</div>
										)}
										{store.getCocktail[0].strIngredient5 != null && (
											<div>{store.getCocktail[0].strIngredient5}</div>
										)}
									</p>
									<a href="#" className="btn btn-primary">
										Go somewhere
									</a>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};

// RandomCocktails.propTypes = { history: PropTypes.object };

export default SingleCocktail;
