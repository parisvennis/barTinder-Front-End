import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Redirect, useHistory, useParams } from "react-router-dom";

export const StepMods = function() {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const mods = ["triple sec", "Strawberry Liquer", "Peach Schnapps", "Tequila", "Whiskey", "Non Alcoholic"];
	// const [mod, setmod] = useState(null);

	return (
		<>
			<div className="container d-flex flex-column h-100 justify-content-center">
				<h3 className="text-center mb-4" style={{ color: "white" }}>
					Select Your Modifiers
				</h3>
				{mods.map((mod, index) => {
					return (
						<button
							key={index}
							type="button"
							value={mod}
							id="Q1"
							className={`btn btn-primary btn-lg mb-3 p-2 ${store.mod.includes(mod) && "modButton"}`}
							onClick={e => actions.setMod(e.target.value, index)}>
							{mod}
						</button>
					);
				})}

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
		</>
	);
};
