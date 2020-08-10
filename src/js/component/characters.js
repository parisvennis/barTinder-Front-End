import React from "react";

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
						src="https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg"
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
