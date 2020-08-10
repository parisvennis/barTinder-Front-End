import React from "react";
import { Link } from "react-router-dom";

class Characters extends React.Component {
	constructor() {
		super();
		this.state = { characterList: [] };
	}

	componentDidMount() {
		fetch("https://swapi.dev/api/people/")
			.then(data => data.json())
			.then(response => {
				this.setState({ characterList: response.results });
			});
	}

	render() {
		console.log(this.state);
		let cardList = this.state.characterList.map((char, i) => {
			return (
				<div key={i} className="card" style={{ width: "18rem" }}>
					<img
						src={`https://loremflickr.com/200/200/starwars?random=${i}`}
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<p className="card-text">{char.name}</p>
					</div>
				</div>
			);
		});

		return <div className="cardListContainer">{cardList}</div>;
	}
}
export default Characters;
