import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Redirect, useHistory, useParams } from "react-router-dom";

export const StepMods = function() {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const mods = [
		"Agave",
		"Amaretto",
		"Apple Schnapps",
		"Baileys",
		"Banana",
		"Bitters",
		"Blackberries",
		"Blue Curacao",
		"Champagne",
		"Cherries",
		"Cinnamon Schnapps",
		"Club Soda",
		"Coca-Cola",
		"Coconut",
		"Coffee",
		"Cranberry",
		"Fruit",
		"Ginger Ale",
		"Ginger Beer",
		"Grapefruit Juice",
		"Grenadine",
		"Kahlua",
		"Lemon",
		"Lime",
		"Melon Liquor",
		"Midori",
		"Mint",
		"Orange",
		"Orange Juice",
		"Passion Fruit",
		"Peach",
		"Peach Schnapps",
		"Pineapple Juice",
		"Raspberry",
		"Raspberry Liquor",
		"Root Beer",
		"Schnapps",
		"Soda Water",
		"Sorite",
		"Strawberries",
		"Strawberry Liquor",
		"Sugar",
		"Sweet and Sour",
		"Sweet Vermouth",
		"Tomato Juice",
		"Tonic Water",
		"Triple Sec",
		"Vermouth",
		"Water",
		"Watermelom Schnapps",
		"Whipped Cream",
		"Caramel Sauce",
		"Chocolate Sauce"
	];
	// const [mod, setmod] = useState(null);

	return (
		<>
			<div id="questionContainer" className="container">
				<bold>
					<h1 className="questionTitle text-center mb-4">Select Your Modifiers</h1>
				</bold>
				{mods.map((mod, index) => {
					return (
						<button
							key={index}
							type="button"
							value={mod}
							id="questionButton2"
							className={`btn btn-primary btn-lg mb-3 p-2 ${store.mod.includes(mod) && "modButton"}`}
							onClick={e => actions.setMod(e.target.value, index)}>
							{mod}
						</button>
					);
				})}
				<div className="nextButton">
					<button
						onClick={async () => {
							let success = await actions.addMods();

							if (success) {
								history.push("/results");
							} else {
								alert("something went wrong, please try again");
							}
						}}
						type="button"
						className="btn btn-light mx-auto w-25">
						Next
					</button>
				</div>
			</div>
		</>
	);
};
