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
			<div className="container d-flex flex-column h-100 justify-content-center">
				<h3 className="text-center mb-4" style={{ color: "white" }}>
					Select Your Base
				</h3>
				{bases.map((base, index) => {
					return (
						<button
							key={index}
							type="button"
							value={base}
							id="Q1"
							className={`btn btn-primary btn-lg mb-3 p-2 ${store.base.includes(base) && "baseButton"}`}
							onClick={e => actions.setBase(e.target.value, index)}>
							{base}
						</button>
					);
				})}

				<button
					onClick={async () => {
						let success = await actions.addBase();

						if (success) {
							history.push("/");
						} else {
							alert("something went wrong, please try again");
						}
					}}
					type="button"
					className="btn btn-basic mx-auto w-25">
					Next
				</button>
			</div>
		</>
	);
};
