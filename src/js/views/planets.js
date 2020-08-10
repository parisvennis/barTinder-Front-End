import React from "react";
import { Link } from "react-router-dom";

class Planets extends React.Component {
	constructor() {
		super();
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
		let planetCards = this.state.planetList.map((planets, i) => {
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
				</div>
			);
		});
		return <div className="fullPlanetList">{planetCards}</div>;
	}
}
export default Planets;
