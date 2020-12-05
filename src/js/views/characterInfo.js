import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class CharacterInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = { character: [] };
	}

	componentDidMount() {
		fetch(`https://swapi.dev/api/people/${this.props.match.params.id}/`)
			.then(data => data.json())
			.then(response => {
				this.setState({ character: response });
			});
	}

	render() {
		console.log(this.state);
		return (
			<>
				<div className="cards" style={{ width: "18rem" }}>
					<img src="https://loremflickr.com/200/200/starwars?random=" className="card-img-top" alt="..." />
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
	}
}
CharacterInfo.propTypes = { match: PropTypes.object };

export default CharacterInfo;
