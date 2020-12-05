import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Planets extends React.Component {
	constructor(props) {
		super(props);
		this.state = { planetList: [] };
	}

	componentDidMount() {
		fetch("https://swapi.dev/api/planets/")
			.then(info => info.json())
			.then(answer => {
				this.setState({ planetList: answer.results });
			});
	}

	render() {
		let planetCards = this.state.planetList.map((planet, i) => {
			return (
				<div key={i} className="card" style={{ width: "18rem" }}>
					<img
						src={`https://loremflickr.com/200/200/planets?random=${i}`}
						className="card-img-top"
						alt="..."
					/>
					<button
						type="button"
						className="btn btn-secondary"
						onClick={() => this.props.history.push(`/planet-info/${i + 1}`)}>
						{planet.name}
					</button>
				</div>
			);
		});
		return <div className="fullPlanetList">{planetCards}</div>;
	}
}

Planets.propTypes = { history: PropTypes.object };

export default Planets;
