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
							<div className="card" style={{ width: "25rem" }}>
								<img src={store.getCocktail[0].strDrinkThumb} className="card-img-top" alt="..." />
								<div className="card-body bg-dark">
									<h5 className="card-title">{store.getCocktail[0].strDrink}</h5>
									<p className="card-text">
										Ingredients:
										<div className="ingredientGroup">
											{store.getCocktail[0].strMeasure1 != null && (
												<div>{store.getCocktail[0].strMeasure1}</div>
											)}
											{store.getCocktail[0].strIngredient1 != null && (
												<div className="secElement">{store.getCocktail[0].strIngredient1}</div>
											)}
										</div>
										<div className="ingredientGroup">
											{store.getCocktail[0].strMeasure2 != null && (
												<div>{store.getCocktail[0].strMeasure2}</div>
											)}
											{store.getCocktail[0].strIngredient2 != null && (
												<div className="secElement">{store.getCocktail[0].strIngredient2}</div>
											)}
										</div>
										<div className="ingredientGroup">
											{store.getCocktail[0].strMeasure3 != null && (
												<div>{store.getCocktail[0].strMeasure3}</div>
											)}
											{store.getCocktail[0].strIngredient3 != null && (
												<div className="secElement">{store.getCocktail[0].strIngredient3}</div>
											)}
										</div>
										<div className="ingredientGroup">
											{store.getCocktail[0].strMeasure4 != null && (
												<div>{store.getCocktail[0].strMeasure4}</div>
											)}
											{store.getCocktail[0].strIngredient4 != null && (
												<div className="secElement">{store.getCocktail[0].strIngredient4}</div>
											)}
										</div>
										<div className="ingredientGroup">
											{store.getCocktail[0].strMeasure5 != null && (
												<div>{store.getCocktail[0].strMeasure5}</div>
											)}
											{store.getCocktail[0].strIngredient5 != null && (
												<div className="secElement">{store.getCocktail[0].strIngredient5}</div>
											)}
										</div>
										<div className="ingredientGroup">
											{store.getCocktail[0].strMeasure6 != null && (
												<div>{store.getCocktail[0].strMeasure6}</div>
											)}
											{store.getCocktail[0].strIngredient6 != null && (
												<div className="secElement">{store.getCocktail[0].strIngredient6}</div>
											)}
										</div>
										<div className="ingredientGroup">
											{store.getCocktail[0].strMeasure7 != null && (
												<div>{store.getCocktail[0].strMeasure7}</div>
											)}
											{store.getCocktail[0].strIngredient7 != null && (
												<div className="secElement">{store.getCocktail[0].strIngredient7}</div>
											)}
										</div>
										<div className="ingredientGroup">
											{store.getCocktail[0].strMeasure8 != null && (
												<div>{store.getCocktail[0].strMeasure8}</div>
											)}
											{store.getCocktail[0].strIngredient8 != null && (
												<div className="secElement">{store.getCocktail[0].strIngredient8}</div>
											)}
										</div>
										<div className="ingredientGroup">
											{store.getCocktail[0].strMeasure9 != null && (
												<div>{store.getCocktail[0].strMeasure9}</div>
											)}
											{store.getCocktail[0].strIngredient9 != null && (
												<div className="secElement">{store.getCocktail[0].strIngredient9}</div>
											)}
										</div>
										<div className="ingredientGroup">
											{store.getCocktail[0].strMeasure10 != null && (
												<div>{store.getCocktail[0].strMeasure10}</div>
											)}
											{store.getCocktail[0].strIngredient10 != null && (
												<div className="secElement">{store.getCocktail[0].strIngredient10}</div>
											)}
										</div>
										<div className="ingredientGroup">
											{store.getCocktail[0].strMeasure11 != null && (
												<div>{store.getCocktail[0].strMeasure11}</div>
											)}
											{store.getCocktail[0].strIngredient11 != null && (
												<div className="secElement">{store.getCocktail[0].strIngredient11}</div>
											)}
											<div className="ingredientGroup">
												{store.getCocktail[0].strMeasure12 != null && (
													<div>{store.getCocktail[0].strMeasure12}</div>
												)}
											</div>
											{store.getCocktail[0].strIngredient12 != null && (
												<div className="secElement">{store.getCocktail[0].strIngredient12}</div>
											)}
										</div>
										<div className="ingredientGroup">
											{store.getCocktail[0].strMeasure13 != null && (
												<div>{store.getCocktail[0].strMeasure13}</div>
											)}
											{store.getCocktail[0].strIngredient13 != null && (
												<div className="secElement">{store.getCocktail[0].strIngredient13}</div>
											)}
										</div>
										<div className="ingredientGroup">
											{store.getCocktail[0].strMeasure14 != null && (
												<div>{store.getCocktail[0].strMeasure14}</div>
											)}
											{store.getCocktail[0].strIngredient14 != null && (
												<div className="secElement">{store.getCocktail[0].strIngredient14}</div>
											)}
										</div>
										<div className="ingredientGroup">
											{store.getCocktail[0].strMeasure15 != null && (
												<div>{store.getCocktail[0].strMeasure15}</div>
											)}
											{store.getCocktail[0].strIngredient15 != null && (
												<div className="secElement">{store.getCocktail[0].strIngredient15}</div>
											)}
										</div>
									</p>
									<p className="card-text instructions ">{store.getCocktail[0].strInstructions}</p>
									<button
										type="button"
										onClick={
											(async () =>
												actions.addFavorites(
													store.getCocktail[0].strId,
													store.getCocktail[0].strDrink
												),
											actions.checkFavorites(store.getCocktail[0].strDrink))
										}
										variant="outline-light">
										<i className="far fa-heart" />
									</button>
									{/* <FaveButton drink={store.getCocktail[0]} /> */}
									<a
										className="singCocktailHomeButton btn btn-outline-light btn-sm"
										href="/"
										role="button">
										Back Home
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

SingleCocktail.propTypes = { drink: PropTypes.object };

export default SingleCocktail;
