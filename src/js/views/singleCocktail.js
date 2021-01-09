import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaveButton } from "../component/faveButton";
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
										{store.getCocktail[0].strMeasure1 != null && (
											<div>{store.getCocktail[0].strMeasure1}</div>
										)}
										{store.getCocktail[0].strIngredient1 != null && (
											<div>{store.getCocktail[0].strIngredient1}</div>
										)}
										{store.getCocktail[0].strMeasure2 != null && (
											<div>{store.getCocktail[0].strMeasure2}</div>
										)}
										{store.getCocktail[0].strIngredient2 != null && (
											<div>{store.getCocktail[0].strIngredient2}</div>
										)}
										{store.getCocktail[0].strMeasure3 != null && (
											<div>{store.getCocktail[0].strMeasure3}</div>
										)}
										{store.getCocktail[0].strIngredient3 != null && (
											<div>{store.getCocktail[0].strIngredient3}</div>
										)}
										{store.getCocktail[0].strMeasure4 != null && (
											<div>{store.getCocktail[0].strMeasure4}</div>
										)}
										{store.getCocktail[0].strIngredient4 != null && (
											<div>{store.getCocktail[0].strIngredient4}</div>
										)}
										{store.getCocktail[0].strMeasure5 != null && (
											<div>{store.getCocktail[0].strMeasure5}</div>
										)}
										{store.getCocktail[0].strIngredient5 != null && (
											<div>{store.getCocktail[0].strIngredient5}</div>
										)}
										{store.getCocktail[0].strMeasure6 != null && (
											<div>{store.getCocktail[0].strMeasure6}</div>
										)}
										{store.getCocktail[0].strIngredient6 != null && (
											<div>{store.getCocktail[0].strIngredient6}</div>
										)}
										{store.getCocktail[0].strMeasure7 != null && (
											<div>{store.getCocktail[0].strMeasure7}</div>
										)}
										{store.getCocktail[0].strIngredient7 != null && (
											<div>{store.getCocktail[0].strIngredient7}</div>
										)}
										{store.getCocktail[0].strMeasure8 != null && (
											<div>{store.getCocktail[0].strMeasure8}</div>
										)}
										{store.getCocktail[0].strIngredient8 != null && (
											<div>{store.getCocktail[0].strIngredient8}</div>
										)}
										{store.getCocktail[0].strMeasure9 != null && (
											<div>{store.getCocktail[0].strMeasure9}</div>
										)}
										{store.getCocktail[0].strIngredient9 != null && (
											<div>{store.getCocktail[0].strIngredient9}</div>
										)}
										{store.getCocktail[0].strMeasure10 != null && (
											<div>{store.getCocktail[0].strMeasure10}</div>
										)}
										{store.getCocktail[0].strIngredient10 != null && (
											<div>{store.getCocktail[0].strIngredient10}</div>
										)}
										{store.getCocktail[0].strMeasure11 != null && (
											<div>{store.getCocktail[0].strMeasure11}</div>
										)}
										{store.getCocktail[0].strIngredient11 != null && (
											<div>{store.getCocktail[0].strIngredient11}</div>
										)}
										{store.getCocktail[0].strMeasure12 != null && (
											<div>{store.getCocktail[0].strMeasure12}</div>
										)}
										{store.getCocktail[0].strIngredient12 != null && (
											<div>{store.getCocktail[0].strIngredient12}</div>
										)}
										{store.getCocktail[0].strMeasure13 != null && (
											<div>{store.getCocktail[0].strMeasure13}</div>
										)}
										{store.getCocktail[0].strIngredient13 != null && (
											<div>{store.getCocktail[0].strIngredient13}</div>
										)}
										{store.getCocktail[0].strMeasure14 != null && (
											<div>{store.getCocktail[0].strMeasure14}</div>
										)}
										{store.getCocktail[0].strIngredient14 != null && (
											<div>{store.getCocktail[0].strIngredient14}</div>
										)}
										{store.getCocktail[0].strMeasure15 != null && (
											<div>{store.getCocktail[0].strMeasure15}</div>
										)}
										{store.getCocktail[0].strIngredient15 != null && (
											<div>{store.getCocktail[0].strIngredient15}</div>
										)}
									</p>
									<p className="card-text instructions ">{store.getCocktail[0].strInstructions}</p>
									<FaveButton drink={store.getCocktail[0]} />
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};

SingleCocktail.propTypes = { drink: PropTypes.object };

export default SingleCocktail;
