import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const RandomCocktails = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			{store.randomCocktails.map((cocktail, i) => {
				return (
					<>
						<div key={i} className="cards" style={{ width: "18rem" }}>
							<img src={cocktail.strDrinkThumb} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{cocktail.strDrink}</h5>
								<p className="card-text">
									{/* <div className="cocktailDetailContainer">
									Cocktail Details
									<span>Name: {this.state.cocktail.strDrink}</span>
									<span>Height: {this.state.cocktail.height} </span>
									<span>Mass: {this.state.cocktail.mass} </span>
									<span>Hair Color: {this.state.cocktail.hair_color} </span>
									<span>Skin Color: {this.state.cocktail.skin_color} </span>
									<span>Eye Color: {this.state.cocktail.eye_color} </span>
									<span>Birth Year: {this.state.cocktail.birth_year} </span>
									<span>Gender: {this.state.cocktail.gender}</span>
									<span>Homeworld: {this.state.cocktail.homeworld} </span>
								</div> */}
								</p>
							</div>
						</div>
					</>
				);
			})}
		</>
	);
};

// RandomCocktails.propTypes = { history: PropTypes.object };

export default RandomCocktails;
