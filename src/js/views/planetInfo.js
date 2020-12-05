import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class PlanetInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = { planet: [] };
	}

	componentDidMount() {
		fetch(`https://swapi.dev/api/people/${this.props.match.params.id}/`)
			.then(data => data.json())
			.then(response => {
				this.setState({ planet: response });
			});
	}

	render() {
		console.log(this.state);
		return (
			<>
				<div className="indivPlanetCards" style={{ width: "18rem" }}>
					<img src="https://loremflickr.com/200/200/planets?random=" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">{this.state.planet.name}</h5>
						<p className="card-text">
							<div className="planetDetailContainer">
								Planet Details
								<span>
									<h2>Climate:</h2> {this.state.planet.climate}
								</span>
								<br />
								<span>Created: {this.state.planet.created}</span>
								<br />
								<span>Diameter: {this.state.planet.diameter}</span>
								<br />
								<span>Edited: {this.state.planet.edited}</span>
								<span>Films: {this.state.planet.films}</span>
								<span>Gravity: {this.state.planet.gravity}</span>
								<span>Orbital Period: {this.state.planet.orbital_period}</span>
								<span>Population: {this.state.planet.population}</span>
								<span>Residents: {this.state.planet.residents}</span>
								<span>Rotation Period: {this.state.planet.rotation_period}</span>
								<span>Surface Water: {this.state.planet.surface_water}</span>
								<span>Terrain: {this.state.planet.terrain}</span>
								<span>URL: {this.state.planet.url}</span>
							</div>
						</p>
					</div>
				</div>
			</>
		);
	}
}
PlanetInfo.propTypes = { match: PropTypes.object };

export default PlanetInfo;
