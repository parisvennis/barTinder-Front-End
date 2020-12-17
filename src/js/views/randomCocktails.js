import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class RandomCocktails extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let cardList = store.actions.getRandomCocktails.map((cocktail, i) => {
			return (
				<>
					<div key={i} className="cards" style={{ width: "18rem" }}>
						<img src={cardList.cocktail.strDrink} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">{this.state.character.name}</h5>
							<p className="card-text">
								<div className="characterDetailContainer">
									Character Details
									<span>Name: {this.state.character.name}</span>
									<span>Height: {this.state.character.height} </span>
									<span>Mass: {this.state.character.mass} </span>
									<span>Hair Color: {this.state.character.hair_color} </span>
									<span>Skin Color: {this.state.character.skin_color} </span>
									<span>Eye Color: {this.state.character.eye_color} </span>
									<span>Birth Year: {this.state.character.birth_year} </span>
									<span>Gender: {this.state.character.gender}</span>
									<span>Homeworld: {this.state.character.homeworld} </span>
								</div>
							</p>
						</div>
					</div>
				</>
			);
		});
	}
}

Characters.propTypes = { history: PropTypes.object };

export default RandomCocktails;
