import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Redirect, useHistory, useParams } from "react-router-dom";

export const StepBase = function() {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const bases = ["Vodka", "Rum", "Gin", "Tequila", "Whiskey", "Non Alcoholic"];
	// const [base, setBase] = useState(null);

	return (
		<>
			<div id="questionContainer" className="container d-flex flex-column h-100 justify-content-center">
				<bold>
					<h1 className="questionTitle text-center mb-4">Select Your Base</h1>
				</bold>
				<div className="questionContainer">
					{bases.map((base, index) => {
						return (
							<button
								key={index}
								type="button"
								value={base}
								id="questionButton"
								className={`btn btn-primary btn-lg mb-3 p-2 ${store.base.includes(base) &&
									"baseButton"}`}
								onClick={e => actions.setBase(e.target.value, index)}>
								{base}
							</button>
						);
					})}
				</div>
				<span>
					<button
						onClick={async () => {
							let success = await actions.addBase();

							if (success) {
								history.push("/stepModifier");
							} else {
								alert("something went wrong, please try again");
							}
						}}
						type="button"
						className="btn btn-light mx-auto w-25">
						Next
					</button>
				</span>
			</div>
		</>
	);
};
