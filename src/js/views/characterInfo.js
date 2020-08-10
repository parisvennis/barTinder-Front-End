import React, { Component } from "react";
import { Link } from "react-router-dom";

class CharacterInfo extends React.Component {
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
    return
    <>
	<div className="characterDetailContainer">
		<div>
			Character Details
			<span>Name: {this.state.people.name}</span>
			<span>Height: {this.state.people.height} </span>
			<span>Mass: {this.state.people.mass} </span>
			<span>hair_color: {this.state.people.hair_color} </span>
			<span>skin_color: {this.state.people.skin_color}  </span>
			<span>eye_color: {this.state.people.eye_color}  </span>
			<span>birth_year: {this.state.people.birth_year}  </span>
			<span>gender:{this.state.people.gender}  </span>
			<span>homeworld: {this.state.people.homeworld} </span>
		</div>
	</div>
    </>
}
}
