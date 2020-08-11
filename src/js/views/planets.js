import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Planets extends React.Component {
	constructor(props) {
		super(props);
		this.state = { planet: [] };
	}

	componentDidMount() {
		fetch("https://swapi.dev/api/planets/")
			.then(info => info.json())
			.then(answer => {
				this.setState({ planetList: answer.results });
			});
	}

	render() {
		let planetCards = this.state.planetList.map((planets, i) => {
			console.log(props);
			return (
				<div key={i} className="card" style={{ width: "18rem" }}>
					<img
						src={`https://loremflickr.com/200/200/planets?random=${i}`}
						className="card-img-top"
						alt="..."
					/>

					<div className="card-body">
						<h5 className="card-title">{planets.name}</h5>
					</div>
					<button
						type="button"
						className="btn btn-secondary"
						onClick={() => this.props.history.push(`/planet-info/${i + 1}`)}>
						{char.name}
					</button>
				</div>
			);
		});
		return <div className="fullPlanetList">{planetCards}</div>;
	}
}

Planets.propTypes = { history: PropTypes.object };

export default Planets;
