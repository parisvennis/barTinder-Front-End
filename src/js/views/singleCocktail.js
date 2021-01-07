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
								<img src={store.getCocktail[0].strDrinkThumb} className="card-img-top" alt="..." />
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
										{store.getCocktail[0].strIngredient6 != null && (
											<div>{store.getCocktail[0].strIngredient6}</div>
										)}
										{store.getCocktail[0].strIngredient7 != null && (
											<div>{store.getCocktail[0].strIngredient7}</div>
										)}
										{store.getCocktail[0].strIngredient8 != null && (
											<div>{store.getCocktail[0].strIngredient8}</div>
										)}
										{store.getCocktail[0].strIngredient9 != null && (
											<div>{store.getCocktail[0].strIngredient9}</div>
										)}
										{store.getCocktail[0].strIngredient10 != null && (
											<div>{store.getCocktail[0].strIngredient10}</div>
										)}
										{store.getCocktail[0].strIngredient11 != null && (
											<div>{store.getCocktail[0].strIngredient11}</div>
										)}
										{store.getCocktail[0].strIngredient12 != null && (
											<div>{store.getCocktail[0].strIngredient12}</div>
										)}
										{store.getCocktail[0].strIngredient13 != null && (
											<div>{store.getCocktail[0].strIngredient13}</div>
										)}
										{store.getCocktail[0].strIngredient14 != null && (
											<div>{store.getCocktail[0].strIngredient14}</div>
										)}
										{store.getCocktail[0].strIngredient15 != null && (
											<div>{store.getCocktail[0].strIngredient15}</div>
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
