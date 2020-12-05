import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Characters extends React.Component {
	constructor(props) {
		super(props);
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
		let cardList = this.state.characterList.map((char, i) => {
			return (
				<div key={i} className="card" style={{ width: "18rem" }}>
					<img
						src={`https://loremflickr.com/200/200/cocktails?random=${i}`}
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<button
							type="button"
							className="btn btn-secondary"
							onClick={() => this.props.history.push(`/character-info/${i + 1}`)}>
							{char.name}
						</button>
					</div>
				</div>
			);
		});

		return <div className="cardListContainer">{cardList}</div>;
	}
}

Characters.propTypes = { history: PropTypes.object };

export default Characters;
